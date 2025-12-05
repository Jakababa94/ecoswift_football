
import { BookOpen, Code, DollarSign, Smartphone } from 'lucide-react';

const SkillsHub = () => {
    return (
        <div className="pt-20 pb-20">
            <div className="bg-dark-surface py-16 mb-12">
                <div className="section-container text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">SKILLS <span className="text-gold">HUB</span></h1>
                    <p className="text-xl text-gray-300">Empowering you with the tools to succeed in the digital economy.</p>
                </div>
            </div>

            <div className="section-container">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* E-Commerce */}
                    <div className="glass-card hover:border-green/50 transition-colors">
                        <div className="text-green mb-4"><DollarSign size={40} /></div>
                        <h3 className="text-2xl font-bold mb-4">E-Commerce & Digital Business</h3>
                        <ul className="space-y-3 text-gray-300 mb-6">
                            <li>• Starting an Online Store</li>
                            <li>• Selling on Jumia, Amazon, Etsy</li>
                            <li>• Mobile Money Integration</li>
                            <li>• Social Media Marketing</li>
                        </ul>
                        <button className="btn-gold text-sm w-full">Start Learning</button>
                    </div>

                    {/* AI Tools */}
                    <div className="glass-card hover:border-green/50 transition-colors">
                        <div className="text-green mb-4"><Code size={40} /></div>
                        <h3 className="text-2xl font-bold mb-4">AI & Digital Tools</h3>
                        <ul className="space-y-3 text-gray-300 mb-6">
                            <li>• Intro to ChatGPT & AI</li>
                            <li>• AI for Content Creation</li>
                            <li>• Productivity Automation</li>
                            <li>• Data Analysis Basics</li>
                        </ul>
                        <button className="btn-gold text-sm w-full">Start Learning</button>
                    </div>

                    {/* Freelancing */}
                    <div className="glass-card hover:border-green/50 transition-colors">
                        <div className="text-green mb-4"><Smartphone size={40} /></div>
                        <h3 className="text-2xl font-bold mb-4">Online Money-Making</h3>
                        <ul className="space-y-3 text-gray-300 mb-6">
                            <li>• Freelancing on Upwork/Fiverr</li>
                            <li>• YouTube Content Creation</li>
                            <li>• Affiliate Marketing</li>
                            <li>• Dropshipping 101</li>
                        </ul>
                        <button className="btn-gold text-sm w-full">Start Learning</button>
                    </div>
                </div>

                <div className="mt-20">
                    <h2 className="text-3xl font-bold mb-8 text-center">DOWNLOADABLE <span className="text-green">GUIDES</span></h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {['How to Start an Online Business in 2025', 'Beginner Guide to AI Tools', '30 Digital Skills That Pay'].map((guide, i) => (
                            <div key={i} className="bg-white/5 p-6 rounded flex items-center justify-between hover:bg-white/10 cursor-pointer">
                                <span className="font-semibold">{guide}</span>
                                <BookOpen className="text-gold" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsHub;
