import { ViteReactSSG } from "vite-react-ssg";
import { jsxs, jsx } from "react/jsx-runtime";
import { Link, Outlet } from "react-router-dom";
import { X, Menu, Facebook, Twitter, Instagram, Linkedin, ArrowRight, Users, Globe, Trophy, Recycle, TrendingUp, Monitor, Calendar, DollarSign, Code, Smartphone, CheckSquare, Square, BookOpen, FolderDown, Award, Loader2, Phone, Mail, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const NavLink = ({ to, children }) => /* @__PURE__ */ jsx(
    Link,
    {
      to,
      className: "text-gray-300 hover:text-gold transition-colors text-sm font-medium uppercase tracking-wider block md:inline-block py-2",
      onClick: () => setIsOpen(false),
      children
    }
  );
  return /* @__PURE__ */ jsxs("nav", { className: "fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10", children: [
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-20", children: [
      /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx(Link, { to: "/", className: "flex items-center gap-2", onClick: () => setIsOpen(false), children: /* @__PURE__ */ jsxs("span", { className: "text-2xl font-bold tracking-wider text-white", children: [
        "ECO",
        /* @__PURE__ */ jsx("span", { className: "text-green", children: "SWIFT" })
      ] }) }) }),
      /* @__PURE__ */ jsx("div", { className: "hidden lg:block", children: /* @__PURE__ */ jsxs("div", { className: "ml-10 flex items-center space-x-6", children: [
        /* @__PURE__ */ jsx(NavLink, { to: "/", children: "Home" }),
        /* @__PURE__ */ jsx(NavLink, { to: "/about", children: "About" }),
        /* @__PURE__ */ jsx(NavLink, { to: "/schedule", children: "Schedule" }),
        /* @__PURE__ */ jsx(NavLink, { to: "/skills", children: "Skills Hub" }),
        /* @__PURE__ */ jsx(NavLink, { to: "/sponsors", children: "Sponsors" }),
        /* @__PURE__ */ jsx(NavLink, { to: "/faq", children: "FAQ" }),
        /* @__PURE__ */ jsx(NavLink, { to: "/contact", children: "Contact" }),
        /* @__PURE__ */ jsx(Link, { to: "/register", className: "btn-gold text-xs px-6 py-3 ml-2 focus:ring-2 focus:ring-white", children: "Register Team" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "lg:hidden", children: /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setIsOpen(!isOpen),
          className: "text-white hover:text-gold p-2 focus:outline-none focus:ring-2 focus:ring-gold rounded",
          "aria-label": isOpen ? "Close menu" : "Open menu",
          "aria-expanded": isOpen,
          children: isOpen ? /* @__PURE__ */ jsx(X, { size: 24 }) : /* @__PURE__ */ jsx(Menu, { size: 24 })
        }
      ) })
    ] }) }),
    isOpen && /* @__PURE__ */ jsx("div", { className: "lg:hidden bg-black absolute w-full border-b border-white/10 h-screen overflow-y-auto pb-40", children: /* @__PURE__ */ jsxs("div", { className: "px-4 pt-4 space-y-2", children: [
      /* @__PURE__ */ jsx(NavLink, { to: "/", children: "Home" }),
      /* @__PURE__ */ jsx(NavLink, { to: "/about", children: "About" }),
      /* @__PURE__ */ jsx(NavLink, { to: "/schedule", children: "Schedule" }),
      /* @__PURE__ */ jsx(NavLink, { to: "/skills", children: "Skills Hub" }),
      /* @__PURE__ */ jsx(NavLink, { to: "/sponsors", children: "Sponsors" }),
      /* @__PURE__ */ jsx(NavLink, { to: "/faq", children: "FAQ" }),
      /* @__PURE__ */ jsx(NavLink, { to: "/contact", children: "Contact" }),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/register",
          onClick: () => setIsOpen(false),
          className: "mt-4 w-full btn-gold text-center block",
          children: "REGISTER TEAM"
        }
      )
    ] }) })
  ] });
};
const Footer = () => {
  return /* @__PURE__ */ jsx("footer", { className: "bg-black text-white py-8 px-10 border-t border-white/10", children: /* @__PURE__ */ jsxs("div", { className: "section-container", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-4 gap-8 mb-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h3", { className: "text-white text-lg font-bold mb-4", children: [
          "ECO",
          /* @__PURE__ */ jsx("span", { className: "text-white", children: "SWIFT" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Empowering youth through Football, E-commerce, and AI skills. Building a sustainable future together." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-white font-bold mb-4", children: "Quick Links" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/about", className: "hover:text-white", children: "About Us" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/schedule", className: "hover:text-white", children: "Schedule" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/skills", className: "hover:text-white", children: "Skills Hub" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/sponsors", className: "hover:text-white", children: "Sponsors" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-white font-bold mb-4", children: "Legal" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white", children: "Privacy Policy" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white", children: "Terms & Conditions" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white", children: "Cookie Policy" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-white font-bold mb-4", children: "Connect" }),
        /* @__PURE__ */ jsxs("div", { className: "flex space-x-4", children: [
          /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white", children: /* @__PURE__ */ jsx(Facebook, { size: 20 }) }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white", children: /* @__PURE__ */ jsx(Twitter, { size: 20 }) }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white", children: /* @__PURE__ */ jsx(Instagram, { size: 20 }) }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white", children: /* @__PURE__ */ jsx(Linkedin, { size: 20 }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 text-sm", children: [
          /* @__PURE__ */ jsx("p", { children: "support@ecoswift.org" }),
          /* @__PURE__ */ jsx("p", { children: "+254 700 000 000" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "text-center pt-8 border-t border-white/5 text-sm", children: /* @__PURE__ */ jsx("p", { children: "© 2025 EcoSwift Initiative. All rights reserved." }) })
  ] }) });
};
const Hero = () => {
  const [stats, setStats] = useState({
    teams: 0,
    countries: 3,
    daysToKickoff: 0,
    kickoffDate: (/* @__PURE__ */ new Date("2026-06-01")).toISOString()
  });
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const statsRes = await fetch("/api/stats");
        if (statsRes.ok) {
          const data = await statsRes.json();
          setStats(data);
        }
        const timeRes = await fetch("/api/time");
        if (timeRes.ok) {
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
      const now = (/* @__PURE__ */ new Date()).getTime();
      const target = new Date(stats.kickoffDate).getTime();
      const difference = target - now;
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1e3 * 60 * 60 * 24)),
          hours: Math.floor(difference / (1e3 * 60 * 60) % 24),
          minutes: Math.floor(difference / 1e3 / 60 % 60),
          seconds: Math.floor(difference / 1e3 % 60)
        });
      }
    }, 1e3);
    return () => clearInterval(timer);
  }, [stats.kickoffDate]);
  return /* @__PURE__ */ jsxs("section", { className: "relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-dark-bg via-black/70 to-black/40 z-10" }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://images.unsplash.com/photo-1522778119026-d647f0565c6a?auto=format&fit=crop&q=80",
          alt: "Panoramic view of a modern luxury football stadium at night",
          className: "w-full h-full object-cover animate-pulse-slow"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-20 text-center px-4 max-w-6xl mx-auto mt-16 w-full", children: [
      /* @__PURE__ */ jsxs("h1", { className: "text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter leading-tight drop-shadow-2xl", children: [
        "THE FUTURE IS ",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold", children: "LUXURY" }),
        " & ",
        /* @__PURE__ */ jsx("span", { className: "text-green-400", children: "GREEN" })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-xl md:text-2xl text-gray-200 mb-10 font-light tracking-wide max-w-3xl mx-auto", children: [
        "East Africa's Premium Tournament. Uniting Talent. ",
        /* @__PURE__ */ jsx("br", { className: "hidden md:block" }),
        "Competing for ",
        /* @__PURE__ */ jsx("span", { className: "text-gold font-bold", children: "KSH 1,000,000" }),
        " Prize Pool."
      ] }),
      /* @__PURE__ */ jsx("div", { role: "timer", "aria-label": "Countdown to kickoff", className: "grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-12", children: [
        { label: "DAYS", value: timeLeft.days },
        { label: "HOURS", value: timeLeft.hours },
        { label: "MINUTES", value: timeLeft.minutes },
        { label: "SECONDS", value: timeLeft.seconds }
      ].map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "glass-card p-4 border-gold/30", children: [
        /* @__PURE__ */ jsx("div", { className: "text-3xl md:text-5xl font-bold text-white font-mono", children: String(item.value).padStart(2, "0") }),
        /* @__PURE__ */ jsx("div", { className: "text-xs md:text-sm text-gold tracking-widest mt-1", children: item.label })
      ] }, idx)) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-6 justify-center items-center mb-16", children: [
        /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/register",
            className: "btn-gold text-lg px-8 py-4 flex items-center group relative overflow-hidden focus:ring-4 focus:ring-white/50 focus:outline-none rounded",
            children: [
              /* @__PURE__ */ jsx("span", { className: "relative z-10 font-bold tracking-wider", children: "REGISTER TEAM NOW" }),
              /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 relative z-10 group-hover:translate-x-1 transition-transform" }),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "#contact",
            className: "px-8 py-4 border border-white/30 text-white rounded hover:bg-white/10 transition-colors backdrop-blur-sm tracking-wider",
            children: "LEARN MORE"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "border-t border-white/10 pt-8 mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsx(Users, { className: "text-gold mb-2", size: 32 }),
          /* @__PURE__ */ jsx("span", { className: "text-3xl font-bold text-white", children: stats.teams }),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-400 uppercase tracking-widest", children: "Teams Registered" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsx(Globe, { className: "text-green-400 mb-2", size: 32 }),
          /* @__PURE__ */ jsx("span", { className: "text-3xl font-bold text-white", children: stats.countries }),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-400 uppercase tracking-widest", children: "Countries Uniting" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsx(Trophy, { className: "text-gold mb-2", size: 32 }),
          /* @__PURE__ */ jsx("span", { className: "text-3xl font-bold text-white mb-1", children: "KSH 1M" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-400 uppercase tracking-widest", children: "Grand Prize" })
        ] })
      ] })
    ] })
  ] });
};
const Mission = () => {
  return /* @__PURE__ */ jsxs("section", { id: "mission", className: "section-container", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-12 items-center mb-20", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-bold mb-6", children: [
          "OUR ",
          /* @__PURE__ */ jsx("span", { className: "text-gold", children: "GLOBAL MISSION" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-lg mb-6", children: "We are redefining the beautiful game by integrating sustainability with elite performance. Our tournaments aren't just about winning; they are about participating in a movement that values our planet as much as the sport." }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-green font-bold text-xl", children: [
          /* @__PURE__ */ jsx(Recycle, { size: 32 }),
          /* @__PURE__ */ jsx("span", { children: "REDUCE • REUSE • REPOWER" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "glass-card flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-48 h-48 rounded-full border-4 border-green flex items-center justify-center mb-6 relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-green/10 rounded-full animate-pulse" }),
          /* @__PURE__ */ jsx(Globe, { size: 80, className: "text-green" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl font-bold", children: "ECO-CONSCIOUS TOURNAMENTS" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "glass-card text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsx(TrendingUp, { size: 48, className: "text-gold" }) }),
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-4", children: "VISION FOR GLOBAL EXPANSION" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-300 max-w-2xl mx-auto", children: "Starting in East Africa, we aim to expand our footprint to Europe, Asia, and The Americas by 2030, creating a worldwide network of sustainable football leagues." })
    ] })
  ] });
};
const Home = () => {
  return /* @__PURE__ */ jsxs("main", { children: [
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-dark-surface", children: /* @__PURE__ */ jsxs("div", { className: "section-container", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "glass-card text-center hover:bg-white/5", children: [
          /* @__PURE__ */ jsx("div", { className: "text-gold mb-4 flex justify-center", children: /* @__PURE__ */ jsx(Trophy, { size: 48 }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "FOOTBALL COMPETITION" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-400 mb-4", children: "Elite tournament for top regional teams." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "glass-card text-center hover:bg-white/5", children: [
          /* @__PURE__ */ jsx("div", { className: "text-green mb-4 flex justify-center", children: /* @__PURE__ */ jsx(Monitor, { size: 48 }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "E-COMMERCE TRAINING" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-400 mb-4", children: "Learn to sell and earn online." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "glass-card text-center hover:bg-white/5", children: [
          /* @__PURE__ */ jsx("div", { className: "text-gold mb-4 flex justify-center", children: /* @__PURE__ */ jsx(Calendar, { size: 48 }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "AI WORKSHOPS" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-400 mb-4", children: "Master digital tools for the future." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "text-center mt-12", children: /* @__PURE__ */ jsx(Link, { to: "/register", className: "btn-gold", children: "Join the Movement" }) })
    ] }) }),
    /* @__PURE__ */ jsx(Mission, {})
  ] });
};
const About = () => {
  return /* @__PURE__ */ jsxs("div", { className: "pt-20", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-dark-surface py-20", children: /* @__PURE__ */ jsxs("div", { className: "section-container text-center", children: [
      /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl font-bold mb-6", children: [
        "ABOUT ",
        /* @__PURE__ */ jsx("span", { className: "text-green", children: "ECOSWIFT" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-300 max-w-3xl mx-auto", children: "We differ from traditional leagues by merging elite sports competition with digital empowerment." })
    ] }) }),
    /* @__PURE__ */ jsx(Mission, {}),
    /* @__PURE__ */ jsxs("section", { className: "section-container py-20", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "WHY WE DO IT" }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "glass-card", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gold mb-3", children: "Financial Literacy" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "Teaching youth how to manage earnings from sports and online businesses." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "glass-card", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gold mb-3", children: "Digital Careers" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "Opening doors to remote work in AI, marketing, and content creation." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "glass-card", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gold mb-3", children: "Discipline & Teamwork" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "Leveraging the values of football to build strong, reliable professionals." })
        ] })
      ] })
    ] })
  ] });
};
const MODULES = [
  {
    id: "ecommerce",
    title: "E-Commerce Mastery",
    icon: DollarSign,
    description: "Learn to build and scale your online business.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    // Placeholder
    actionItems: [
      "Create a seller account (Jumia or Kilimall)",
      "List your first product with 3 photos",
      "Set up mobile money payment integration"
    ]
  },
  {
    id: "ai-tools",
    title: "AI & Future Tech",
    icon: Code,
    description: "Master ChatGPT and AI tools to 10x your productivity.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    // Placeholder
    actionItems: [
      "Sign up for an OpenAI account",
      "Generate a business plan using AI",
      "Create a social media calendar using AI"
    ]
  },
  {
    id: "content-creation",
    title: "Content Creation 101",
    icon: Smartphone,
    description: "Turn your creativity into a digital career.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    // Placeholder
    actionItems: [
      "Record a 60-second intro video",
      "Edit a video using CapCut or InShot",
      "Post content on a new platform"
    ]
  }
];
const SkillsHub = () => {
  const [activeModule, setActiveModule] = useState(MODULES[0]);
  const [completedItems, setCompletedItems] = useState({});
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);
  const toggleItem = (moduleId, itemIndex) => {
    const key = `${moduleId}-${itemIndex}`;
    setCompletedItems((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  const isModuleComplete = (module) => {
    return module.actionItems.every((_, idx) => completedItems[`${module.id}-${idx}`]);
  };
  const handleDownloadCertificate = async () => {
    if (!userName.trim()) {
      alert("Please enter your name for the certificate.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("/api/certificate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: userName,
          moduleName: activeModule.title
        })
      });
      if (!response.ok) throw new Error("Failed to generate certificate");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Certificate-${activeModule.title}.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error(error);
      alert("Error generating certificate. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "pt-20 pb-20", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-dark-surface py-16 mb-12", children: /* @__PURE__ */ jsxs("div", { className: "section-container text-center", children: [
      /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl font-bold mb-4", children: [
        "SKILLS ",
        /* @__PURE__ */ jsx("span", { className: "text-gold", children: "HUB" })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-xl text-gray-300 max-w-2xl mx-auto", children: [
        "Empowering you with the tools to succeed. ",
        /* @__PURE__ */ jsx("br", {}),
        "Complete modules, take action, and earn your certificate."
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "section-container", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-4 space-y-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold mb-4 text-white uppercase tracking-wider", children: "Learning Modules" }),
        MODULES.map((module) => {
          const Icon = module.icon;
          const isActive = activeModule.id === module.id;
          const isComplete = isModuleComplete(module);
          return /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setActiveModule(module),
              className: `w-full text-left p-4 rounded-lg border transition-all duration-300 flex items-center gap-4
                                        ${isActive ? "bg-gold/10 border-gold text-white" : "bg-white/5 border-transparent text-gray-400 hover:bg-white/10"}
                                    `,
              children: [
                /* @__PURE__ */ jsx("div", { className: `${isActive ? "text-gold" : "text-gray-500"}`, children: /* @__PURE__ */ jsx(Icon, { size: 24 }) }),
                /* @__PURE__ */ jsxs("div", { className: "flex-grow", children: [
                  /* @__PURE__ */ jsx("div", { className: "font-bold", children: module.title }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs opacity-70", children: isComplete ? /* @__PURE__ */ jsxs("span", { className: "text-green-400 flex items-center gap-1", children: [
                    /* @__PURE__ */ jsx(CheckSquare, { size: 10 }),
                    " Completed"
                  ] }) : "In Progress" })
                ] })
              ]
            },
            module.id
          );
        })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-8", children: /* @__PURE__ */ jsxs("div", { className: "glass-card min-h-[600px] flex flex-col", children: [
        /* @__PURE__ */ jsx("div", { className: "aspect-video bg-black rounded-lg mb-6 relative overflow-hidden group", children: /* @__PURE__ */ jsx(
          "iframe",
          {
            className: "w-full h-full",
            src: activeModule.videoUrl,
            title: `Video content for ${activeModule.title}`,
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: true
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "px-2", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white mb-2", children: activeModule.title }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-400 mb-6", children: activeModule.description }),
          /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-white/5 p-6 rounded-lg border border-white/10", children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-gold font-bold mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(CheckSquare, { size: 20 }),
                " ACTION CHECKLIST"
              ] }),
              /* @__PURE__ */ jsx("div", { className: "space-y-3", role: "group", "aria-label": "Module action items", children: activeModule.actionItems.map((item, idx) => {
                const key = `${activeModule.id}-${idx}`;
                const checked = completedItems[key] || false;
                return /* @__PURE__ */ jsxs(
                  "div",
                  {
                    onClick: () => toggleItem(activeModule.id, idx),
                    onKeyDown: (e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggleItem(activeModule.id, idx);
                      }
                    },
                    role: "checkbox",
                    "aria-checked": checked,
                    tabIndex: 0,
                    className: "flex items-start gap-3 cursor-pointer group select-none outline-none focus:ring-2 focus:ring-gold rounded p-1",
                    children: [
                      /* @__PURE__ */ jsx("div", { className: `mt-1 transition-colors ${checked ? "text-green-400" : "text-gray-600 group-hover:text-gray-400"}`, children: checked ? /* @__PURE__ */ jsx(CheckSquare, { size: 20 }) : /* @__PURE__ */ jsx(Square, { size: 20 }) }),
                      /* @__PURE__ */ jsx("span", { className: `${checked ? "text-gray-300 line-through decoration-white/20" : "text-gray-300"}`, children: item })
                    ]
                  },
                  idx
                );
              }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-blue-500/10 p-6 rounded-lg border border-blue-500/30", children: [
                /* @__PURE__ */ jsxs("h3", { className: "text-blue-400 font-bold mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(BookOpen, { size: 20 }),
                  " RESOURCES"
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400 mb-4", children: "Download the companion guide for this module." }),
                /* @__PURE__ */ jsxs("button", { className: "flex items-center gap-2 text-sm text-white hover:text-blue-300 transition-colors", children: [
                  /* @__PURE__ */ jsx(FolderDown, { size: 16 }),
                  " Download ",
                  activeModule.title,
                  " Guide.pdf"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: `p-6 rounded-lg border transition-all duration-500 ${isModuleComplete(activeModule) ? "bg-gold/10 border-gold" : "bg-gray-800/50 border-gray-700 opacity-50"}`, children: [
                /* @__PURE__ */ jsxs("h3", { className: "text-gold font-bold mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Award, { size: 20 }),
                  " CERTIFCATE"
                ] }),
                isModuleComplete(activeModule) ? /* @__PURE__ */ jsxs("div", { className: "animate-fadeIn", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-300 mb-4", children: "Congratulations! You have completed all tasks." }),
                  /* @__PURE__ */ jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      placeholder: "Enter your full name",
                      className: "w-full bg-black/50 border border-gold/30 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-gold",
                      value: userName,
                      onChange: (e) => setUserName(e.target.value)
                    }
                  ) }),
                  /* @__PURE__ */ jsxs(
                    "button",
                    {
                      onClick: handleDownloadCertificate,
                      disabled: loading,
                      className: "w-full btn-gold text-sm py-2 flex justify-center items-center gap-2",
                      children: [
                        loading ? /* @__PURE__ */ jsx(Loader2, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ jsx(Award, { size: 16 }),
                        "Claim Certificate"
                      ]
                    }
                  )
                ] }) : /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "Complete all action items above to unlock your certificate of attendance." })
              ] })
            ] })
          ] })
        ] })
      ] }) })
    ] }) })
  ] });
};
const Sponsors = () => {
  return /* @__PURE__ */ jsx("div", { className: "pt-20 pb-20", children: /* @__PURE__ */ jsxs("div", { className: "section-container text-center", children: [
    /* @__PURE__ */ jsxs("h1", { className: "text-4xl font-bold mb-12", children: [
      "OUR ",
      /* @__PURE__ */ jsx("span", { className: "text-gold", children: "PARTNERS" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8 mb-20", children: [1, 2, 3, 4, 5, 6, 7, 8].map((i) => /* @__PURE__ */ jsx("div", { className: "glass-card flex items-center justify-center min-h-[150px]", children: /* @__PURE__ */ jsxs("span", { className: "text-gray-500 font-bold text-xl", children: [
      "LOGO ",
      i
    ] }) }, i)) }),
    /* @__PURE__ */ jsxs("div", { className: "glass-card max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", children: "BECOME A SPONSOR" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6", children: "Connect with the next generation of African talent. Partner with EcoSwift today." }),
      /* @__PURE__ */ jsx("a", { href: "/contact", className: "btn-gold", children: "Contact Us" })
    ] })
  ] }) });
};
const Contact = () => {
  return /* @__PURE__ */ jsx("div", { className: "pt-20 pb-20", children: /* @__PURE__ */ jsxs("div", { className: "section-container", children: [
    /* @__PURE__ */ jsxs("h1", { className: "text-4xl font-bold mb-12 text-center", children: [
      "GET IN ",
      /* @__PURE__ */ jsx("span", { className: "text-green", children: "TOUCH" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6", children: "CONTACT INFO" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center text-gold", children: /* @__PURE__ */ jsx(Phone, {}) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-400 uppercase", children: "Phone" }),
              /* @__PURE__ */ jsx("p", { className: "font-semibold", children: "+254 700 000 000" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center text-gold", children: /* @__PURE__ */ jsx(Mail, {}) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-400 uppercase", children: "Email" }),
              /* @__PURE__ */ jsx("p", { className: "font-semibold", children: "info@ecoswift.org" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center text-gold", children: /* @__PURE__ */ jsx(MapPin, {}) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-400 uppercase", children: "Location" }),
              /* @__PURE__ */ jsx("p", { className: "font-semibold", children: "Nairobi, Kenya" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "glass-card", children: /* @__PURE__ */ jsxs("form", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx("input", { type: "text", placeholder: "Your Name", className: "w-full bg-black/50 border border-white/20 p-3 rounded text-white" }),
        /* @__PURE__ */ jsx("input", { type: "email", placeholder: "Your Email", className: "w-full bg-black/50 border border-white/20 p-3 rounded text-white" }),
        /* @__PURE__ */ jsx("textarea", { placeholder: "Message", rows: 4, className: "w-full bg-black/50 border border-white/20 p-3 rounded text-white" }),
        /* @__PURE__ */ jsx("button", { className: "btn-gold w-full", children: "Send Message" })
      ] }) })
    ] })
  ] }) });
};
const FAQ = () => {
  const faqs = [
    { q: "How much is the registration fee?", a: "The registration fee is KSH 2,500 per team." },
    { q: "What is the age limit?", a: "The tournament is open to youth aged 16-25." },
    { q: "Are the workshops mandatory?", a: "While not mandatory, they are highly recommended as they provide valuable skills for future careers." },
    { q: "How do I pay?", a: "You can pay via M-Pesa or PayPal during the registration process." }
  ];
  return /* @__PURE__ */ jsx("div", { className: "pt-20 pb-20", children: /* @__PURE__ */ jsxs("div", { className: "section-container max-w-3xl", children: [
    /* @__PURE__ */ jsxs("h1", { className: "text-4xl font-bold mb-12 text-center", children: [
      "FREQUENTLY ASKED ",
      /* @__PURE__ */ jsx("span", { className: "text-gold", children: "QUESTIONS" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-6", children: faqs.map((faq, i) => /* @__PURE__ */ jsxs("div", { className: "glass-card", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2 text-green", children: faq.q }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-300", children: faq.a })
    ] }, i)) })
  ] }) });
};
const Schedule = () => {
  return /* @__PURE__ */ jsx("section", { id: "tournament", className: "bg-dark-surface py-20", children: /* @__PURE__ */ jsxs("div", { className: "section-container", children: [
    /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-bold mb-12 text-center", children: [
      "TOURNAMENT ",
      /* @__PURE__ */ jsx("span", { className: "text-gold", children: "SCHEDULE" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "glass-card hover:bg-white/5 transition-colors", children: [
        /* @__PURE__ */ jsx("div", { className: "text-green mb-4", children: /* @__PURE__ */ jsx(Calendar, { size: 32 }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "QUALIFIERS: UGANDA" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-400 mb-4", children: "St. Mary's Stadium, Kitende" }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-gold font-semibold", children: "APRIL 2026" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "glass-card hover:bg-white/5 transition-colors", children: [
        /* @__PURE__ */ jsx("div", { className: "text-green mb-4", children: /* @__PURE__ */ jsx(Calendar, { size: 32 }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "QUALIFIERS: ETHIOPIA" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-400 mb-4", children: "Addis Ababa Stadium" }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-gold font-semibold", children: "MAY 2026" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "glass-card border-gold/30 hover:border-gold/60 transition-colors relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 bg-gold text-black text-xs font-bold px-3 py-1", children: "FINAL" }),
        /* @__PURE__ */ jsx("div", { className: "text-gold mb-4", children: /* @__PURE__ */ jsx(Trophy, { size: 32 }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "GRAND FINAL" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gray-300 mb-4", children: [
          /* @__PURE__ */ jsx(MapPin, { size: 16 }),
          /* @__PURE__ */ jsx("span", { children: "Kasarani Stadium, Kenya" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-lg text-white font-bold", children: "JUNE 2026" })
      ] })
    ] })
  ] }) });
};
const supabaseUrl = "https://michtiotnffnwssdbqnm.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pY2h0aW90bmZmbndzc2RicW5tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ5NDMzMTgsImV4cCI6MjA4MDUxOTMxOH0.3T_93LrpSbH3z0T1C3n5Ir-jNOm4FnDpauspTaeRWnI";
createClient(
  supabaseUrl,
  supabaseAnonKey
);
const SchedulePage = () => /* @__PURE__ */ jsx("div", { className: "pt-20", children: /* @__PURE__ */ jsx(Schedule, {}) });
const routes = [
  {
    path: "/",
    element: /* @__PURE__ */ jsx(App, {}),
    children: [
      { index: true, element: /* @__PURE__ */ jsx(Home, {}) },
      { path: "about", element: /* @__PURE__ */ jsx(About, {}) },
      { path: "skills", element: /* @__PURE__ */ jsx(SkillsHub, {}) },
      { path: "sponsors", element: /* @__PURE__ */ jsx(Sponsors, {}) },
      { path: "contact", element: /* @__PURE__ */ jsx(Contact, {}) },
      { path: "faq", element: /* @__PURE__ */ jsx(FAQ, {}) },
      { path: "schedule", element: /* @__PURE__ */ jsx(SchedulePage, {}) }
      // { path: 'register', element: <RegisterPage /> },
    ]
  }
];
function App() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-dark-bg text-white flex flex-col", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("div", { className: "flex-grow", children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const createApp = ViteReactSSG(
  App,
  { routes }
);
export {
  createApp
};
