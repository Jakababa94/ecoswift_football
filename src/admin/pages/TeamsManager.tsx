import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Search, Download, CheckCircle, XCircle } from 'lucide-react';

interface Team {
    id: string;
    name: string;
    captain_name: string;
    captain_phone: string;
    captain_email: string | null;
    num_players: number | null;
    registration_status: string | null;
    created_at: string | null;
}

const TeamsManager = () => {
    const [teams, setTeams] = useState<Team[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetchTeams();
    }, []);

    const fetchTeams = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('teams')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching teams:', error);
        } else {
            setTeams(data || []);
        }
        setLoading(false);
    };

    const updateStatus = async (id: string, status: string) => {
        const { error } = await supabase
            .from('teams')
            .update({ registration_status: status as any })
            .eq('id', id);

        if (error) {
            console.error('Error updating status:', error);
            alert('Failed to update status');
        } else {
            fetchTeams();
        }
    };

    const downloadCSV = () => {
        const headers = ['ID', 'Team Name', 'Captain Name', 'Phone', 'Email', 'Players', 'Status', 'Registered At'];
        const csvContent = [
            headers.join(','),
            ...teams.map(team => [
                team.id,
                `"${team.name}"`,
                `"${team.captain_name}"`,
                team.captain_phone,
                team.captain_email || '',
                team.num_players || '',
                team.registration_status || 'pending',
                team.created_at || ''
            ].join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'ecoswift_teams.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const filteredTeams = teams.filter(team => {
        const matchesSearch = team.name.toLowerCase().includes(search.toLowerCase()) ||
            team.captain_name.toLowerCase().includes(search.toLowerCase());
        const matchesFilter = filter === 'all' || team.registration_status === filter;
        return matchesSearch && matchesFilter;
    });

    const getStatusColor = (status: string | null) => {
        switch (status) {
            case 'paid': return 'text-green-400 bg-green-400/10 border-green-400/20';
            case 'confirmed': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
            case 'rejected': return 'text-red-400 bg-red-400/10 border-red-400/20';
            default: return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
        }
    };

    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white">Teams Management</h1>
                    <p className="text-gray-400 mt-1">Manage registrations and approvals</p>
                </div>
                <button
                    onClick={downloadCSV}
                    className="flex items-center gap-2 btn-gold px-4 py-2 rounded text-black font-bold hover:bg-yellow-500"
                >
                    <Download size={18} />
                    Export CSV
                </button>
            </div>

            {/* Filters */}
            <div className="bg-dark-surface p-4 rounded-lg border border-white/10 mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex gap-2 bg-black/50 p-1 rounded-lg w-full md:w-auto overflow-x-auto">
                    {['all', 'pending', 'paid', 'confirmed', 'rejected'].map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-4 py-2 rounded capitalize text-sm whitespace-nowrap ${filter === f ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
                <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <input
                        type="text"
                        placeholder="Search teams..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-black/50 border border-white/10 rounded pl-10 p-2 text-white focus:outline-none focus:border-gold"
                    />
                </div>
            </div>

            {/* Table */}
            <div className="bg-dark-surface rounded-lg border border-white/10 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-black/50 text-gray-400 uppercase text-xs">
                            <tr>
                                <th className="px-6 py-4">Team Info</th>
                                <th className="px-6 py-4">Captain</th>
                                <th className="px-6 py-4 text-center">Players</th>
                                <th className="px-6 py-4 text-center">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {loading ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-8 text-center text-gray-400">Loading teams...</td>
                                </tr>
                            ) : filteredTeams.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-8 text-center text-gray-400">No teams found matching your filters.</td>
                                </tr>
                            ) : (
                                filteredTeams.map((team) => (
                                    <tr key={team.id} className="hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="font-bold text-white">{team.name}</div>
                                            <div className="text-xs text-gray-500">ID: {team.id.slice(0, 8)}</div>
                                        </td>
                                        <td className="px-6 py-4 text-sm">
                                            <div className="text-white">{team.captain_name}</div>
                                            <div className="text-gray-400">{team.captain_phone}</div>
                                            <div className="text-gray-500 text-xs">{team.captain_email}</div>
                                        </td>
                                        <td className="px-6 py-4 text-center text-white">
                                            {team.num_players || '-'}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className={`px-2 py-1 rounded text-xs font-medium border ${getStatusColor(team.registration_status)} capitalize`}>
                                                {team.registration_status || 'pending'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                {team.registration_status !== 'confirmed' && (
                                                    <button
                                                        onClick={() => updateStatus(team.id, 'confirmed')}
                                                        className="p-2 bg-green-500/10 text-green-500 rounded hover:bg-green-500/20"
                                                        title="Confirm"
                                                    >
                                                        <CheckCircle size={18} />
                                                    </button>
                                                )}
                                                {team.registration_status !== 'rejected' && (
                                                    <button
                                                        onClick={() => updateStatus(team.id, 'rejected')}
                                                        className="p-2 bg-red-500/10 text-red-500 rounded hover:bg-red-500/20"
                                                        title="Reject"
                                                    >
                                                        <XCircle size={18} />
                                                    </button>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TeamsManager;
