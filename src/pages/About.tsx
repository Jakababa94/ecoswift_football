
import Mission from '../components/Mission';

const About = () => {
    return (
        <div className="pt-20">
            <div className="bg-dark-surface py-20">
                <div className="section-container text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">ABOUT <span className="text-green">ECOSWIFT</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        We differ from traditional leagues by merging elite sports competition with digital empowerment.
                    </p>
                </div>
            </div>

            <Mission />

            <section className="section-container py-20">
                <h2 className="text-3xl font-bold mb-10 text-center">WHY WE DO IT</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="glass-card">
                        <h3 className="text-xl font-bold text-gold mb-3">Financial Literacy</h3>
                        <p className="text-gray-400">Teaching youth how to manage earnings from sports and online businesses.</p>
                    </div>
                    <div className="glass-card">
                        <h3 className="text-xl font-bold text-gold mb-3">Digital Careers</h3>
                        <p className="text-gray-400">Opening doors to remote work in AI, marketing, and content creation.</p>
                    </div>
                    <div className="glass-card">
                        <h3 className="text-xl font-bold text-gold mb-3">Discipline & Teamwork</h3>
                        <p className="text-gray-400">Leveraging the values of football to build strong, reliable professionals.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
