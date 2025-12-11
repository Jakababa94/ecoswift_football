import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Trophy, Users, Globe, ArrowRight } from "lucide-react";

interface Stats {
  teams: number;
  countries: number;
  daysToKickoff: number;
  kickoffDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Hero = () => {
  const [stats, setStats] = useState<Stats>({
    teams: 0,
    countries: 3,
    daysToKickoff: 0,
    kickoffDate: new Date("2026-06-01").toISOString(),
  });
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Stats
        const statsRes = await fetch("/api/stats");
        if (statsRes.ok) {
          const data = await statsRes.json();
          setStats(data);
        }

        // Fetch Server Time for Sync
        const timeRes = await fetch("/api/time");
        if (timeRes.ok) {
          // Just warming up the connection or could be used for precise sync if needed
          await timeRes.json();
        }
      } catch (error) {
        console.error("Failed to fetch initial data", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(stats.kickoffDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [stats.kickoffDate]);

  return (
    <section className="relative min-h-[640px] flex items-center justify-center overflow-visible">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="Panoramic view of a modern luxury football stadium at night"
          className="w-full h-full object-cover animate-pulse-slow"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-black/50 to-black/30 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto mt-20 w-full">
        {/* Main Headline */}
        <h2 className="text-2xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter leading-tight drop-shadow-1xl pt-8">
          THE FUTURE OF FOOTBALL IS <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold">
            LUXURY
          </span>{" "}
          & <span className="text-green-400">GREEN</span>
        </h2>

        <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light tracking-wide max-w-3xl mx-auto">
          East Africa's Premium Tournament. Uniting Talent.{" "}
          <br className="hidden md:block" />
          Competing for{" "}
          <span className="text-gold font-bold">KSH 1,000,000</span> Prize Pool.
        </p>

        {/* Countdown Timer */}
        <div
          role="timer"
          aria-label="Countdown to kickoff"
          className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-12"
        >
          {[
            { label: "DAYS", value: timeLeft.days },
            { label: "HOURS", value: timeLeft.hours },
            { label: "MINUTES", value: timeLeft.minutes },
            { label: "SECONDS", value: timeLeft.seconds },
          ].map((item, idx) => (
            <div key={idx} className="glass-card p-4 border-gold/30">
              <div className="text-3xl md:text-5xl font-bold text-white font-mono">
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="text-xs md:text-sm text-gold tracking-widest mt-1">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
          <Link
            to="/register"
            className="btn-gold text-lg px-8 py-4 flex items-center group relative overflow-hidden focus:ring-4 focus:ring-white/50 focus:outline-none rounded"
          >
            <span className="relative z-10 font-bold tracking-wider">
              REGISTER TEAM NOW
            </span>
            <ArrowRight className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </Link>
          <a
            href="#contact"
            className="px-8 py-4 border border-white/30 text-white rounded hover:bg-white/10 transition-colors backdrop-blur-sm tracking-wider"
          >
            LEARN MORE
          </a>
        </div>

        {/* Live Stats Bar */}
        <div className="border-t border-white/10 pt-4 mt-4 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="flex flex-col items-center">
            <Users className="text-gold mb-2" size={32} />
            <span className="text-3xl font-bold text-white">{stats.teams}</span>
            <span className="text-sm text-gray-400 uppercase tracking-widest">
              Teams Registered
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Globe className="text-green-400 mb-2" size={32} />
            <span className="text-3xl font-bold text-white">
              {stats.countries}
            </span>
            <span className="text-sm text-gray-400 uppercase tracking-widest">
              Countries Uniting
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Trophy className="text-gold mb-2" size={32} />
            <span className="text-3xl font-bold text-white mb-1">KSH 1M</span>
            <span className="text-sm text-gray-400 uppercase tracking-widest">
              Grand Prize
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
