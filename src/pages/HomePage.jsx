import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, ArrowLeft, Clock, Layers, ShoppingBag, Palette, Server, Code2, Cpu, Cloud, Smartphone, ShieldCheck } from 'lucide-react';
import { insightsArticles } from '../data/insightsArticles';
import { provisions, industries, whyPillars, projects } from '../data/siteData';
import { pageSeo } from '../data/seoData';
import SEO from '../components/SEO';
import TechStackShowcase from '../components/TechStackShowcase';
import MethodologyProcessCards from '../components/MethodologyProcessCards';
import TrustedByFlowShowcase from '../components/TrustedByFlowShowcase';
import { DestinationCard } from '../components/ui/card-21';
import { NotchedProjectCard } from '../components/ui/notched-project-card';
import {
  SouthAfricaFlag,
  SaudiArabiaFlag,
  UKFlag,
  JapanFlag,
  IndiaFlag,
  UAEFlag,
} from '../components/ui/CountryFlags';

const capabilityIcons = [Server, Code2, Cpu, Cloud, Smartphone, ShieldCheck];

const latestThinkingCards = [
  {
    to: '/insights/ai-machine-learning',
    image: '/assets/insights/1.png',
    title: 'From AI Adoption to AI Advantage',
    tall: true,
  },
  {
    to: '/insights/software-engineering',
    image: '/assets/insights/2.png',
    title: 'Next-Gen AI Pipelines & Enterprise Foundation Models',
  },
  {
    to: '/insights/business-technology',
    image: '/assets/insights/3.png',
    title: 'Open Banking at an Inflection Point: Why Banks Must Act Now',
  },
  {
    to: '/insights/cloud-infrastructure',
    image: '/assets/insights/4.png',
    title: 'Security by Design: A GenAI Model for Trust and Growth',
  },
  {
    to: '/insights/digital-platforms',
    image: '/assets/insights/5.png',
    title: 'Modern Omnichannel Infrastructure for Global Teams',
  },
  {
    to: '/insights/technology-consulting',
    image: '/assets/insights/6.png',
    title: 'Agentic AI for Oil and Gas Upstream Operations',
  },
  {
    to: '/insights/software-engineering',
    image: '/assets/insights/7.png',
    title: 'Autonomous Enterprise Platforms: Modular Architecture for Scale',
    tall: true,
  },
];

const globalServedMarkets = [
  {
    id: "south-africa",
    location: "South Africa",
    stats: "Cape Town Hub • Enterprise FinTech & Cloud Architecture",
    imageUrl: "https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?auto=format&fit=crop&w=800&q=80",
    flag: <SouthAfricaFlag className="w-6 h-4" />,
  },
  {
    id: "saudi-arabia",
    location: "Saudi Arabia",
    stats: "Riyadh & GCC • Vision 2030 Enterprise Modernization",
    imageUrl: "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=800&q=80",
    flag: <SaudiArabiaFlag className="w-6 h-4" />,
  },
  {
    id: "uk",
    location: "United Kingdom",
    stats: "London Corridor • Cross-Border SaaS, AI & FinTech",
    imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    flag: <UKFlag className="w-6 h-4" />,
  },
  {
    id: "japan",
    location: "Japan",
    stats: "Tokyo Tech Hub • High-Concurrency Platforms & Systems",
    imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    flag: <JapanFlag className="w-6 h-4" />,
  },
  {
    id: "india",
    location: "India",
    stats: "Hyderabad R&D Core • Elite IIT Engineering & AI Squads",
    imageUrl: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80",
    flag: <IndiaFlag className="w-6 h-4" />,
  },
  {
    id: "uae",
    location: "UAE (Dubai)",
    stats: "Dubai DIFC • High-Throughput Cloud & Banking Infrastructure",
    imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    flag: <UAEFlag className="w-6 h-4" />,
  }
];

