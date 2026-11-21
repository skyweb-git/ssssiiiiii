export const SITE_URL = 'https://skywebit.com';
export const SITE_NAME = 'SkyWeb International';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/logo512.png`;
export const DEFAULT_TWITTER_IMAGE = DEFAULT_OG_IMAGE;

export const DEFAULT_KEYWORDS = [
  'SkyWeb',
  'SkyWeb International',
  'website development company',
  'web design',
  'custom website development',
  'software development company',
  'custom software development',
  'AI solutions',
  'machine learning',
  'cloud infrastructure',
  'mobile app development',
  'React development',
  'full stack development',
  'digital transformation',
  'SaaS product engineering',
  'UI UX design',
  'enterprise software',
  'IT company Hyderabad',
  'web development India',
  'e-commerce website development',
  'business websites',
  'corporate websites',
].join(', ');

export const defaultSeo = {
  title: 'SkyWeb International | Website Development, Software, AI & Cloud Solutions',
  description:
    'SkyWeb International builds websites, custom software, AI solutions, cloud infrastructure, mobile apps, and digital platforms for businesses worldwide. Enterprise engineering from Hyderabad with global delivery.',
  keywords: DEFAULT_KEYWORDS,
  path: '/',
  type: 'website',
  image: DEFAULT_OG_IMAGE,
};

/** Page-level SEO presets keyed by route path */
export const pageSeo = {
  '/': {
    ...defaultSeo,
    jsonLd: {
      '@type': 'WebPage',
      name: defaultSeo.title,
      description: defaultSeo.description,
      url: `${SITE_URL}/`,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
    },
  },
  '/about': {
    title: 'About SkyWeb International | Website & Software Engineering Company',
    description:
      'Learn about SkyWeb International — a technology company that builds websites, software, AI systems, and cloud platforms for enterprises across India, EMEA, and Asia.',
    keywords: `${DEFAULT_KEYWORDS}, about SkyWeb, SkyWeb IT Solutions, technology company Hyderabad`,
    path: '/about',
  },
  '/capabilities': {
    title: 'Capabilities | Website, Software, AI & Cloud Services | SkyWeb',
    description:
      'Explore SkyWeb capabilities: website development, custom software, AI & machine learning, cloud infrastructure, mobile apps, UI/UX, and digital product engineering.',
    keywords: `${DEFAULT_KEYWORDS}, software engineering services, application services, cloud services`,
    path: '/capabilities',
  },
  '/industries': {
    title: 'Industries We Serve | Banking, Retail, Healthcare & More | SkyWeb',
    description:
      'SkyWeb delivers websites, software, and digital platforms for banking, fintech, retail, healthcare, telecom, energy, travel, and public sector organizations.',
    keywords: `${DEFAULT_KEYWORDS}, industry solutions, fintech software, healthcare software`,
    path: '/industries',
  },
  '/insights': {
    title: 'Insights & News | Engineering Perspectives | SkyWeb International',
    description:
      'Technology insights from SkyWeb International — software engineering, AI adoption, cloud infrastructure, digital platforms, and business technology strategy.',
    keywords: `${DEFAULT_KEYWORDS}, tech blog, AI insights, digital transformation articles`,
    path: '/insights',
  },
  '/careers': {
    title: 'Careers at SkyWeb | Join Our Engineering Teams',
    description:
      'Build websites, software, and AI products with SkyWeb International. Explore careers for engineers, designers, and technologists across India and international hubs.',
    keywords: `${DEFAULT_KEYWORDS}, SkyWeb careers, software engineer jobs Hyderabad`,
    path: '/careers',
  },
  '/contact': {
    title: 'Contact SkyWeb International | Start Your Website or Software Project',
    description:
      'Contact SkyWeb International to build your website, software product, AI solution, or cloud platform. Call +91 9121428210 or +27 81 343 5207, or email offical@skywebinternational.com.',
    keywords: `${DEFAULT_KEYWORDS}, contact SkyWeb, hire web developers, hire software company`,
    path: '/contact',
  },
  '/process': {
    title: 'Our Process | How SkyWeb Builds Websites & Software',
    description:
      'See how SkyWeb International discovers, designs, builds, and scales websites, software systems, and digital products with transparent engineering process.',
    keywords: `${DEFAULT_KEYWORDS}, software development process, agile delivery`,
    path: '/process',
  },
  '/tech-stack': {
    title: 'Technology Stack | React, Cloud, AI Tools We Use | SkyWeb',
    description:
      'SkyWeb builds with modern stacks — React, Node.js, Python, cloud platforms, and AI tooling — to deliver reliable websites and enterprise software.',
    keywords: `${DEFAULT_KEYWORDS}, tech stack, React Node Python AWS`,
    path: '/tech-stack',
  },
  '/work': {
    title: 'Our Work | Websites & Digital Products Built by SkyWeb',
    description:
      'Browse selected SkyWeb projects — business websites, digital platforms, and software products engineered for real-world scale and reliability.',
    keywords: `${DEFAULT_KEYWORDS}, portfolio, case studies, web projects`,
    path: '/work',
  },
  '/services': {
    title: 'Services | Website Development & Digital Engineering | SkyWeb',
    description:
      'SkyWeb services include website development, custom software, AI automation, cloud architecture, mobile apps, and ongoing digital product support.',
    keywords: DEFAULT_KEYWORDS,
    path: '/services',
  },
};

/**
 * Build SEO props for dynamic subpages from pageData.
 */
export function buildSubpageSeo({ category, slug, pageData }) {
  const path = `/${category}/${slug}`;
  const titleBase = pageData?.title || slug;
  const description =
    pageData?.description ||
    pageData?.subtitle ||
    `Explore ${titleBase} from SkyWeb International — website development, software engineering, AI, and cloud solutions.`;

  return {
    title: `${titleBase} | SkyWeb International`,
    description: String(description).slice(0, 320),
    keywords: `${DEFAULT_KEYWORDS}, ${titleBase}, ${category}`,
    path,
    image: pageData?.heroImage || DEFAULT_OG_IMAGE,
    type: 'article',
  };
}
