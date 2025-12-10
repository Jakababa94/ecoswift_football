import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import {
    LayoutDashboard,
    Users,
    Calendar,
    BookOpen,
    Globe,
    FileText,
    LogOut,
    Menu,
    X
} from 'lucide-react';

const AdminLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        try {
            const { data: { session } } = await supabase.auth.getSession();

            if (!session) {
                navigate('/admin/login');
                return;
            }

            // Verify admin role
            const { data: user, error } = await supabase
                .from('users')
                .select('role')
                .eq('id', session.user.id)
                .single();

            if (error || user?.role !== 'admin') {
                await supabase.auth.signOut();
                navigate('/admin/login');
                return;
            }

            setLoading(false);
        } catch (err) {
            console.error('Auth check error:', err);
            navigate('/admin/login');
        }
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate('/admin/login');
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-dark-bg flex items-center justify-center text-gold">
                Loading Admin Portal...
            </div>
        );
    }

    const navItems = [
        { path: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
        { path: '/admin/teams', icon: Users, label: 'Teams' },
        { path: '/admin/fixtures', icon: Calendar, label: 'Fixtures & Results' },
        { path: '/admin/skills', icon: BookOpen, label: 'Skills Hub' },
        { path: '/admin/sponsors', icon: Globe, label: 'Sponsors' },
        { path: '/admin/audit', icon: FileText, label: 'Audit Logs' },
    ];

    return (
        <div className="min-h-screen bg-dark-bg text-white flex">
            {/* Sidebar */}
            <aside
                className={`${sidebarOpen ? 'w-64' : 'w-20'
                    } bg-dark-surface border-r border-white/10 transition-all duration-300 flex flex-col fixed h-full z-20`}
            >
                <div className="h-16 flex items-center justify-between px-4 border-b border-white/10">
                    {sidebarOpen ? (
                        <div className="font-bold text-xl text-gold">ADMIN</div>
                    ) : (
                        <div className="font-bold text-xl text-gold mx-auto">A</div>
                    )}
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="p-1 hover:bg-white/10 rounded"
                    >
                        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                <nav className="flex-1 py-4 flex flex-col gap-1 overflow-y-auto">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path || (item.path !== '/admin' && location.pathname.startsWith(item.path));
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center gap-3 px-4 py-3 mx-2 rounded transition-colors ${isActive
                                        ? 'bg-gold/20 text-gold'
                                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                    }`}
                                title={!sidebarOpen ? item.label : ''}
                            >
                                <item.icon size={20} />
                                {sidebarOpen && <span>{item.label}</span>}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-white/10">
                    <button
                        onClick={handleLogout}
                        className={`flex items-center gap-3 w-full px-4 py-3 rounded text-red-400 hover:bg-red-500/10 transition-colors ${!sidebarOpen && 'justify-center px-0'
                            }`}
                        title="Logout"
                    >
                        <LogOut size={20} />
                        {sidebarOpen && <span>Logout</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
                <div className="p-8">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
