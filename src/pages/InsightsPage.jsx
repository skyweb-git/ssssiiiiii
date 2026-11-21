import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Clock, Calendar, Search, ExternalLink } from 'lucide-react';
import { insightsArticles } from '../data/insightsArticles';
import SEO from '../components/SEO';
import { pageSeo } from '../data/seoData';

export default function InsightsPage({ onOpenModal }) {
  const [searchQuery, setSearchQuery] = useState('');

  const newsArticles = useMemo(() => {
    return insightsArticles.filter((article) => article.isNews || article.category === 'News & Press');
  }, []);

  const filteredArticles = useMemo(() => {
    return insightsArticles.filter((article) => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        article.title.toLowerCase().includes(q) ||
        (article.description && article.description.toLowerCase().includes(q)) ||
        (article.subtitle && article.subtitle.toLowerCase().includes(q)) ||
        (article.category && article.category.toLowerCase().includes(q))
      );
    });
  }, [searchQuery]);

  const featuredArticle = insightsArticles[0]; // Flagship

  return (
    <div className="min-h-screen bg-[#fafbfc] text-slate-900 font-['DM_Sans']">
      <SEO {...pageSeo['/insights']} />
      {/* ================= HERO HEADER ================= */}
      <header className="relative px-5 sm:px-8 pt-24 md:pt-40 pb-10 md:pb-16 bg-black text-white overflow-hidden border-b border-slate-800">
        <div className="relative max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.12] text-blue-500 max-w-3xl">
            Insights &amp; News
          </h1>

          <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-blue-100/90 font-normal">
            Engineering notes, press coverage, and practical perspectives from SkyWeb.
          </p>
        </div>
      </header>

      {/* ================= SEARCH BAR ONLY ================= */}
      <section className="py-4 px-6 sm:px-8 border-b border-slate-200/80 bg-white shadow-xs">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 hidden sm:inline">
            Insights, Practice Papers & Official Press
          </span>
          <div className="relative w-full sm:w-72 sm:ml-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles & news..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 text-xs rounded-full border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#004AAD] transition-all"
            />
          </div>
        </div>
      </section>

      {/* ================= DEDICATED NEWS & PRESS COVERAGE COLUMN / SECTION ================= */}
      {!searchQuery && (
        <section className="pt-6 pb-9 sm:pt-8 sm:pb-10 px-6 sm:px-8 bg-slate-50/60 border-b border-slate-200/70">
          <div className="max-w-6xl mx-auto">
            <div className="mb-5 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] leading-tight tracking-tight">
                Latest press
              </h2>
            </div>

            {/* 3-Column News Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {newsArticles.map((item) => (
                <article
                  key={item.slug}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-lg hover:border-[#004AAD]/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="h-40 sm:h-44 overflow-hidden bg-slate-100 border-b border-slate-100 relative">
                      <img
                        src={item.image}
                        alt={item.imageAlt}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-6 sm:p-7">
                      <div className="flex items-center gap-2 text-xs text-slate-400 mb-2.5 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{item.publishedDate}</span>
                        <span>•</span>
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{item.readTime}</span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-[#0f172a] leading-snug mb-2.5 group-hover:text-[#004AAD] transition-colors">
                        <Link to={`/insights/${item.slug}`}>
                          {item.title}
                        </Link>
                      </h3>

                      <p className="text-xs font-semibold text-slate-700 mb-3">
                        {item.subtitle}
                      </p>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                    <Link
                      to={`/insights/${item.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004AAD] hover:text-[#003B8A] transition-colors"
                    >
                      <span>Read Full Story</span>
                      <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </Link>

                    {item.externalSource && (
                      <a
                        href={item.externalSource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 hover:text-[#004AAD] transition-colors"
                      >
                        <span>The Hans India</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {item.pressClippings && (
                      <span className="text-[11px] text-slate-500 font-semibold">
                        5 Newspaper Clippings (incl. Sakshi)
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= FEATURED LEAD EDITORIAL (Shown when no search) ================= */}
      {!searchQuery && featuredArticle && (
        <section className="py-10 px-6 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-all group">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Left: Image */}
                <div className="lg:col-span-5 relative h-48 sm:h-56 lg:h-full lg:min-h-[240px] lg:max-h-[300px] overflow-hidden bg-slate-100">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-3 font-semibold uppercase tracking-wider">
                      <span className="text-[#004AAD] font-bold">{featuredArticle.category}</span>
                      <span>•</span>
                      <span>{featuredArticle.readTime}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] leading-tight mb-3 group-hover:text-[#004AAD] transition-colors">
                      <Link to={`/insights/${featuredArticle.slug}`}>
                        {featuredArticle.title}
                      </Link>
                    </h2>

                    <p className="text-sm font-semibold text-slate-700 mb-3">
                      {featuredArticle.subtitle}
                    </p>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-4">
                      {featuredArticle.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={`/insights/${featuredArticle.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#004AAD] hover:bg-[#003B8A] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm group-hover:shadow"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <span className="text-[11px] text-slate-400 font-medium">Client Spotlight: ArtArtist</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= ARTICLES & NEWS GRID ================= */}
      <section className="py-10 sm:py-14 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0f172a]">
                {searchQuery ? `Search Results for "${searchQuery}"` : 'All Technology Articles & Perspectives'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Showing {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'} in this collection
              </p>
            </div>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs font-bold text-[#004AAD] hover:underline cursor-pointer"
              >
                Clear Search
              </button>
            )}
          </div>

          {filteredArticles.length === 0 ? (
            <div className="py-16 text-center bg-white rounded-2xl border border-slate-200">
              <p className="text-slate-500 text-sm">No insights found matching your search.</p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-3 text-xs font-bold text-[#004AAD] hover:underline"
              >
                Clear search and view all
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredArticles.map((article) => (
                <article
                  key={article.slug}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white flex flex-col group hover:shadow-xl hover:border-[#004AAD]/30 transition-all duration-300"
                >
                  <Link
                    to={`/insights/${article.slug}`}
                    className="block h-36 sm:h-40 overflow-hidden bg-slate-100 border-b border-slate-100 relative"
                    aria-label={`Read ${article.title}`}
                  >
                    <img
                      src={article.image}
                      alt={article.imageAlt}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>

                  <div className="p-6 sm:p-7 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-2.5 font-medium">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        {article.publishedDate || 'October 2026'}
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1 text-slate-500">
                        <Clock className="w-3 h-3 text-slate-400" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#0f172a] leading-snug mb-2 group-hover:text-[#004AAD] transition-colors">
                      <Link to={`/insights/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>

                    <p className="text-xs font-semibold text-slate-700 mb-2.5 line-clamp-1">
                      {article.subtitle}
                    </p>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                      {article.description}
                    </p>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                      <Link
                        to={`/insights/${article.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004AAD] hover:text-[#003B8A] transition-colors"
                      >
                        <span>{article.isNews ? 'Read News' : 'Read Article'}</span>
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                        {article.isNews ? 'Press Coverage' : 'Enterprise Insight'}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-14 sm:py-16 px-6 sm:px-8 bg-slate-50 border-t border-slate-200 mt-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight tracking-tight">
            Planning a technology initiative?
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Software, cloud, AI, or campus programs — tell us what you are building.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={onOpenModal}
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#004AAD] hover:bg-[#003B8A] text-white font-bold text-sm transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Talk to us</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <Link
              to="/capabilities"
              className="w-full sm:w-auto px-6 py-3 rounded-full border border-slate-300 hover:border-slate-400 text-slate-800 font-bold text-sm transition-all inline-flex items-center justify-center"
            >
              Capabilities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
