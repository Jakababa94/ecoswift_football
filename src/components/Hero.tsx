
const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-black/50 to-black/30 z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1522778119026-d647f0565c6a?auto=format&fit=crop&q=80"
                    alt="Luxury Football Stadium"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-20">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tighter">
                    THE FUTURE OF FOOTBALL IS <br />
                    <span className="text-gold">LUXURY</span> AND IT'S <span className="text-green">GREEN</span>.
                </h1>

                <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light tracking-wide">
                    EAST AFRICA UNITES FOR <span className="text-gold font-semibold">KSH 1,000,000</span> PRIZE
                </p>

                <div className="flex justify-center">
                    <a href="#contact" className="btn-gold text-lg">
                        Register Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
