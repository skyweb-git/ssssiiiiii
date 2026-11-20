import React from 'react';
import PageHeader from '../components/PageHeader';
import { ArrowRight } from 'lucide-react';
import { processSteps } from '../data/siteData';

export default function ProcessPage({ onOpenModal }) {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-['DM_Sans']">
      <PageHeader
        title="How We Work"
        subtitle="A clear path from discovery to production — less rework, more predictable delivery."
      />

      <section className="py-14 sm:py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto space-y-4 sm:space-y-5">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-start rounded-2xl border border-slate-200 bg-white p-5 sm:p-7"
            >
              <div className="lg:col-span-3">
                <div className="text-xs font-bold text-[#004AAD] mb-2">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 mt-1">{step.desc}</p>
              </div>

              <div className="lg:col-span-9">
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {step.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 sm:py-16 px-6 sm:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">
              Delivery habits
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Practices that keep quality high as the system grows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200">
              <h3 className="text-base font-bold text-slate-900 mb-2">CI / CD</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Automated checks, staging reviews, and controlled production releases.
              </p>
            </div>
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200">
              <h3 className="text-base font-bold text-slate-900 mb-2">Security</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Access control, encrypted secrets, and dependency scanning as defaults.
              </p>
            </div>
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200">
              <h3 className="text-base font-bold text-slate-900 mb-2">Ownership</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Clear docs, repository access, and handover so your team can run what we build.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={onOpenModal}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#004AAD] hover:bg-[#003B8A] text-white text-sm font-bold transition-all"
            >
              <span>Start a project conversation</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
