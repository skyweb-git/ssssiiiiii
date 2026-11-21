import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Users, 
  ShieldCheck, 
  Award, 
  MessageSquareQuote, 
  Handshake, 
  Layers, 
  Newspaper, 
  TrendingUp, 
  HeartHandshake, 
  Headphones,
  ArrowRight,
  Mail
} from 'lucide-react';
import { teamMembers } from '../data/siteData';
import { pageSeo } from '../data/seoData';
import SEO from '../components/SEO';
import { ClientReviewsGrid } from '../components/ui/profile-card-testimonial-carousel';

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const hubSections = [
  {
    title: "Corporate Overview",
    href: "/about/overview",
    icon: Building2,
    desc: "Built by technologists from IIT Hyderabad & Madras for global enterprises.",
  },
  {
    title: "Leadership & Governance",
    href: "/about/leadership",
    icon: Users,
    desc: "Executive stewardship and founding systems engineers.",
  },
  {
    title: "Our Brand & Purpose",
    href: "/about/brand",
    icon: ShieldCheck,
    desc: "High-quality tech and clean UI from IIT talent and industry masters.",
  },
  {
    title: "Recognition & Awards",
    href: "/about/recognition",
    icon: Award,
    desc: "Press features, hackathon honors, and SOC 2 / ISO 27001 compliance.",
  },
  {
    title: "The Clients",
    href: "/about/customer-speak",
    icon: MessageSquareQuote,
    desc: "Partner feedback and real-world outcomes.",
  },
  {
    title: "Partners Ecosystem",
    href: "/about/partners",
    icon: Handshake,
    desc: "Alliances with AWS, Azure, Google Cloud, NVIDIA, SAP, and Salesforce.",
  },
  {
    title: "Portfolio Companies & Labs",
    href: "/about/portfolio",
    icon: Layers,
    desc: "Incubated platforms including SkyCore and AgentPulse AI.",
  },
  {
    title: "News & Media Coverage",
    href: "/about/news",
    icon: Newspaper,
    desc: "Announcements, expansion milestones, and research notes.",
  },
  {
    title: "Investor Relations",
    href: "/about/investors",
    icon: TrendingUp,
    desc: "Capital stewardship with 60% reinvestment into R&D.",
  },
  {
    title: "Corporate Citizenship",
    href: "/about/citizenship",
    icon: HeartHandshake,
    desc: "SkyWeb Foundation and educational partnerships.",
  },
  {
    title: "Customer Centricity Office",
    href: "/about/customer-centricity",
    icon: Headphones,
    desc: "15-minute emergency SLAs and direct engineer access.",
  }
];

const featuredTestimonials = [
  {
    company: "MasterBrush Art Foundation",
    imageUrl: "/assets/testimonials/card-1.png",
    quote: "SkyWeb built our philanthropic archival and digital exhibition platform with exceptional UX, robust cloud backup systems, and seamless accessibility across devices."
  },
  {
    company: "ArtArtist",
    imageUrl: "/assets/testimonials/card-2.png",
    quote: "SkyWeb architected a high-throughput digital gallery and creator marketplace that scaled past 250,000 active creators seamlessly with flawless uptime."
  },
  {
    company: "Value Laden",
    imageUrl: "/assets/testimonials/card-3.png",
    quote: "SkyWeb engineered our financial reporting engine and algorithmic advisory dashboard with unyielding accuracy, data privacy, and regulatory auditability."
  },
  {
    company: "Akashya Labs and Tech",
    imageUrl: "/assets/testimonials/card-4.png",
    quote: "A brilliant, agile team. They built our next-generation mobile platform on time, with strict adherence to security protocols and zero launch-day defects."
  },
  {
    company: "ServFex",
    imageUrl: "/assets/testimonials/card-6.png",
    quote: "The field service management engine and real-time dispatch APIs engineered by SkyWeb reduced technician turnaround times by 48% across thousands of service orders."
  }
];

