import React from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import { pageSeo } from '../data/seoData';
import { provisions } from '../data/siteData';

export default function ServicesPage({ onOpenModal }) {
  return (
    <div>
      <SEO {...pageSeo['/services']} />
      <PageHeader
        title="Services"
        subtitle="Systems, software, and digital infrastructure to build, operate, and scale."
      />

      <section className="py-14 sm:py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {provisions.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#004AAD]/40 hover:shadow-md transition-all duration-200 group"
              >
                {item.image && (
                  <div className="relative h-40 w-full overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  </div>
                )}

                <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 font-['DM_Sans'] group-hover:text-[#004AAD] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {item.desc}
                    </p>

                    <div className="space-y-1.5 mb-5">
                      {item.highlights && item.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2 text-xs font-medium text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#004AAD] shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={onOpenModal}
                    className="w-full py-2.5 px-4 rounded-full text-sm font-bold bg-[#004AAD] hover:bg-[#003B8A] text-white transition-colors"
                  >
                    Discuss this service
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 px-6 sm:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="bg-black text-white rounded-2xl p-8 sm:p-10 lg:p-12">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 font-['DM_Sans'] tracking-tight">
                Reliable delivery, end to end
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-7">
                Squad augmentation or full project ownership — documented code, tests, and continuous delivery.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={onOpenModal}
                  className="px-6 py-2.5 rounded-full bg-[#004AAD] hover:bg-[#003B8A] text-white text-sm font-bold transition-colors"
                >
                  Talk to us
                </button>
                <a
                  href="mailto:offical@skywebinternational.com"
                  className="px-5 py-2.5 rounded-full border border-slate-700 text-blue-200 hover:text-white text-sm font-bold transition-colors"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
