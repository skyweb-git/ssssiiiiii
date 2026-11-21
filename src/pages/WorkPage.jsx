import React from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import { pageSeo } from '../data/seoData';
import { ArrowUpRight, Layers, ShoppingBag, Palette } from 'lucide-react';
import { projects } from '../data/siteData';

export default function WorkPage({ onOpenModal }) {
  return (
    <div>
      <SEO {...pageSeo['/work']} />
      <PageHeader
        title="Our Work"
        subtitle="Products, platforms, and systems we have delivered for clients across markets."
      />

      <section className="py-14 sm:py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-14">
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
                      className="px-4 py-2 rounded-full bg-[#004AAD] text-white text-xs font-semibold cursor-pointer"
                    >
                      Discuss
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-10 sm:pt-12 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 sm:mb-8 font-['DM_Sans'] tracking-tight">
              Case studies
            </h2>

            <div className="space-y-5 sm:space-y-6">
              {projects.map((proj) => (
                <div key={proj.id} className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <div>
                      <span className="text-xs font-bold text-[#004AAD] block mb-1">
                        {proj.category}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-['DM_Sans'] tracking-tight">
                        {proj.title}
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={onOpenModal}
                      className="px-5 py-2.5 rounded-full bg-[#004AAD] hover:bg-[#003B8A] text-white text-sm font-bold transition-colors"
                    >
                      Build similar
                    </button>
                  </div>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5 max-w-3xl">
                    {proj.fullDesc || proj.desc}
                  </p>

                  {proj.deliverables && (
                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                        Deliverables
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {proj.deliverables.map((deliv, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-2.5 text-sm text-slate-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#004AAD] shrink-0" />
                            <span>{deliv}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 px-6 sm:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 font-['DM_Sans'] tracking-tight text-slate-900">
            Build what is next
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-7">
            Share your requirements — we will map a clear architecture and next steps.
          </p>
          <button
            type="button"
            onClick={onOpenModal}
            className="px-7 py-3 rounded-full bg-[#004AAD] hover:bg-[#003B8A] text-white text-sm font-bold transition-colors"
          >
            Start a project
          </button>
        </div>
      </section>
    </div>
  );
}
