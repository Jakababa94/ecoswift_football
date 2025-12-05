
const Sponsors = () => {
    return (
        <div className="pt-20 pb-20">
            <div className="section-container text-center">
                <h1 className="text-4xl font-bold mb-12">OUR <span className="text-gold">PARTNERS</span></h1>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                    {/* Placeholders for logos */}
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <div key={i} className="glass-card flex items-center justify-center min-h-[150px]">
                            <span className="text-gray-500 font-bold text-xl">LOGO {i}</span>
                        </div>
                    ))}
                </div>

                <div className="glass-card max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold mb-4">BECOME A SPONSOR</h2>
                    <p className="text-gray-300 mb-6">
                        Connect with the next generation of African talent. Partner with EcoSwift today.
                    </p>
                    <a href="/contact" className="btn-gold">Contact Us</a>
                </div>
            </div>
        </div>
    );
};

export default Sponsors;
