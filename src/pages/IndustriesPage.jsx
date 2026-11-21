import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import { pageSeo } from '../data/seoData';
import {
  ArrowRight,
  Radio,
  Landmark,
  Stethoscope,
  Factory,
  ShoppingCart,
  Zap,
  Film,
  GraduationCap,
  Shield,
  Cpu,
  Fuel,
  Briefcase,
  Scale,
  Plane,
} from 'lucide-react';

const industrySectors = [
  {
    slug: 'banking-financial',
    title: 'Banking & Financial Services',
    icon: Landmark,
    badge: 'BFSI',
    desc: 'Payments, fraud defense, core banking APIs, and customer banking portals with compliance built in.',
    metrics: 'Payment rails • Fraud scoring • KYC journeys',
  },
  {
    slug: 'insurance',
    title: 'Insurance & Insurtech',
    icon: Shield,
    badge: 'Insurtech',
    desc: 'Claims intake, vision-assisted appraisal, policyholder portals, and controlled underwriting automation.',
    metrics: 'Faster claims • Audit trails • Digital FNOL',
  },
  {
    slug: 'communications',
    title: 'Communications & Telecom',
    icon: Radio,
    badge: 'Telco',
    desc: 'BSS/OSS modernization, self-serve care, order fulfillment, and partner APIs for digital telco products.',
    metrics: 'Charging • Care portals • Ops visibility',
  },
  {
    slug: 'healthcare-lifesciences',
    title: 'Healthcare & Life Sciences',
    icon: Stethoscope,
    badge: 'HealthTech',
    desc: 'Telehealth, interoperable records, scheduling, and patient portals designed for privacy and clinical pace.',
    metrics: 'HIPAA-minded • FHIR paths • Care UX',
  },
  {
    slug: 'manufacturing',
    title: 'Smart Manufacturing',
    icon: Factory,
    badge: 'Industry 4.0',
    desc: 'Plant dashboards, vision quality assist, machine telemetry, and supply collaboration for higher yield.',
    metrics: 'OEE • QC assist • Traceability',
  },
  {
    slug: 'retail-consumer',
    title: 'Retail & Consumer Goods',
    icon: ShoppingCart,
    badge: 'Omnichannel',
    desc: 'Headless commerce, checkout reliability, inventory truth, loyalty, and store associate tools.',
    metrics: 'Campaign scale • OMS • Returns UX',
  },
  {
    slug: 'energy-utilities',
    title: 'Energy & Utilities',
    icon: Zap,
    badge: 'Utilities',
    desc: 'Meter telemetry, outage consoles, predictive maintenance, and customer utility service portals.',
    metrics: 'IoT ingest • Outage clarity • Field apps',
  },
  {
    slug: 'oil-gas',
    title: 'Oil & Gas',
    icon: Fuel,
    badge: 'Energy',
    desc: 'Remote site monitoring, safety workflows, edge buffering, and incident evidence systems.',
    metrics: 'Edge resilience • Safety • Telemetry',
  },
  {
    slug: 'media-entertainment',
    title: 'Media & Entertainment',
    icon: Film,
    badge: 'MediaTech',
    desc: 'Streaming backends, live pipelines, catalogs, recommendations, and audience analytics.',
    metrics: 'Peak scale • Entitlements • QoE',
  },
  {
    slug: 'education',
    title: 'Education & EdTech',
    icon: GraduationCap,
    badge: 'EduTech',
    desc: 'LMS platforms, exam engines, adaptive practice, and student/faculty portals that hold under load.',
    metrics: 'Exam-day scale • Adaptive learning',
  },
  {
    slug: 'hi-tech',
    title: 'Hi Tech & Semiconductor',
    icon: Cpu,
    badge: 'Technology',
    desc: 'Developer platforms, firmware CI, release governance, and product observability for hardware-software teams.',
    metrics: 'CI/CD • Dev portals • Verification',
  },
  {
    slug: 'travel-logistics',
    title: 'Travel & Logistics',
    icon: Plane,
    badge: 'Mobility',
    desc: 'Booking engines, fleet tracking, route assist, warehouse tools, and exception management.',
    metrics: 'Booking scale • Live track • Exceptions',
  },
  {
    slug: 'private-equity',
    title: 'Private Equity & M&A',
    icon: Briefcase,
    badge: 'Private Capital',
    desc: 'Technical diligence, carve-out plans, portfolio modernization, and exit-ready documentation.',
    metrics: 'Diligence • Carve-outs • Value create',
  },
  {
    slug: 'professional-services',
    title: 'Professional Services',
    icon: Scale,
    badge: 'Legal & Services',
    desc: 'Contract assist, client vaults, matter operations, billing workflows, and knowledge search.',
    metrics: 'Document assist • Secure portals',
  },
];

export default function IndustriesPage({ onOpenModal }) {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-['DM_Sans']">
      <SEO {...pageSeo['/industries']} />
      <PageHeader
        title="Industries"
        subtitle="Sector-ready software for regulated operations, customer experience, and scale."
      />

      <section className="py-14 sm:py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {industrySectors.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.slug}
                  className="bg-white border border-slate-200 hover:border-[#004AAD]/40 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:shadow-md group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-11 w-11 rounded-xl bg-[#004AAD]/10 text-[#004AAD] flex items-center justify-center group-hover:bg-[#004AAD] group-hover:text-white transition-colors duration-200">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-full">
                        {ind.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#0f172a] group-hover:text-[#004AAD] transition-colors mb-2">
                      {ind.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {ind.desc}
                    </p>

                    <div className="text-xs text-slate-500 mb-5">
                      {ind.metrics}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={`/industries/${ind.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004AAD] hover:text-[#003B8A] transition-colors"
                    >
                      <span>Explore sector</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>

                    <button
                      type="button"
                      onClick={onOpenModal}
                      className="text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
                    >
                      Discuss project
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 px-6 sm:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mb-3">
            Need a sector-specific architecture review?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mb-7 max-w-xl mx-auto">
            Tell us your constraints — regulation, scale, legacy systems — and we will map a clean delivery path.
          </p>
          <button
            type="button"
            onClick={onOpenModal}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#004AAD] hover:bg-[#003B8A] text-white text-sm font-bold transition-all"
          >
            <span>Talk to an architect</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
