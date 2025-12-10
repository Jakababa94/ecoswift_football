
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const NavLink = ({ to, children }: { to: string, children: React.ReactNode }) => (
        <Link
            to={to}
            className="text-gray-300 hover:text-gold transition-colors text-sm font-medium uppercase tracking-wider block md:inline-block py-2"
            onClick={() => setIsOpen(false)}
        >
            {children}
        </Link>
    );

    return (
        <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                            <span className="text-2xl font-bold tracking-wider text-white">
                                ECO<span className="text-green">SWIFT</span>
                            </span>
                        </Link>
                    </div>

                    <div className="hidden lg:block">
                        <div className="ml-10 flex items-center space-x-6">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/schedule">Schedule</NavLink>
                            <NavLink to="/skills">Skills Hub</NavLink>
                            <NavLink to="/sponsors">Sponsors</NavLink>
                            <NavLink to="/faq">FAQ</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                            <Link to="/register" className="btn-gold text-xs px-6 py-3 ml-2 focus:ring-2 focus:ring-white">Register Team</Link>
                        </div>
                    </div>

                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-gold p-2 focus:outline-none focus:ring-2 focus:ring-gold rounded"
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isOpen}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="lg:hidden bg-black absolute w-full border-b border-white/10 h-screen overflow-y-auto pb-40">
                    <div className="px-4 pt-4 space-y-2">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/schedule">Schedule</NavLink>
                        <NavLink to="/skills">Skills Hub</NavLink>
                        <NavLink to="/sponsors">Sponsors</NavLink>
                        <NavLink to="/faq">FAQ</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                        <Link
                            to="/register"
                            onClick={() => setIsOpen(false)}
                            className="mt-4 w-full btn-gold text-center block"
                        >
                            REGISTER TEAM
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
