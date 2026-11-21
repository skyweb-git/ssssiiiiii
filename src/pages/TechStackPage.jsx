import React from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import { pageSeo } from '../data/seoData';
import { techCategories } from '../data/siteData';
import TechStackShowcase from '../components/TechStackShowcase';

export default function TechStackPage({ onOpenModal }) {
  return (
    <div>
      <SEO {...pageSeo['/tech-stack']} />
      <PageHeader
        title="Tech Stack"
        subtitle="Frameworks, cloud, databases, and AI toolchains we use to ship reliable systems."
      />

      <section className="py-14 sm:py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 font-['DM_Sans'] tracking-tight">
              By category
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {techCategories.map((cat, idx) => (
                <div key={idx} className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white">
                  <h3 className="text-base font-bold text-slate-900 mb-4 font-['DM_Sans']">
                    {cat.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item, iIdx) => (
                      <span
                        key={iIdx}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-50 border border-slate-200 text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="py-4">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1.5 font-['DM_Sans'] tracking-tight">
                Stack explorer
              </h3>
              <p className="text-sm text-slate-500">
                Browse the tools and libraries we use most often.
              </p>
            </div>
            <TechStackShowcase />
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 px-6 sm:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 font-['DM_Sans'] tracking-tight text-slate-900">
            Tools follow the problem
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-7">
            We pick databases, frameworks, and cloud based on data volume, concurrency, latency, and budget — not trends.
          </p>
          <button
            type="button"
            onClick={onOpenModal}
            className="px-7 py-3 rounded-full bg-[#004AAD] hover:bg-[#003B8A] text-white text-sm font-bold transition-colors"
          >
            Discuss your stack
          </button>
        </div>
      </section>
    </div>
  );
}
