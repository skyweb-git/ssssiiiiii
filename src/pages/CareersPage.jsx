import React from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import { pageSeo } from '../data/seoData';
import { ArrowRight, MapPin, Briefcase, Zap, Award, HeartHandshake } from 'lucide-react';

const openRoles = [
  {
    title: 'Principal Agentic AI Engineer',
    department: 'AI',
    location: 'Hyderabad / Hybrid',
    type: 'Full-Time',
    experience: '7+ years',
    desc: 'Build agent workflows, tool-use systems, and evaluation loops for enterprise automation.',
  },
  {
    title: 'Staff Distributed Systems Architect',
    department: 'Cloud',
    location: 'Hyderabad / Dubai / Remote',
    type: 'Full-Time',
    experience: '8+ years',
    desc: 'Design reliable microservice platforms, event streams, and multi-region deployments.',
  },
  {
    title: 'Senior Full-Stack Engineer',
    department: 'Product',
    location: 'Hyderabad',
    type: 'Full-Time',
    experience: '4+ years',
    desc: 'Ship React/TypeScript products with clean APIs, strong UX, and solid test coverage.',
  },
  {
    title: 'Lead Cloud Security Architect',
    department: 'Security',
    location: 'Dubai / Remote',
    type: 'Full-Time',
    experience: '6+ years',
    desc: 'Harden cloud posture, IAM, and compliance pipelines across client environments.',
  },
  {
    title: 'Principal Data Engineer',
    department: 'Data',
    location: 'Hyderabad',
    type: 'Full-Time',
    experience: '6+ years',
    desc: 'Lead lakehouse and streaming architectures for analytics and operational insights.',
  },
];

export default function CareersPage({ onOpenModal }) {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-['DM_Sans']">
      <SEO {...pageSeo['/careers']} />
      <PageHeader
        title="Careers at SkyWeb"
        subtitle="Build real systems with engineers who care about clarity, quality, and ownership."
      />

      <section className="py-14 sm:py-16 px-6 sm:px-8 border-b border-slate-100 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              How we work
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Small teams, direct decisions, and high standards — without corporate noise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            <div className="p-5 sm:p-6 bg-white rounded-2xl border border-slate-200">
              <Zap className="h-5 w-5 text-[#004AAD] mb-3" />
              <h3 className="text-base font-bold text-slate-900 mb-1.5">High agency</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Engineers own architecture choices and ship with accountability.
              </p>
            </div>
            <div className="p-5 sm:p-6 bg-white rounded-2xl border border-slate-200">
              <Award className="h-5 w-5 text-[#004AAD] mb-3" />
              <h3 className="text-base font-bold text-slate-900 mb-1.5">Strong craft</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Clean code, reviews, and testing are expected — not optional.
              </p>
            </div>
            <div className="p-5 sm:p-6 bg-white rounded-2xl border border-slate-200">
              <HeartHandshake className="h-5 w-5 text-[#004AAD] mb-3" />
              <h3 className="text-base font-bold text-slate-900 mb-1.5">Real impact</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Work on systems used by businesses across India and international markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8 sm:mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Open roles
              </h2>
              <p className="text-sm text-slate-600 mt-1">{openRoles.length} positions</p>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {openRoles.map((role) => (
              <div
                key={role.title}
                className="p-5 sm:p-6 bg-white border border-slate-200 hover:border-[#004AAD]/40 rounded-2xl transition-colors flex flex-col md:flex-row md:items-center justify-between gap-5"
              >
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2 text-xs text-slate-500">
                    <span className="font-semibold text-[#004AAD]">{role.department}</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {role.location}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Briefcase className="h-3 w-3" />
                      {role.experience}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5">{role.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{role.desc}</p>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenModal?.()}
                  className="shrink-0 px-5 py-2.5 rounded-full bg-[#004AAD] hover:bg-[#003B8A] text-white text-sm font-bold inline-flex items-center justify-center gap-2"
                >
                  <span>Apply</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 px-6 sm:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-extrabold text-slate-900 mb-6 tracking-tight">Benefits</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {[
              ['Competitive pay', 'Strong compensation for strong ownership'],
              ['Learning budget', 'Courses, conferences, and research time'],
              ['Hybrid work', 'Lab days and remote focus time'],
              ['Health cover', 'Support for you and your family'],
            ].map(([title, desc]) => (
              <div key={title} className="p-4 sm:p-5 bg-white rounded-2xl border border-slate-200">
                <div className="font-bold text-slate-900 text-sm mb-1">{title}</div>
                <div className="text-xs text-slate-500 leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
