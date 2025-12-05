
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import { Calendar, Monitor, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main>
            <Hero />

            {/* Event Highlights Section */}
            <section className="py-20 bg-dark-surface">
                <div className="section-container">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="glass-card text-center hover:bg-white/5">
                            <div className="text-gold mb-4 flex justify-center"><Trophy size={48} /></div>
                            <h3 className="text-xl font-bold mb-2">FOOTBALL COMPETITION</h3>
                            <p className="text-gray-400 mb-4">Elite tournament for top regional teams.</p>
                        </div>
                        <div className="glass-card text-center hover:bg-white/5">
                            <div className="text-green mb-4 flex justify-center"><Monitor size={48} /></div>
                            <h3 className="text-xl font-bold mb-2">E-COMMERCE TRAINING</h3>
                            <p className="text-gray-400 mb-4">Learn to sell and earn online.</p>
                        </div>
                        <div className="glass-card text-center hover:bg-white/5">
                            <div className="text-gold mb-4 flex justify-center"><Calendar size={48} /></div>
                            <h3 className="text-xl font-bold mb-2">AI WORKSHOPS</h3>
                            <p className="text-gray-400 mb-4">Master digital tools for the future.</p>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/register" className="btn-gold">Join the Movement</Link>
                    </div>
                </div>
            </section>

            <Mission />
        </main>
    );
};

export default Home;
