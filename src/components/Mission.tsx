
import { Globe, Recycle, TrendingUp } from 'lucide-react';

const Mission = () => {
    return (
        <section id="mission" className="section-container">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        OUR <span className="text-gold">GLOBAL MISSION</span>
                    </h2>
                    <p className="text-gray-300 text-lg mb-6">
                        We are redefining the beautiful game by integrating sustainability with elite performance.
                        Our tournaments aren't just about winning; they are about participating in a movement
                        that values our planet as much as the sport.
                    </p>
                    <div className="flex items-center gap-4 text-green font-bold text-xl">
                        <Recycle size={32} />
                        <span>REDUCE • REUSE • REPOWER</span>
                    </div>
                </div>

                <div className="glass-card flex flex-col items-center text-center">
                    <div className="w-48 h-48 rounded-full border-4 border-green flex items-center justify-center mb-6 relative">
                        <div className="absolute inset-0 bg-green/10 rounded-full animate-pulse"></div>
                        <Globe size={80} className="text-green" />
                    </div>
                    <p className="text-xl font-bold">ECO-CONSCIOUS TOURNAMENTS</p>
                </div>
            </div>

            <div className="glass-card text-center">
                <div className="flex justify-center mb-4">
                    <TrendingUp size={48} className="text-gold" />
                </div>
                <h3 className="text-2xl font-bold mb-4">VISION FOR GLOBAL EXPANSION</h3>
                <p className="text-gray-300 max-w-2xl mx-auto">
                    Starting in East Africa, we aim to expand our footprint to Europe, Asia, and The Americas
                    by 2030, creating a worldwide network of sustainable football leagues.
                </p>
            </div>
        </section>
    );
};

export default Mission;
