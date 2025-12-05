
import { Calendar, MapPin, Trophy } from 'lucide-react';

const Schedule = () => {
    return (
        <section id="tournament" className="bg-dark-surface py-20">
            <div className="section-container">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    TOURNAMENT <span className="text-gold">SCHEDULE</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="glass-card hover:bg-white/5 transition-colors">
                        <div className="text-green mb-4">
                            <Calendar size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">QUALIFIERS: UGANDA</h3>
                        <p className="text-gray-400 mb-4">St. Mary's Stadium, Kitende</p>
                        <div className="text-sm text-gold font-semibold">APRIL 2026</div>
                    </div>

                    {/* Card 2 */}
                    <div className="glass-card hover:bg-white/5 transition-colors">
                        <div className="text-green mb-4">
                            <Calendar size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">QUALIFIERS: ETHIOPIA</h3>
                        <p className="text-gray-400 mb-4">Addis Ababa Stadium</p>
                        <div className="text-sm text-gold font-semibold">MAY 2026</div>
                    </div>

                    {/* Card 3 - Final */}
                    <div className="glass-card border-gold/30 hover:border-gold/60 transition-colors relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-gold text-black text-xs font-bold px-3 py-1">FINAL</div>
                        <div className="text-gold mb-4">
                            <Trophy size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">GRAND FINAL</h3>
                        <div className="flex items-center gap-2 text-gray-300 mb-4">
                            <MapPin size={16} />
                            <span>Kasarani Stadium, Kenya</span>
                        </div>
                        <div className="text-lg text-white font-bold">JUNE 2026</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Schedule;
