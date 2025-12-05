
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-20 pb-20">
            <div className="section-container">
                <h1 className="text-4xl font-bold mb-12 text-center">GET IN <span className="text-green">TOUCH</span></h1>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-bold mb-6">CONTACT INFO</h2>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center text-gold">
                                    <Phone />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase">Phone</p>
                                    <p className="font-semibold">+254 700 000 000</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center text-gold">
                                    <Mail />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase">Email</p>
                                    <p className="font-semibold">info@ecoswift.org</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center text-gold">
                                    <MapPin />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase">Location</p>
                                    <p className="font-semibold">Nairobi, Kenya</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card">
                        <form className="space-y-4">
                            <input type="text" placeholder="Your Name" className="w-full bg-black/50 border border-white/20 p-3 rounded text-white" />
                            <input type="email" placeholder="Your Email" className="w-full bg-black/50 border border-white/20 p-3 rounded text-white" />
                            <textarea placeholder="Message" rows={4} className="w-full bg-black/50 border border-white/20 p-3 rounded text-white"></textarea>
                            <button className="btn-gold w-full">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
