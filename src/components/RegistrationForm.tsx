
import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        captain_name: '',
        captain_phone: '',
        captain_email: '',
        num_players: ''
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus('idle');
        setErrorMessage('');

        try {
            const { error } = await supabase
                .from('teams')
                .insert([{
                    name: formData.name,
                    captain_name: formData.captain_name,
                    captain_phone: formData.captain_phone,
                    captain_email: formData.captain_email,
                    num_players: formData.num_players ? parseInt(formData.num_players) : null
                }]);

            if (error) throw error;

            setStatus('success');
            setFormData({
                name: '',
                captain_name: '',
                captain_phone: '',
                captain_email: '',
                num_players: ''
            });
        } catch (error: any) {
            console.error('Error registering team:', error);
            setStatus('error');
            setErrorMessage(error.message || 'Failed to register. Please check your connection or try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="section-container pb-20">
            <div className="glass-card max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold mb-2 text-center">REGISTER YOUR TEAM</h2>
                <p className="text-center text-gray-400 mb-8">Join the league of champions. Sign up today.</p>

                {status === 'success' ? (
                    <div className="text-center py-10">
                        <div className="flex justify-center mb-4">
                            <CheckCircle size={64} className="text-green" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">REGISTRATION SUCCESSFUL!</h3>
                        <p className="text-gray-300">We have received your details. Our team will contact you shortly.</p>
                        <button
                            onClick={() => setStatus('idle')}
                            className="mt-6 text-gold underline hover:text-white"
                        >
                            Register another team
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Team Name</label>
                                <input
                                    required
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-black/50 border border-white/20 rounded px-4 py-3 text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
                                    placeholder="e.g. Nairobi Stars"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Number of Players</label>
                                <input
                                    required
                                    type="number"
                                    min="7"
                                    max="30"
                                    name="num_players"
                                    value={formData.num_players}
                                    onChange={handleChange}
                                    className="w-full bg-black/50 border border-white/20 rounded px-4 py-3 text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
                                    placeholder="Min 7, Max 30"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">Captain's Name</label>
                            <input
                                required
                                type="text"
                                name="captain_name"
                                value={formData.captain_name}
                                onChange={handleChange}
                                className="w-full bg-black/50 border border-white/20 rounded px-4 py-3 text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
                                placeholder="Full Name"
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Captain's Phone</label>
                                <input
                                    required
                                    type="tel"
                                    name="captain_phone"
                                    value={formData.captain_phone}
                                    onChange={handleChange}
                                    className="w-full bg-black/50 border border-white/20 rounded px-4 py-3 text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
                                    placeholder="+254..."
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Captain's Email</label>
                                <input
                                    required
                                    type="email"
                                    name="captain_email"
                                    value={formData.captain_email}
                                    onChange={handleChange}
                                    className="w-full bg-black/50 border border-white/20 rounded px-4 py-3 text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
                                    placeholder="captain@example.com"
                                />
                            </div>
                        </div>

                        {status === 'error' && (
                            <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded flex items-center gap-3">
                                <AlertCircle size={24} />
                                <span>{errorMessage}</span>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full btn-gold flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="animate-spin" /> Submitting...
                                </>
                            ) : (
                                'Complete Registration'
                            )}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default RegistrationForm;
