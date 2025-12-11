import { useState } from "react";
import {
  BookOpen,
  Code,
  DollarSign,
  Smartphone,
  FolderDown,
  Award,
  CheckSquare,
  Square,
  Loader2,
} from "lucide-react";

const MODULES = [
  {
    id: "ecommerce",
    title: "E-Commerce Mastery",
    icon: DollarSign,
    description: "Learn to build and scale your online business.",
    videoUrl: "https://www.youtube.com/shorts/iMFlT62eTaE", // Placeholder
    actionItems: [
      "Create a seller account (Jumia or Kilimall)",
      "List your first product with 3 photos",
      "Set up mobile money payment integration",
    ],
  },
  {
    id: "ai-tools",
    title: "AI & Future Tech",
    icon: Code,
    description: "Master ChatGPT and AI tools to 10x your productivity.",
    videoUrl: "https://www.youtube.com/watch?v=Otim2mDjsYM", // Placeholder
    actionItems: [
      "Sign up for an OpenAI account",
      "Generate a business plan using AI",
      "Create a social media calendar using AI",
    ],
  },
  {
    id: "content-creation",
    title: "Content Creation 101",
    icon: Smartphone,
    description: "Turn your creativity into a digital career.",
    videoUrl: "https://www.youtube.com/watch?v=cZX63GijH2E", // Placeholder (fixed malformed URL)
    actionItems: [
      "Record a 60-second intro video",
      "Edit a video using CapCut or InShot",
      "Post content on a new platform",
    ],
  },
];

