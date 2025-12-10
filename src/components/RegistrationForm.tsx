import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Loader2, CheckCircle, AlertCircle, ChevronRight, ChevronLeft, Save, Users, CreditCard, FileText } from 'lucide-react';

const STEPS = [
    { id: 1, title: 'Team Details', icon: Users },
    { id: 2, title: 'Squad Roster', icon: FileText },
    { id: 3, title: 'Invoice & Review', icon: CreditCard },
    { id: 4, title: 'Payment', icon: CheckCircle }
];

const REGISTRATION_FEE = 15000;

interface Player {
    name: string;
    position?: string;
}

const RegistrationForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        captain_name: '',
        captain_phone: '',
        captain_email: '',
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [roster, setRoster] = useState<Player[]>([]);
    const [currentPlayer, setCurrentPlayer] = useState('');

    // Load from LocalStorage on mount
    useEffect(() => {
        const savedData = localStorage.getItem('ecoswift_registration_draft');
        if (savedData) {
            try {
                const parsed = JSON.parse(savedData);
                setFormData(parsed.formData || {});
                setRoster(parsed.roster || []);
                setCurrentStep(parsed.currentStep || 1);
            } catch (e) {
                console.error("Failed to restore draft", e);
            }
        }
    }, []);

    // Save to LocalStorage on change
    useEffect(() => {
        localStorage.setItem('ecoswift_registration_draft', JSON.stringify({
            formData,
            roster,
            currentStep
        }));
    }, [formData, roster, currentStep]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
        // Clear error when user types
        if (errors[e.target.name]) {
            setErrors(prev => ({ ...prev, [e.target.name]: '' }));
        }
    };

    const addPlayer = (e: React.FormEvent) => {
        e.preventDefault();
        if (currentPlayer.trim() && roster.length < 30) {
            setRoster([...roster, { name: currentPlayer.trim() }]);
            setCurrentPlayer('');
        }
    };

    const removePlayer = (index: number) => {
        setRoster(roster.filter((_, i) => i !== index));
    };

    const nextStep = () => setCurrentStep(p => Math.min(STEPS.length, p + 1));
    const prevStep = () => setCurrentStep(p => Math.max(1, p - 1));

    const handleSubmit = async () => {
        setLoading(true);
        setStatus('idle');
        setErrorMessage('');

        try {
            // Validate Roster Count
            if (roster.length < 7) {
                throw new Error("Minimum 7 players required in the roster.");
            }

            const { error } = await supabase
                .from('teams')
                .insert([{
                    name: formData.name,
                    captain_name: formData.captain_name,
                    captain_phone: formData.captain_phone,
                    captain_email: formData.captain_email,
                    num_players: roster.length,
                    registration_status: 'pending' // Default to pending until payment
                }]);

            if (error) throw error;

            setStatus('success');
            localStorage.removeItem('ecoswift_registration_draft');
            setCurrentStep(4); // Move to Payment/Success view
        } catch (error: any) {
            console.error('Error registering team:', error);
            setStatus('error');
            setErrorMessage(error.message || 'Failed to register. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="register" className="section-container pb-20 pt-10">
            <div className="glass-card max-w-4xl mx-auto min-h-[600px] flex flex-col">
                {/* Progress Bar */}
                <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-6 px-4">
                    {STEPS.map((step) => {
                        const Icon = step.icon;
                        const isActive = step.id === currentStep;
                        const isCompleted = step.id < currentStep;

                        return (
                            <div key={step.id} className={`flex flex-col items-center ${isActive ? 'text-gold' : isCompleted ? 'text-green-400' : 'text-gray-500'}`}>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 border-2 
                                    ${isActive ? 'border-gold bg-gold/10' : isCompleted ? 'border-green-400 bg-green-400/10' : 'border-gray-600 bg-gray-800'}
                                    transition-all duration-300`}>
                                    <Icon size={20} />
                                </div>
                                <span className="text-xs font-bold tracking-wider hidden md:block">{step.title}</span>
                            </div>
                        );
                    })}
                </div>

                <div className="flex-grow px-4 md:px-8">
                    {/* STEP 1: TEAM DETAILS */}
                    {currentStep === 1 && (
                        <div className="space-y-6 animate-fadeIn">
                            <h2 className="text-2xl font-bold text-white mb-4">Team Information</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Name */}
                                <div>
                                    <label htmlFor="teamName" className="block text-sm font-medium text-gray-400 mb-1">Team Name</label>
                                    <input
                                        type="text"
                                        id="teamName"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className={`w-full bg-black/50 border ${errors.name ? 'border-red-500' : 'border-white/20'} rounded p-3 text-white focus:outline-none focus:border-gold`}
                                        placeholder="Enter team name"
                                        aria-invalid={!!errors.name}
                                        aria-describedby={errors.name ? "name-error" : undefined}
                                    />
                                    {errors.name && <p id="name-error" role="alert" className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                </div>

                                {/* Captain Name */}
                                <div>
                                    <label htmlFor="captainName" className="block text-sm font-medium text-gray-400 mb-1">Captain's Name</label>
                                    <input
                                        type="text"
                                        id="captainName"
                                        name="captain_name"
                                        value={formData.captain_name}
                                        onChange={handleInputChange}
                                        className={`w-full bg-black/50 border ${errors.captain_name ? 'border-red-500' : 'border-white/20'} rounded p-3 text-white focus:outline-none focus:border-gold`}
                                        placeholder="Enter captain's name"
                                        aria-invalid={!!errors.captain_name}
                                        aria-describedby={errors.captain_name ? "captain-error" : undefined}
                                    />
                                    {errors.captain_name && <p id="captain-error" role="alert" className="text-red-500 text-xs mt-1">{errors.captain_name}</p>}
                                </div>

                                {/* Captain Phone */}
                                <div>
                                    <label htmlFor="captainPhone" className="block text-sm font-medium text-gray-400 mb-1">Captain's Phone</label>
                                    <input
                                        type="tel"
                                        id="captainPhone"
                                        name="captain_phone"
                                        value={formData.captain_phone}
                                        onChange={handleInputChange}
                                        className={`w-full bg-black/50 border ${errors.captain_phone ? 'border-red-500' : 'border-white/20'} rounded p-3 text-white focus:outline-none focus:border-gold`}
                                        placeholder="+254..."
                                        aria-invalid={!!errors.captain_phone}
                                        aria-describedby={errors.captain_phone ? "phone-error" : undefined}
                                    />
                                    {errors.captain_phone && <p id="phone-error" role="alert" className="text-red-500 text-xs mt-1">{errors.captain_phone}</p>}
                                </div>

                                {/* Captain Email */}
                                <div>
                                    <label htmlFor="captainEmail" className="block text-sm font-medium text-gray-400 mb-1">Captain's Email</label>
                                    <input
                                        type="email"
                                        id="captainEmail"
                                        name="captain_email"
                                        value={formData.captain_email}
                                        onChange={handleInputChange}
                                        className={`w-full bg-black/50 border ${errors.captain_email ? 'border-red-500' : 'border-white/20'} rounded p-3 text-white focus:outline-none focus:border-gold`}
                                        placeholder="captain@example.com"
                                        aria-invalid={!!errors.captain_email}
                                        aria-describedby={errors.captain_email ? "email-error" : undefined}
                                    />
                                    {errors.captain_email && <p id="email-error" role="alert" className="text-red-500 text-xs mt-1">{errors.captain_email}</p>}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STEP 2: ROSTER */}
                    {currentStep === 2 && (
                        <div className="space-y-6 animate-fadeIn">
                            <h2 className="text-2xl font-bold text-white mb-2">Squad Roster</h2>
                            <p className="text-gray-400 text-sm mb-4">Add at least 7 players (Max 30). This ensures your team is ready for the tournament.</p>

                            <form onSubmit={addPlayer} className="flex gap-4">
                                <input
                                    type="text"
                                    value={currentPlayer}
                                    onChange={(e) => setCurrentPlayer(e.target.value)}
                                    className="flex-grow bg-black/50 border border-white/20 rounded px-4 py-3 text-white focus:border-gold focus:outline-none"
                                    placeholder="Enter player name"
                                />
                                <button type="submit" className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded font-bold transition-colors">
                                    ADD PLAYER
                                </button>
                            </form>

                            <div className="bg-black/30 rounded-lg p-4 min-h-[200px] border border-white/10">
                                {roster.length === 0 ? (
                                    <div className="text-center text-gray-500 py-8">No players added yet.</div>
                                ) : (
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                        {roster.map((player, idx) => (
                                            <li key={idx} className="flex justify-between items-center bg-white/5 px-3 py-2 rounded group hover:bg-white/10">
                                                <span><span className="text-gold font-mono mr-2">{idx + 1}.</span> {player.name}</span>
                                                <button onClick={() => removePlayer(idx)} className="text-red-400 opacity-0 group-hover:opacity-100 hover:text-red-300 transition-opacity">
                                                    &times;
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            <div className="text-right text-sm text-gold">
                                Players: {roster.length} / 30
                            </div>
                        </div>
                    )}

                    {/* STEP 3: REVIEW & INVOICE */}
                    {currentStep === 3 && (
                        <div className="space-y-6 animate-fadeIn">
                            <h2 className="text-2xl font-bold text-white mb-6">Review & Invoice</h2>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <div className="bg-white/5 p-4 rounded border border-white/10">
                                        <h3 className="text-gold font-bold mb-3 uppercase text-sm tracking-wider">Team Details</h3>
                                        <p className="text-lg font-bold">{formData.name || 'N/A'}</p>
                                        <div className="mt-2 space-y-1 text-sm text-gray-400">
                                            <p>Captain: {formData.captain_name}</p>
                                            <p>Phone: {formData.captain_phone}</p>
                                            <p>Email: {formData.captain_email}</p>
                                        </div>
                                    </div>
                                    <div className="bg-white/5 p-4 rounded border border-white/10">
                                        <h3 className="text-gold font-bold mb-3 uppercase text-sm tracking-wider">Roster Summary</h3>
                                        <p className="text-2xl font-bold">{roster.length} <span className="text-sm font-normal text-gray-400">Players</span></p>
                                        <p className="text-xs text-gray-500 mt-2">Full roster data will be submitted.</p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg border border-gold/30 flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                                            <span className="text-gray-400">Invoice #</span>
                                            <span className="font-mono text-gold">EST-{Math.floor(Math.random() * 10000)}</span>
                                        </div>
                                        <div className="space-y-3 mb-6">
                                            <div className="flex justify-between">
                                                <span>Tournament Registration</span>
                                                <span>KSH 15,000</span>
                                            </div>
                                            <div className="flex justify-between text-gray-400 text-sm">
                                                <span>Processing Fee</span>
                                                <span>KSH 0</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-t border-white/10 pt-4 flex justify-between items-center">
                                        <span className="text-xl font-bold">TOTAL DUE</span>
                                        <span className="text-2xl font-bold text-gold">KSH {REGISTRATION_FEE.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>

                            {status === 'error' && (
                                <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded flex items-center gap-3">
                                    <AlertCircle size={24} />
                                    <span>{errorMessage}</span>
                                </div>
                            )}
                        </div>
                    )}

                    {/* STEP 4: SUCCESS / PAYMENT */}
                    {currentStep === 4 && (
                        <div className="text-center py-10 animate-fadeIn">
                            <div className="flex justify-center mb-6">
                                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center">
                                    <CheckCircle size={48} className="text-green-500" />
                                </div>
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-4">Registration Submitted!</h2>
                            <p className="text-gray-300 max-w-lg mx-auto mb-8">
                                Your team <strong>{formData.name}</strong> has been provisionally registered.
                                To confirm your slot, please complete the payment below.
                            </p>

                            <div className="bg-white/5 p-8 rounded-lg max-w-md mx-auto border border-white/10">
                                <h3 className="text-gold font-bold mb-4">PAYMENT INSTRUCTIONS</h3>
                                <p className="mb-4 text-sm text-gray-400">Please send <strong>KSH {REGISTRATION_FEE.toLocaleString()}</strong> via M-Pesa to:</p>
                                <div className="text-2xl font-mono font-bold bg-black/50 py-3 rounded mb-6 select-all">
                                    PAYBILL: 123456
                                </div>
                                <p className="text-xs text-gray-500 mb-6">Account Number: {formData.name.toUpperCase().replace(/\s/g, '')}</p>

                                <button className="w-full btn-gold py-3 font-bold">
                                    I HAVE MADE THE PAYMENT
                                </button>
                            </div>

                            <button
                                onClick={() => {
                                    setFormData({ name: '', captain_name: '', captain_phone: '', captain_email: '' });
                                    setRoster([]);
                                    setCurrentStep(1);
                                    localStorage.removeItem('ecoswift_registration_draft');
                                }}
                                className="mt-8 text-gray-500 hover:text-white text-sm"
                            >
                                Register another team
                            </button>
                        </div>
                    )}
                </div>

                {/* Footer Actions */}
                {currentStep < 4 && (
                    <div className="border-t border-white/10 p-6 flex justify-between mt-auto">
                        <button
                            onClick={prevStep}
                            disabled={currentStep === 1}
                            className={`flex items-center gap-2 px-6 py-3 rounded font-bold transition-colors ${currentStep === 1 ? 'opacity-0 pointer-events-none' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                        >
                            <ChevronLeft size={20} /> Back
                        </button>

                        <div className="flex gap-4">
                            {/* Auto-save indicator */}
                            <div className="flex items-center text-xs text-gray-600 gap-1 mr-4">
                                <Save size={12} /> Exists as Draft
                            </div>

                            {currentStep === 3 ? (
                                <button
                                    onClick={handleSubmit}
                                    disabled={loading}
                                    className="btn-gold px-8 py-3 flex items-center gap-2"
                                >
                                    {loading ? <Loader2 className="animate-spin" /> : <CheckCircle size={20} />}
                                    CONFIRM & SUBMIT
                                </button>
                            ) : (
                                <button
                                    onClick={() => {
                                        if (currentStep === 1 && (!formData.name || !formData.captain_name)) {
                                            alert("Please fill in required fields");
                                            return;
                                        }
                                        if (currentStep === 2 && roster.length < 7) {
                                            alert("Please add at least 7 players.");
                                            return;
                                        }
                                        nextStep();
                                    }}
                                    className="btn-gold px-8 py-3 flex items-center gap-2"
                                >
                                    Continue <ChevronRight size={20} />
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default RegistrationForm;
