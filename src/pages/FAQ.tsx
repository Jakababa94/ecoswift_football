
const FAQ = () => {
    const faqs = [
        { q: "How much is the registration fee?", a: "The registration fee is KSH 5,000 per team." },
        { q: "What is the age limit?", a: "The tournament is open to youth aged 16-25." },
        { q: "Are the workshops mandatory?", a: "While not mandatory, they are highly recommended as they provide valuable skills for future careers." },
        { q: "How do I pay?", a: "You can pay via M-Pesa or PayPal during the registration process." },
    ];

    return (
        <div className="pt-20 pb-20">
            <div className="section-container max-w-3xl">
                <h1 className="text-4xl font-bold mb-12 text-center">FREQUENTLY ASKED <span className="text-gold">QUESTIONS</span></h1>

                <div className="space-y-6">
                    {faqs.map((faq, i) => (
                        <div key={i} className="glass-card">
                            <h3 className="text-xl font-bold mb-2 text-green">{faq.q}</h3>
                            <p className="text-gray-300">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