const trustedLogos = [
  { name: "ArtArtist", src: "/assets/client-showcase/1.png" },
  { name: "Sanghi City", src: "/assets/client-showcase/2.png" },
  { name: "Ambhuja by Maytri", src: "/assets/client-showcase/3.png" },
  { name: "MasterBrush Art Foundation", src: "/assets/client-showcase/4.png" },
  { name: "ServFex", src: "/assets/client-showcase/5.png" },
  { name: "Yash Education", src: "/assets/client-showcase/6.png" },
  { name: "Easy BG Remover", src: "/assets/client-showcase/7.png" },
  { name: "Swayamkrushi", src: "/assets/client-showcase/8.png" },
  { name: "Value Laden", src: "/assets/client-showcase/9.png" },
  { name: "Akashya Labs and Tech", src: "/assets/client-showcase/10.png" },
  { name: "Edion Royal Guesthouse", src: "/assets/client-showcase/edion-royal-guesthouse.png" },
  { name: "The RA Group", src: "/assets/client-showcase/ra-group.png" },
];

export default function HomePage({ onOpenModal }) {
  const heroVideoRef = React.useRef(null);
  const marketsTrackRef = React.useRef(null);
  const marketsSectionRef = React.useRef(null);
  const insightsTrackRef = React.useRef(null);
  const insightsSectionRef = React.useRef(null);
  const lastScrollYRef = React.useRef(typeof window !== 'undefined' ? window.scrollY : 0);
  const marketsScrollLockRef = React.useRef(false);
  const insightsScrollLockRef = React.useRef(false);

  const scrollTrack = React.useCallback((trackRef, lockRef, direction = 1) => {
    const track = trackRef.current;
    if (!track || lockRef.current) return;

    const card = track.querySelector('[data-slide-card]');
    const step = card ? card.offsetWidth + 24 : Math.min(track.clientWidth * 0.85, 360);
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (maxScroll <= 0) return;

    let next = track.scrollLeft + direction * step;
    if (next > maxScroll - 8) next = 0;
    if (next < 0) next = maxScroll;

    lockRef.current = true;
    track.scrollTo({ left: next, behavior: 'smooth' });
    window.setTimeout(() => {
      lockRef.current = false;
    }, 450);
  }, []);

  const scrollMarkets = React.useCallback(
    (direction = 1) => scrollTrack(marketsTrackRef, marketsScrollLockRef, direction),
    [scrollTrack]
  );

  const scrollInsights = React.useCallback(
    (direction = 1) => scrollTrack(insightsTrackRef, insightsScrollLockRef, direction),
    [scrollTrack]
  );

  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const prev = lastScrollYRef.current;
      const delta = y - prev;
      lastScrollYRef.current = y;

      // Scroll down → advance cards right-to-left; scroll up → reverse
      if (Math.abs(delta) < 4) return;
      const direction = delta > 0 ? 1 : -1;

      const checkAndAdvance = (sectionRef, advance) => {
        const section = sectionRef.current;
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const inView = rect.top < window.innerHeight * 0.85 && rect.bottom > window.innerHeight * 0.15;
        if (inView) advance(direction);
      };

      checkAndAdvance(marketsSectionRef, scrollMarkets);
      checkAndAdvance(insightsSectionRef, scrollInsights);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollMarkets, scrollInsights]);

  React.useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;

    // Continuous middle loop: skips intro/outro jumps and loops active middle animation (3.4s to 9.2s)
    const LOOP_START = 3.4;
    const LOOP_END = 9.2;

    let animId;
    const checkLoop = () => {
      if (video) {
        if (video.currentTime >= LOOP_END || video.currentTime < LOOP_START - 0.3) {
          video.currentTime = LOOP_START;
          if (video.paused) {
            video.play().catch(() => {});
          }
        }
      }
      animId = requestAnimationFrame(checkLoop);
    };

    const handleLoadedMetadata = () => {
      video.currentTime = LOOP_START;
      video.play().catch(() => {});
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    if (video.readyState >= 1) {
      if (video.currentTime < LOOP_START || video.currentTime >= LOOP_END) {
        video.currentTime = LOOP_START;
      }
      video.play().catch(() => {});
    }

    animId = requestAnimationFrame(checkLoop);

    return () => {
      cancelAnimationFrame(animId);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  return (
    <>
      <SEO {...pageSeo['/']} />
      {/* ================= HERO SECTION (CLEAN & ENTERPRISE-READY) ================= */}
      <section className="hero-section hero-enterprise-layout">
        <div className="hero-container">
          {/* Left Column: Text & CTAs */}
          <div className="hero-text-col">
            <h1 className="hero-title">
              Technology That Drives{" "}
              <br className="hidden sm:inline" />
              Business <span className="hero-title-accent">Growth.</span>
            </h1>

            <p className="hero-description">
              We build intelligent software, AI solutions, and scalable cloud systems that help businesses grow.
            </p>

            <div className="hero-actions">
              <a href="#solutions" className="hero-btn-primary">
                <span>Explore Our Solutions</span>

              </a>

              <button type="button" className="hero-btn-secondary" onClick={onOpenModal}>
                Let's Talk
              </button>
            </div>

            <div className="hero-capabilities" aria-label="Core focus areas">
              <div className="capability-item">
                <span className="capability-dot" aria-hidden="true" />
                <span className="capability-title">Software & AI</span>
              </div>
              <div className="capability-item">
                <span className="capability-dot" aria-hidden="true" />
                <span className="capability-title">Cloud</span>
              </div>
              <div className="capability-item">
                <span className="capability-dot" aria-hidden="true" />
                <span className="capability-title">Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Column: Technology Illustration */}
          <div className="hero-illustration-col">
            <div className="hero-illustration-wrapper">
              <video 
                ref={heroVideoRef}
                autoPlay 
                loop 
                muted 
                playsInline 
                onTimeUpdate={(e) => {
                  if (e.currentTarget.currentTime >= 9.2 || e.currentTarget.currentTime < 3.1) {
                    e.currentTarget.currentTime = 3.4;
                  }
                }}
                poster="/assets/hero-poster.jpg"
                className="hero-illustration-media"
                aria-label="SkyWeb Technology Infrastructure and Ecosystem Illustration"
              >
                <source src="/assets/hero-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CLIENT LOGO TICKER SLIDESHOW (RIGHT BELOW HERO) ================= */}
      <TrustedByFlowShowcase logos={trustedLogos} />

      {/* ================= LATEST THINKING ================= */}
      <section className="bg-[#f4f5f7] pt-10 pb-12 sm:pt-12 sm:pb-14 md:bg-white md:pt-6 md:pb-14 px-0 md:px-8 border-y border-slate-100" id="solutions">
        <div className="max-w-7xl mx-auto">
          <div className="px-5 md:px-0 flex flex-col lg:flex-row lg:items-start justify-between gap-4 md:gap-6 mb-6 sm:mb-8">
            <div className="max-w-2xl">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#004AAD] block mb-2">
                Latest Thinking
              </span>
              <h2 className="text-[1.75rem] sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight font-['DM_Sans'] leading-[1.15]">
                Technology for Businesses Without <span className="accent-text">Boundaries</span>
              </h2>
            </div>
            <div className="max-w-md lg:pt-3">
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Read what we're thinking. Research that uncovers what's next. Perspectives that challenge the status quo. Ideas that help you see around corners.
              </p>
            </div>
          </div>

          {/* Mobile: TechM-style horizontal carousel */}
          <div className="lg:hidden">
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-5 pb-3 scrollbar-hide scroll-smooth">
              {latestThinkingCards.map((card) => (
                <Link
                  key={`${card.to}-${card.title}`}
                  to={card.to}
                  className="group relative snap-start shrink-0 w-[85vw] max-w-[340px] h-[420px] rounded-2xl overflow-hidden bg-slate-900 shadow-md"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-active:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/15" />
                  <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                    <h3 className="text-[1.35rem] font-bold text-white leading-snug tracking-tight font-['DM_Sans'] mb-3">
                      {card.title}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex items-center justify-center gap-3 mt-4 px-5">
              <span className="text-xs font-medium text-slate-500">Swipe for more</span>
            </div>
          </div>

          {/* Desktop: bento grid */}
          <div className="hidden lg:grid grid-cols-3 gap-5 items-stretch">
            <div className="flex flex-col gap-5">
              <Link
                to={latestThinkingCards[0].to}
                className="group relative overflow-hidden rounded-xl cursor-pointer border border-slate-200/80 bg-slate-950 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between h-[490px]"
              >
                <img src={latestThinkingCards[0].image} alt="" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 via-40% to-black/20" />
                <div className="relative z-10 p-6 mt-auto">
                  <h3 className="text-2xl font-bold text-white leading-snug tracking-tight font-['DM_Sans'] group-hover:text-sky-300 transition-colors">{latestThinkingCards[0].title}</h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-white/90">Read More <ArrowRight className="h-4 w-4" /></span>
                </div>
              </Link>
              <Link
                to={latestThinkingCards[1].to}
                className="group relative overflow-hidden rounded-xl cursor-pointer border border-slate-200/80 bg-slate-950 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between h-[250px]"
              >
                <img src={latestThinkingCards[1].image} alt="" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 via-45% to-black/20" />
                <div className="relative z-10 p-6 mt-auto">
                  <h3 className="text-xl font-bold text-white leading-snug tracking-tight font-['DM_Sans'] group-hover:text-sky-300 transition-colors">{latestThinkingCards[1].title}</h3>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-white/90">Read More <ArrowRight className="h-4 w-4" /></span>
                </div>
              </Link>
            </div>

            <div className="flex flex-col gap-5">
              {[2, 3, 4].map((i) => (
                <Link
                  key={latestThinkingCards[i].title}
                  to={latestThinkingCards[i].to}
                  className="group relative overflow-hidden rounded-xl cursor-pointer border border-slate-200/80 bg-slate-950 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between h-[233px]"
                >
                  <img src={latestThinkingCards[i].image} alt="" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 via-45% to-black/20" />
                  <div className="relative z-10 p-6 mt-auto">
                    <h3 className="text-xl font-bold text-white leading-snug tracking-tight font-['DM_Sans'] group-hover:text-sky-300 transition-colors">{latestThinkingCards[i].title}</h3>
                    <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-white/90">Read More <ArrowRight className="h-4 w-4" /></span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-5">
              <Link
                to={latestThinkingCards[5].to}
                className="group relative overflow-hidden rounded-xl cursor-pointer border border-slate-200/80 bg-slate-950 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between h-[250px]"
              >
                <img src={latestThinkingCards[5].image} alt="" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 via-45% to-black/20" />
                <div className="relative z-10 p-6 mt-auto">
                  <h3 className="text-xl font-bold text-white leading-snug tracking-tight font-['DM_Sans'] group-hover:text-sky-300 transition-colors">{latestThinkingCards[5].title}</h3>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-white/90">Read More <ArrowRight className="h-4 w-4" /></span>
                </div>
              </Link>
              <Link
                to={latestThinkingCards[6].to}
                className="group relative overflow-hidden rounded-xl cursor-pointer border border-slate-200/80 bg-slate-950 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between h-[490px]"
              >
                <img src={latestThinkingCards[6].image} alt="" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 via-40% to-black/20" />
                <div className="relative z-10 p-6 mt-auto">
                  <h3 className="text-2xl font-bold text-white leading-snug tracking-tight font-['DM_Sans'] group-hover:text-sky-300 transition-colors">{latestThinkingCards[6].title}</h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-white/90">Read More <ArrowRight className="h-4 w-4" /></span>
                </div>
              </Link>
            </div>
          </div>

          {/* SkyWeb International — markets we serve */}
          <div
            ref={marketsSectionRef}
            className="mt-12 sm:mt-16 pt-10 border-t border-slate-200/80 md:border-slate-100"
            id="global-corridors"
          >
            <div className="px-5 md:px-0 flex flex-col lg:flex-row lg:items-end justify-between mb-6 sm:mb-8 gap-4">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#004AAD]" aria-hidden="true" />
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#004AAD]">
                    SkyWeb International
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-['DM_Sans'] mt-1">
                  Countries &amp; Enterprise Markets We Serve
                </h3>
                <p className="text-sm text-slate-500 max-w-md leading-relaxed mt-3 lg:hidden">
                  Cross-border delivery across India, EMEA, and Asia — software, AI, and cloud built for every corridor we serve.
                </p>
              </div>

              <div className="flex items-end gap-4">
                <p className="hidden lg:block text-sm text-slate-500 max-w-md leading-relaxed">
                  Cross-border delivery across India, EMEA, and Asia — software, AI, and cloud built for every corridor we serve.
                </p>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => scrollMarkets(-1)}
                    className="h-11 w-11 rounded-full bg-slate-900 text-white inline-flex items-center justify-center hover:bg-[#004AAD] transition-colors"
                    aria-label="Previous market"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollMarkets(1)}
                    className="h-11 w-11 rounded-full bg-slate-900 text-white inline-flex items-center justify-center hover:bg-[#004AAD] transition-colors"
                    aria-label="Next market"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            <div
              ref={marketsTrackRef}
              className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory px-5 md:px-0 pb-2 scrollbar-hide scroll-smooth"
            >
              {globalServedMarkets.map((market) => (
                <div
                  key={market.id}
                  data-slide-card
                  className="snap-start shrink-0 w-[82vw] max-w-[320px] md:w-[340px] md:max-w-none lg:w-[380px] h-[380px] md:h-[420px]"
                >
                  <DestinationCard
                    imageUrl={market.imageUrl}
                    location={market.location}
                    stats={market.stats}
                    flag={market.flag}
                    onClick={(e) => {
                      e.preventDefault();
                      onOpenModal();
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= PHILOSOPHY BANNER ================= */}
      <section className="py-10 sm:py-12 lg:py-14">
        <div className="section-container">
          <div className="relative overflow-hidden rounded-2xl bg-[#070c16] border border-white/[0.06] px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              <div className="absolute -top-24 -right-16 h-64 w-64 rounded-full bg-[#004AAD]/20 blur-3xl" />
              <div className="absolute -bottom-28 left-0 h-56 w-56 rounded-full bg-[#0066FF]/10 blur-3xl" />
            </div>

            <div className="relative z-10 max-w-3xl">
              <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#7dd3fc] mb-4">
                Our Philosophy
              </span>
              <h2 className="font-['DM_Sans'] text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold text-white tracking-tight leading-[1.15] mb-5">
                We Don&apos;t Just Build Technology.
                <br />
                We Enable Businesses With{' '}
                <span className="text-[#38bdf8]">It.</span>
              </h2>
              <p className="text-[15px] sm:text-base text-slate-300/90 leading-relaxed max-w-2xl">
                Technology should solve business problems, not create more of them. SkyWeb works alongside businesses to understand their goals, design the right technology strategy, build the required systems, and continuously improve them as they grow.
              </p>
            </div>

            {/* Business → Strategy → Technology → Scale */}
            <div className="relative z-10 mt-10 sm:mt-12 pt-8 border-t border-white/[0.08]">
              <ol className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {[
                  { step: '01', label: 'Business' },
                  { step: '02', label: 'Strategy' },
                  { step: '03', label: 'Technology' },
                  { step: '04', label: 'Scale' },
                ].map((item) => (
                  <li key={item.label} className="relative min-w-0">
                    <div className="flex flex-col gap-2 pl-3 border-l-2 border-[#38bdf8]/50">
                      <span className="text-[11px] font-bold tracking-[0.18em] text-[#38bdf8]/75 tabular-nums">
                        {item.step}
                      </span>
                      <span className="text-base sm:text-lg font-semibold text-white font-['DM_Sans'] tracking-tight">
                        {item.label}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE PROVIDE (CORE CAPABILITIES) ================= */}
      <section className="site-section bg-white" id="services">
        <div className="section-container">
          <div className="section-header-block mb-10 sm:mb-12">
            <span className="section-eyebrow">CORE CAPABILITIES</span>
            <h2 className="section-headline">
              What We <span className="accent-text">Provide</span>
            </h2>
            <p className="section-subhead">
              Systems, software, and digital infrastructure — built clean, delivered clear.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 lg:gap-x-8 lg:gap-y-12">
            {provisions.map((item, idx) => {
              const IconComponent = capabilityIcons[idx % capabilityIcons.length];
              return (
                <NotchedProjectCard
                  key={item.title}
                  href={item.href || '/capabilities'}
                  title={item.title}
                  description={item.desc}
                  image={item.image}
                  imageAlt={item.title}
                  badge={item.number || `0${idx + 1}`}
                  tags={item.highlights || []}
                  icon={IconComponent}
                  monochrome
                  surface="#ffffff"
                  accent="#004AAD"
                  accentForeground="#ffffff"
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= HOW WE WORK ================= */}
      <section className="site-section" id="process">
        <div className="section-container">
          <div className="section-header-block">
            <span className="section-eyebrow">METHODOLOGY</span>
            <h2 className="section-headline">How We <span className="accent-text">Work</span></h2>
            <p className="section-subhead">
              A structured, transparent engineering process designed to reduce risk and deliver high-performance technology on schedule.
            </p>
          </div>

          <MethodologyProcessCards />
        </div>
      </section>

      {/* ================= EDITORIAL BANNER (SKYWEB BLUE BRAND STYLE) ================= */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#030a1c] via-[#071940] to-[#030d24] text-white">
        
        {/* Electric Blue Ambient Glows (Clean - No Pattern Lines) */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#004AAD]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/4 left-10 w-80 h-80 bg-[#0066FF]/15 rounded-full blur-3xl pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 pt-12 sm:pt-14 lg:pt-16 pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end min-h-[440px] lg:min-h-[520px]">
            
            {/* Left Content Column (7 cols) — padded off the floor so copy isn't cramped */}
            <div className="lg:col-span-7 flex flex-col justify-center pb-12 sm:pb-14 lg:pb-16">

              {/* Bold Big Headline */}
              <h2 className="text-3xl sm:text-5xl lg:text-[54px] xl:text-[58px] font-extrabold text-white tracking-tight font-['DM_Sans'] leading-[1.08] mb-6 max-w-2xl">
                Making Technology Work Without Boundaries
              </h2>

              {/* Inspiring Leadership Quote Callout */}
              <blockquote className="text-base sm:text-lg text-blue-100/90 font-medium italic leading-relaxed mb-7 max-w-xl">
                “Talent alone doesn't build careers — systems do. We architect the infrastructure where creative passion meets enterprise scale.”
              </blockquote>

              {/* Author Attribution */}
              <div className="mb-9">
                <h4 className="text-lg sm:text-xl font-bold text-white font-['DM_Sans'] leading-tight">
                  Uday Kumar Sangisetti
                </h4>
                <p className="text-xs sm:text-sm text-blue-200/80 font-normal mt-1 leading-snug">
                  Founder, ArtArtist.in &bull; Client Management &amp; Tech Consultant, SkyWeb
                </p>
              </div>

              {/* Red Rectangular Action Button */}
              <div>
                <Link
                  to="/about/leadership/uday-kumar-sangisetti"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-[#e31837] hover:bg-[#c4142e] text-white text-xs sm:text-sm font-bold uppercase tracking-widest transition-all shadow-lg shadow-red-950/40 rounded-[2px]"
                >
                  READ MORE
                </Link>
              </div>

            </div>

            {/* Right Column: cutout sits on the section floor; top padding keeps head clear */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end items-end self-end">
              <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-none flex justify-center lg:justify-end items-end">
                {/* Backlight so dark trousers and silhouette pop cleanly against blue */}
                <div className="absolute bottom-10 right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-6 w-80 h-96 bg-[#004AAD]/35 rounded-full blur-3xl pointer-events-none" />
                
                <img
                  src="/assets/big-thinker.png"
                  alt="Uday Kumar Sangisetti"
                  className="relative z-10 w-auto h-[380px] sm:h-[460px] lg:h-[520px] xl:h-[560px] object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)] select-none block"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="site-section bg-subtle" id="industries">
        <div className="section-container">
          <div className="section-header-block">
            <h2 className="section-headline">Industries We <span className="accent-text">Support</span></h2>
            <p className="section-subhead">
              Tailored technology infrastructure built to address industry-specific compliance, performance, and scaling demands.
            </p>
          </div>

          <div className="cards-grid-3">
            {industries.map((ind, idx) => (
              <div className="industry-card" key={idx}>
                <h3 className="card-title">{ind.title}</h3>
                <p className="card-desc">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TECH STACK ================= */}
      <section className="site-section bg-white" id="tech-stack">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#004AAD] bg-blue-50 border border-blue-200/80 mb-3">
              TECHNOLOGY FOUNDATION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] font-['DM_Sans'] tracking-tight mb-3">
              Modern Technologies We Build <span className="text-[#004AAD]">With</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Battle-tested frameworks, resilient cloud infrastructure, and AI toolchains powering scalable applications.
            </p>
          </div>

          <TechStackShowcase />
        </div>
      </section>

      {/* ================= WHY SKYWEB ================= */}
      <section className="site-section bg-subtle">
        <div className="section-container">
          <div className="why-split-container">
            <div className="why-left-pitch">
              <span className="section-eyebrow">VALUE PROPOSITION</span>
              <h2 className="why-big-statement">
                Technology Built Around Your <span className="accent-text">Business</span>
              </h2>
              <p className="why-pitch-lead">
                Every business has different challenges. Instead of forcing businesses into predefined solutions, we design technology around the way your organization operates.
              </p>

              <div className="brand-manifesto-box">
                <p>
                  Your Business.<br />
                  <span className="accent-text">Your Requirements.</span><br />
                  Your Technology.
                </p>
              </div>
            </div>

            <div className="why-cards-list">
              {whyPillars.map((pillar, idx) => (
                <div className="why-card" key={idx}>
                  <h3 className="card-title">{pillar.title}</h3>
                  <p className="card-desc">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUR WORK ================= */}
      <section className="site-section" id="work">
        <div className="section-container">
          <div className="section-header-block">
            <span className="section-eyebrow">PORTFOLIO</span>
            <h2 className="section-headline">Technology We Have <span className="accent-text">Delivered</span></h2>
            <p className="section-subhead">
              Real products, platforms, and business systems empowering organizations across categories.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#004AAD]/10 text-[#004AAD]">
                      {idx === 0 && <Layers className="w-3.5 h-3.5" />}
                      {idx === 1 && <ShoppingBag className="w-3.5 h-3.5" />}
                      {idx === 2 && <Palette className="w-3.5 h-3.5" />}
                      <span>{proj.badge}</span>
                    </span>
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-400">
                      {proj.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                    {proj.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mt-2.5 min-h-[42px]">
                    {proj.desc}
                  </p>

                  <div className={`relative overflow-hidden rounded-xl h-48 w-full mt-5 border border-slate-100 flex items-center justify-center ${proj.imgClass && proj.imgClass.includes('bg-') ? '' : 'bg-slate-900'}`}>
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className={`h-full w-full ${proj.imgClass || 'object-cover'}`}
                    />
                    {proj.imgClass && proj.imgClass.includes('object-cover') && (
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60" />
                    )}
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex flex-wrap gap-1.5 mb-5 w-full">
                    {proj.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 text-xs rounded-md bg-slate-100 text-slate-600 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={onOpenModal}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#004AAD] cursor-pointer"
                    >
                      <span>Details</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={onOpenModal}
                      className="px-4 py-2 rounded-lg bg-[#004AAD] text-white text-xs font-semibold cursor-pointer"
                    >
                      View System
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="section-centered-action">
            <button className="btn-primary" onClick={onOpenModal}>
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* ================= INSIGHTS — slideshow (mobile + desktop) ================= */}
      <section ref={insightsSectionRef} className="site-section bg-subtle" id="insights">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-8">
            <div className="max-w-2xl">
              <span className="section-eyebrow">TECHNOLOGY FOR BUSINESSES WITHOUT BOUNDARIES</span>
              <h2 className="section-headline">
                Engineering the Future of Business
              </h2>
              <p className="section-subhead">
                Explore technology insights, engineering perspectives, and digital transformation strategies from SkyWeb IT Solutions.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => scrollInsights(-1)}
                className="h-11 w-11 rounded-full bg-slate-900 text-white inline-flex items-center justify-center hover:bg-[#004AAD] transition-colors"
                aria-label="Previous insight"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollInsights(1)}
                className="h-11 w-11 rounded-full bg-slate-900 text-white inline-flex items-center justify-center hover:bg-[#004AAD] transition-colors"
                aria-label="Next insight"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                to="/insights"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#004AAD] hover:bg-[#003B8A] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
              >
                <span>View All</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div
            ref={insightsTrackRef}
            className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-hide scroll-smooth -mx-1 px-1"
          >
            {insightsArticles.filter((a) => !a.isNews).map((article) => (
              <article
                key={article.slug}
                data-slide-card
                className="snap-start shrink-0 w-[82vw] max-w-[320px] md:w-[340px] lg:w-[360px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white flex flex-col group hover:shadow-xl hover:border-[#004AAD]/30 transition-all duration-300"
              >
                <Link
                  to={`/insights/${article.slug}`}
                  className="block h-36 overflow-hidden bg-slate-100 border-b border-slate-100 relative"
                  aria-label={`Read ${article.title}`}
                >
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>

                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2.5 font-medium">
                    <span>{article.publishedDate || 'October 2026'}</span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1 text-slate-500">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0f172a] leading-snug mb-2.5 group-hover:text-[#004AAD] transition-colors">
                    <Link to={`/insights/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 flex-1 line-clamp-3">
                    {article.description}
                  </p>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <Link
                      to={`/insights/${article.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004AAD] hover:text-[#003B8A] transition-colors"
                    >
                      <span>Read Article</span>
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                      Enterprise Insight
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
