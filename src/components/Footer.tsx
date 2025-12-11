import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone } from 'lucide-react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 px-6 border-t border-white/10">
      <div className="section-container">
        <div className="grid md:grid-cols-4 gap-6 mb-4">
          <div>
            <h3 className="text-white text-base font-bold mb-2">
              ECO<span className="text-white">SWIFT</span>
            </h3>
            <p className="text-xs">
              Empowering youth through Football, E-commerce, and AI skills.
              Building a sustainable future together.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-xs">
              <li>
                <Link to="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="hover:text-white">
                  Schedule
                </Link>
              </li>
              <li>
                <Link to="/skills" className="hover:text-white">
                  Skills Hub
                </Link>
              </li>
              <li>
                <Link to="/sponsors" className="hover:text-white">
                  Sponsors
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2">Legal</h4>
            <ul className="space-y-1 text-xs">
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2">Connect</h4>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com" className="hover:text-white">
                <Facebook size={18} />
              </a>
              <a href="https://www.twitter.com" className="hover:text-white">
                <Twitter size={18} />
              </a>
              <a href="https://www.instagram.com" className="hover:text-white">
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com" className="hover:text-white">
                <Linkedin size={18} />
              </a>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <a
                href="mailto:support@ecoswift.org"
                className="hover:text-white"
                title="support@ecoswift.org"
                aria-label="Email support at support@ecoswift.org"
              >
                <Mail size={16} />
                <span className="sr-only">Email support at support@ecoswift.org</span>
              </a>
              <a
                href="tel:+254700000000"
                className="hover:text-white"
                title="Call +254 700 000 000"
                aria-label="Call +254 700 000 000"
              >
                <Phone size={16} />
                <span className="sr-only">Call +254 700 000 000</span>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center pt-4 border-t border-white/5 text-xs">
          <p>&copy; 2025 EcoSwift Initiative. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