const SkillsHub = () => {
  const [activeModule, setActiveModule] = useState(MODULES[0]);
  const [completedItems, setCompletedItems] = useState<Record<string, boolean>>(
    {}
  );
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);

  // Track which module is currently playing (showing the iframe)
  const [playingModuleId, setPlayingModuleId] = useState<string | null>(null);

  const getYoutubeId = (url?: string | null) => {
    if (!url) return null;
    url = url.replace(/^https?:\/\/(https?:\/\/)+/, "https://");
    const regex =
      /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/;
    const match = url.match(regex);
    if (match && match[1]) return match[1];
    try {
      const parsed = new URL(url);
      const v = parsed.searchParams.get("v");
      if (v) return v;
    } catch (e) {
      // ignore
    }
    return null;
  };

  const getThumbnailUrl = (url?: string | null) => {
    const id = getYoutubeId(url);
    if (!id) return null;
    return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
  };

  // Convert various YouTube URLs (watch, shorts, youtu.be) into an /embed/ URL
  const getEmbedUrl = (url?: string | null) => {
    if (!url) return null;

    // Sanitize duplicate protocol like 'https://https://'
    url = url.replace(/^https?:\/\/(https?:\/\/)+/, "https://");

    // Common patterns: youtube.com/watch?v=ID, youtu.be/ID, youtube.com/embed/ID, youtube.com/shorts/ID
    const regex =
      /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/;
    const match = url.match(regex);
    if (match && match[1])
      return `https://www.youtube.com/embed/${match[1]}?rel=0`;

    // Fallback: try to parse v param
    try {
      const parsed = new URL(url);
      const v = parsed.searchParams.get("v");
      if (v) return `https://www.youtube.com/embed/${v}?rel=0`;
    } catch (e) {
      // ignore
    }

    return null;
  };

  const toggleItem = (moduleId: string, itemIndex: number) => {
    const key = `${moduleId}-${itemIndex}`;
    setCompletedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const isModuleComplete = (module: (typeof MODULES)[0]) => {
    return module.actionItems.every(
      (_, idx) => completedItems[`${module.id}-${idx}`]
    );
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
          moduleName: activeModule.title,
        }),
      });

      if (!response.ok) throw new Error("Failed to generate certificate");

      // Handle Blob download
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

  return (
    <div className="pt-20 pb-20">
      {/* Header with background image */}
      <div className="relative mb-12">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/skills-header.jpg"
            alt="Audience at a skills event / learning background"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
        </div>

        <div className="section-container text-center relative z-10 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            SKILLS <span className="text-gold">HUB</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Empowering you with the tools to succeed. <br />
            Complete modules, take action, and earn your certificate.
          </p>
        </div>
      </div>

      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar / Module List */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="text-xl font-bold mb-4 text-white uppercase tracking-wider">
              Learning Modules
            </h2>
            {MODULES.map((module) => {
              const Icon = module.icon;
              const isActive = activeModule.id === module.id;
              const isComplete = isModuleComplete(module);

              return (
                <button
                  key={module.id}
                  onClick={() => {
                    setActiveModule(module);
                    setPlayingModuleId(null);
                  }}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-300 flex items-center gap-4
                                        ${isActive ? "bg-gold/10 border-gold text-white" : "bg-white/5 border-transparent text-gray-400 hover:bg-white/10"}
                                    `}
                >
                  <div
                    className={`${isActive ? "text-gold" : "text-gray-500"}`}
                  >
                    <Icon size={24} />
                  </div>
                  <div className="flex-grow">
                    <div className="font-bold">{module.title}</div>
                    <div className="text-xs opacity-70">
                      {isComplete ? (
                        <span className="text-green-400 flex items-center gap-1">
                          <CheckSquare size={10} /> Completed
                        </span>
                      ) : (
                        "In Progress"
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-8">
            <div className="glass-card min-h-[600px] flex flex-col">
              {/* Video Section */}
              <div className="aspect-video bg-black rounded-lg mb-6 relative overflow-hidden group">
                {(() => {
                  const embedUrl = getEmbedUrl(activeModule.videoUrl);
                  const thumb = getThumbnailUrl(activeModule.videoUrl);

                  // If user has clicked play for this module and we have an embed URL, show iframe
                  if (playingModuleId === activeModule.id && embedUrl) {
                    return (
                      <iframe
                        className="w-full h-full"
                        src={embedUrl}
                        title={`Video content for ${activeModule.title}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    );
                  }

                  // Render clickable thumbnail (if available) or fallback link
                  if (thumb) {
                    return (
                      <div
                        role="button"
                        tabIndex={0}
                        onClick={() => setPlayingModuleId(activeModule.id)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ")
                            setPlayingModuleId(activeModule.id);
                        }}
                        className="w-full h-full cursor-pointer relative flex items-center justify-center bg-black"
                        aria-label={`Play ${activeModule.title}`}
                      >
                        <img
                          src={thumb}
                          alt={`Thumbnail for ${activeModule.title}`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // If high-res thumbnail not available, fall back to hqdefault
                            const target = e.target as HTMLImageElement;
                            if (!target.src.includes("hqdefault"))
                              target.src = target.src.replace(
                                "maxresdefault.jpg",
                                "hqdefault.jpg"
                              );
                          }}
                        />
                        <div className="absolute inset-0 bg-black/30" />
                        <div className="absolute flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M8 5v14l11-7-11-7z" fill="#000" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  // If we couldn't build an embed URL or thumbnail, show a friendly fallback with link
                  return (
                    <div className="w-full h-full flex items-center justify-center p-6 text-center">
                      <div>
                        <p className="text-gray-300 mb-3">
                          This video cannot be embedded in the page.
                        </p>
                        <a
                          href={activeModule.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gold underline"
                        >
                          Open on YouTube
                        </a>
                      </div>
                    </div>
                  );
                })()}
              </div>

              <div className="px-2">
                <h2 className="text-3xl font-bold text-white mb-2">
                  {activeModule.title}
                </h2>
                <p className="text-gray-400 mb-6">{activeModule.description}</p>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Action Items */}
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                    <h3 className="text-gold font-bold mb-4 flex items-center gap-2">
                      <CheckSquare size={20} /> ACTION CHECKLIST
                    </h3>
                    <div
                      className="space-y-3"
                      role="group"
                      aria-label="Module action items"
                    >
                      {activeModule.actionItems.map((item, idx) => {
                        const key = `${activeModule.id}-${idx}`;
                        const checked = completedItems[key] || false;
                        return (
                          <div
                            key={idx}
                            onClick={() => toggleItem(activeModule.id, idx)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                toggleItem(activeModule.id, idx);
                              }
                            }}
                            role="checkbox"
                            aria-checked={checked}
                            tabIndex={0}
                            className="flex items-start gap-3 cursor-pointer group select-none outline-none focus:ring-2 focus:ring-gold rounded p-1"
                          >
                            <div
                              className={`mt-1 transition-colors ${checked ? "text-green-400" : "text-gray-600 group-hover:text-gray-400"}`}
                            >
                              {checked ? (
                                <CheckSquare size={20} />
                              ) : (
                                <Square size={20} />
                              )}
                            </div>
                            <span
                              className={`${checked ? "text-gray-300 line-through decoration-white/20" : "text-gray-300"}`}
                            >
                              {item}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Resources & Certificate */}
                  <div className="space-y-6">
                    <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/30">
                      <h3 className="text-blue-400 font-bold mb-2 flex items-center gap-2">
                        <BookOpen size={20} /> RESOURCES
                      </h3>
                      <p className="text-sm text-gray-400 mb-4">
                        Download the companion guide for this module.
                      </p>
                      <button className="flex items-center gap-2 text-sm text-white hover:text-blue-300 transition-colors">
                        <FolderDown size={16} /> Download {activeModule.title}{" "}
                        Guide.pdf
                      </button>
                    </div>

                    <div
                      className={`p-6 rounded-lg border transition-all duration-500 ${isModuleComplete(activeModule) ? "bg-gold/10 border-gold" : "bg-gray-800/50 border-gray-700 opacity-50"}`}
                    >
                      <h3 className="text-gold font-bold mb-2 flex items-center gap-2">
                        <Award size={20} /> CERTIFCATE
                      </h3>

                      {isModuleComplete(activeModule) ? (
                        <div className="animate-fadeIn">
                          <p className="text-sm text-gray-300 mb-4">
                            Congratulations! You have completed all tasks.
                          </p>
                          <div className="mb-3">
                            <input
                              type="text"
                              placeholder="Enter your full name"
                              className="w-full bg-black/50 border border-gold/30 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-gold"
                              value={userName}
                              onChange={(e) => setUserName(e.target.value)}
                            />
                          </div>
                          <button
                            onClick={handleDownloadCertificate}
                            disabled={loading}
                            className="w-full btn-gold text-sm py-2 flex justify-center items-center gap-2"
                          >
                            {loading ? (
                              <Loader2 size={16} className="animate-spin" />
                            ) : (
                              <Award size={16} />
                            )}
                            Claim Certificate
                          </button>
                        </div>
                      ) : (
                        <p className="text-sm text-gray-500">
                          Complete all action items above to unlock your
                          certificate of attendance.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsHub;
