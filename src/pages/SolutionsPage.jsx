import React from 'react';
import PageHeader from '../components/PageHeader';
import { solutions } from '../data/siteData';

export default function SolutionsPage({ onOpenModal }) {
  return (
    <div>
      <PageHeader
        title="Solutions"
        subtitle="End-to-end technology for operations, products, and growth — without the fluff."
      />

      <section className="py-14 sm:py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-5 sm:space-y-6">
            {solutions.map((item, idx) => (
              <div
                key={item.id}
                id={item.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white hover:border-[#004AAD]/40 transition-all"
              >
                <div className="lg:col-span-5">
                  <div className="text-xs font-bold text-[#004AAD] mb-2">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 font-['DM_Sans'] tracking-tight">
                    {item.title}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3">
                    {item.desc}
                  </p>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5">
                    {item.details}
                  </p>
                  <button
                    type="button"
                    onClick={onOpenModal}
                    className="px-5 py-2.5 rounded-full bg-[#004AAD] hover:bg-[#003B8A] text-white text-sm font-bold transition-colors"
                  >
                    Discuss {item.title}
                  </button>
                </div>

                <div className="lg:col-span-7 bg-slate-50 p-5 sm:p-6 rounded-xl border border-slate-200">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                    Deliverables
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#004AAD] mt-2 shrink-0" />
                        <span className="text-sm text-slate-700 leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 px-6 sm:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 font-['DM_Sans'] tracking-tight text-slate-900">
            Have a solution in mind?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-7">
            Share your constraints — we will map architecture, milestones, and a clear estimate.
          </p>
          <button
            type="button"
            onClick={onOpenModal}
            className="px-7 py-3 rounded-full bg-[#004AAD] hover:bg-[#003B8A] text-white text-sm font-bold transition-colors"
          >
            Talk to us
          </button>
        </div>
      </section>
    </div>
  );
}