export default function AboutPage({ onOpenModal }) {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-['DM_Sans'] pb-24">
      <SEO {...pageSeo['/about']} />
      {/* ================= 1. SKYWEB HUB HERO ================= */}
      <section className="relative overflow-hidden text-white min-h-[68vh] sm:min-h-[74vh] flex items-end">
        <img
          src="/assets/about-hero.jpg"
          alt="SkyWeb team"
          className="absolute inset-0 w-full h-full object-cover object-[center_35%]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/5"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.18)_100%)] pointer-events-none" aria-hidden="true" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 pt-28 md:pt-36 pb-14 md:pb-20">
          <h1 className="text-3xl sm:text-5xl lg:text-[3.35rem] font-extrabold tracking-tight text-white max-w-3xl leading-[1.12] mb-4 font-['DM_Sans'] drop-shadow-[0_2px_18px_rgba(0,0,0,0.4)]">
            Software. AI. Cloud.
          </h1>

          <p className="text-base sm:text-lg text-white/90 max-w-xl leading-relaxed mb-8 font-normal drop-shadow-[0_1px_10px_rgba(0,0,0,0.35)]">
            Explore SkyWeb — our people, leadership, and how we build.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#hub-directory"
              className="px-8 py-3.5 rounded-full bg-[#004AAD] hover:bg-[#003B8A] text-white text-base font-bold shadow-[0_6px_20px_rgba(0,74,173,0.35)] hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              <span>Explore SkyWeb Hub</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <button
              type="button"
              onClick={onOpenModal}
              className="px-8 py-3.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/35 text-white text-base font-bold transition-all"
            >
              Schedule Technical Review
            </button>
          </div>
        </div>
      </section>

      {/* ================= 2. SKYWEB HUB DIRECTORY ================= */}
      <section className="py-14 sm:py-20 px-6 sm:px-8 bg-white border-b border-slate-100" id="hub-directory">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
              SkyWeb Hub
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Company, leadership, clients, and initiatives — in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {hubSections.map((sec, idx) => {
              const IconComp = sec.icon;
              return (
                <Link
                  key={idx}
                  to={sec.href}
                  className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 hover:border-[#004AAD]/45 transition-all duration-300 group flex flex-col justify-between hover:shadow-md"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#004AAD]/10 text-[#004AAD] flex items-center justify-center mb-4 group-hover:bg-[#004AAD] group-hover:text-white transition-colors duration-300">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1.5 group-hover:text-[#004AAD] transition-colors font-['DM_Sans']">
                      {sec.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                      {sec.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#004AAD]">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 3. ORIGIN ================= */}
      <section className="py-14 sm:py-20 px-6 sm:px-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 font-['DM_Sans'] leading-tight">
              Built by engineers.
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Hyderabad HQ — with delivery across Dubai, Cape Town, and global tech corridors.
            </p>
          </div>
          <div className="lg:col-span-7 space-y-4 text-slate-600 text-base leading-relaxed">
            <p>
              SkyWeb exists so technology solves real business problems — not create new ones. Our team includes talent from <strong className="text-[#004AAD]">IIT Hyderabad</strong> and <strong className="text-[#004AAD]">IIT Madras</strong>, shipping software, AI, and cloud platforms for enterprises worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* ================= 4. EXECUTIVE LEADERSHIP ================= */}
      <section className="py-14 sm:py-20 px-6 sm:px-8 bg-white border-b border-slate-100" id="leadership">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
              Executive Leadership
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Engineers and operators across India and South Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {teamMembers.map((member) => {
              const profileSlug =
                member.id === 'mohammed-rabbani'
                  ? 'mohammed-rabbani-pasha'
                  : member.id === 'ian-chenjerai'
                    ? 'ian-tapiwa-chenjerai'
                    : member.id === 'vikhyath-nimmalapudi'
                      ? 'nimmalapudi-vikhyath'
                      : member.id;

              return (
                <div
                  key={member.id}
                  className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-[#004AAD]/35 hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`w-full h-full object-cover ${member.imgPosition || 'object-top'}`}
                      loading="lazy"
                    />
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-slate-900 font-['DM_Sans'] leading-snug">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold text-[#004AAD] mt-1">
                      {member.role}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      {member.location}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed mt-3 line-clamp-3 flex-1">
                      {member.bio}
                    </p>

                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-all"
                            aria-label={`${member.name} on LinkedIn`}
                          >
                            <LinkedInIcon />
                            <span>LinkedIn</span>
                          </a>
                        )}
                        {member.email && (
                          <a
                            href={`mailto:${member.email}`}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-[#004AAD] hover:text-white transition-all"
                            aria-label={`Email ${member.name}`}
                          >
                            <Mail className="w-3.5 h-3.5" />
                            <span>Email</span>
                          </a>
                        )}
                      </div>
                      <Link
                        to={`/about/leadership/${profileSlug}`}
                        className="text-xs font-bold text-[#004AAD] hover:text-[#003B8A] inline-flex items-center gap-0.5"
                      >
                        <span>Profile</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 5. THE CLIENTS ================= */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200" id="the-clients">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10">
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2 tracking-tight font-['DM_Sans']">
                The Clients
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Outcomes from partners who build with SkyWeb.
              </p>
            </div>
            <Link
              to="/about/customer-speak"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-[#004AAD] font-bold text-sm transition-all whitespace-nowrap self-start md:self-auto"
            >
              <span>View all</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <ClientReviewsGrid testimonials={featuredTestimonials} />
        </div>
      </section>

      <section className="pt-12 sm:pt-16 px-6 sm:px-8 bg-white">
        <div className="max-w-3xl mx-auto bg-black text-white border border-slate-800 rounded-2xl p-7 sm:p-10 text-center">
          <h3 className="text-xl sm:text-2xl font-extrabold text-blue-500 tracking-tight mb-2">
            Ready to start?
          </h3>
          <p className="text-blue-100/90 text-sm leading-relaxed mb-6 max-w-lg mx-auto">
            <a href="mailto:offical@skywebinternational.com" className="text-blue-400 hover:underline font-semibold">offical@skywebinternational.com</a>
            {' '}· Hyderabad, India
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={onOpenModal}
              className="px-6 py-2.5 rounded-full bg-[#004AAD] hover:bg-[#003B8A] text-white text-sm font-bold transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Start a project</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-slate-800 text-blue-200 hover:text-white text-sm font-bold transition-all"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}