import React from 'react';

export default function PageHeader({ title, subtitle, bgImage }) {
  return (
    <section className="bg-black text-white pt-24 md:pt-36 pb-12 md:pb-16 px-5 sm:px-8 border-b border-slate-800 relative overflow-hidden">
      {bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${bgImage})` }}
          aria-hidden="true"
        />
      )}

      <div className="max-w-6xl mx-auto relative z-10">
        <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-blue-500 max-w-3xl leading-[1.15] mb-4 font-['DM_Sans']">
          {title}
        </h1>

        {subtitle && (
          <p className="text-sm sm:text-base text-blue-100/90 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
