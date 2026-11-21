import { Helmet } from 'react-helmet-async';
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  DEFAULT_TWITTER_IMAGE,
  DEFAULT_KEYWORDS,
  defaultSeo,
} from '../data/seoData';

/**
 * SEO head manager powered by react-helmet-async.
 * Sets title, description, keywords, canonical, Open Graph, Twitter, and JSON-LD.
 */
export default function SEO({
  title = defaultSeo.title,
  description = defaultSeo.description,
  keywords = DEFAULT_KEYWORDS,
  path = '/',
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  noindex = false,
  jsonLd = null,
}) {
  const absoluteUrl = path.startsWith('http')
    ? path
    : `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
  const imageUrl = image?.startsWith('http') ? image : `${SITE_URL}${image || ''}`;
  const fullTitle = title.includes('SkyWeb') ? title : `${title} | ${SITE_NAME}`;
  const robots = noindex
    ? 'noindex, nofollow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  const pageJsonLd = jsonLd
    ? {
        '@context': 'https://schema.org',
        ...jsonLd,
        url: jsonLd.url || absoluteUrl,
        name: jsonLd.name || fullTitle,
        description: jsonLd.description || description,
      }
    : {
        '@context': 'https://schema.org',
        '@type': type === 'article' ? 'Article' : 'WebPage',
        name: fullTitle,
        description,
        url: absoluteUrl,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        publisher: { '@id': `${SITE_URL}/#organization` },
        primaryImageOfPage: imageUrl
          ? { '@type': 'ImageObject', url: imageUrl }
          : undefined,
      };

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en" />
      <title>{fullTitle}</title>

      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={robots} />
      <meta name="author" content="SkyWeb Private Limited / SkyWeb International" />
      <meta name="publisher" content="SkyWeb Private Limited" />
      <meta name="application-name" content={SITE_NAME} />

      <link rel="canonical" href={absoluteUrl} />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content={absoluteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl || DEFAULT_OG_IMAGE} />
      <meta property="og:image:alt" content={`${SITE_NAME} — ${fullTitle}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={absoluteUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl || DEFAULT_TWITTER_IMAGE} />

      <script type="application/ld+json">{JSON.stringify(pageJsonLd)}</script>
    </Helmet>
  );
}
