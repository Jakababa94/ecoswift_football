
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-green text-black py-8 px-10 border-t border-white/10">
            <div className="section-container">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-black text-lg font-bold mb-4">ECO<span className="text-black">SWIFT</span></h3>
                        <p className="text-sm">
                            Empowering youth through Football, E-commerce, and AI skills. Building a sustainable future together.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-black font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
                            <li><Link to="/schedule" className="hover:text-gold">Schedule</Link></li>
                            <li><Link to="/skills" className="hover:text-gold">Skills Hub</Link></li>
                            <li><Link to="/sponsors" className="hover:text-gold">Sponsors</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-black font-bold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-gold">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-gold">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:text-gold">Cookie Policy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-black font-bold mb-4">Connect</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-white"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-white"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-white"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-white"><Linkedin size={20} /></a>
                        </div>
                        <div className="mt-4 text-sm">
                            <p>support@ecoswift.org</p>
                            <p>+254 700 000 000</p>
                        </div>
                    </div>
                </div>

                <div className="text-center pt-8 border-t border-white/5 text-sm">
                    <p>&copy; 2025 EcoSwift Initiative. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
