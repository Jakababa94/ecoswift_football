
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center gap-2">
                            <span className="text-2xl font-bold tracking-wider text-white">
                                ECO<span className="text-green">SWIFT</span>
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <a href="#about" className="hover:text-gold transition-colors px-3 py-2 text-sm font-medium uppercase tracking-widest">About</a>
                            <a href="#mission" className="hover:text-gold transition-colors px-3 py-2 text-sm font-medium uppercase tracking-widest">Mission</a>
                            <a href="#tournament" className="hover:text-gold transition-colors px-3 py-2 text-sm font-medium uppercase tracking-widest">Tournament</a>
                            <a href="#contact" className="btn-gold text-xs px-6 py-3 ml-4">Register Team</a>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-gold p-2">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-xl absolute w-full border-b border-white/10">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#about" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white block px-3 py-4 text-base font-medium border-b border-white/5">About</a>
                        <a href="#mission" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white block px-3 py-4 text-base font-medium border-b border-white/5">Mission</a>
                        <a href="#tournament" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white block px-3 py-4 text-base font-medium border-b border-white/5">Tournament</a>
                        <a href="#contact" onClick={() => setIsOpen(false)} className="text-gold block px-3 py-4 text-base font-bold">REGISTER NOW</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
