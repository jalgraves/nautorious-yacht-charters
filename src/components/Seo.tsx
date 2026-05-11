import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import {
  SITE_URL,
  absoluteUrl,
  DEFAULT_OG_IMAGE_PATH,
} from '@/config/site';

const BRAND = 'Nautorious Charters';

const DEFAULT_DESCRIPTION =
  'Luxury Aquila power catamaran charters in Miami, the Florida Keys, the Bahamas, and Florida’s Gulf Coast. Private day charters and multi-destination experiences.';

type PageMeta = {
  title: string;
  description: string;
  noindex?: boolean;
};

function normalizePathname(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1);
  }
  return pathname || '/';
}

function isIndexedPath(path: string): boolean {
  if (path === '/') return true;
  if (path === '/booking' || path === '/about') return true;
  if (path === '/gallery') return true;
  if (path === '/gallery/aquila-36' || path === '/gallery/aquila-54') return true;
  return false;
}

function getPageMeta(path: string): PageMeta {
  if (!isIndexedPath(path)) {
    return {
      title: `Page not found | ${BRAND}`,
      description: DEFAULT_DESCRIPTION,
      noindex: true,
    };
  }

  switch (path) {
    case '/':
      return {
        title: `${BRAND} — Luxury yacht & catamaran charters`,
        description: DEFAULT_DESCRIPTION,
      };
    case '/booking':
      return {
        title: `Book a charter | ${BRAND}`,
        description:
          'Reserve a private Aquila catamaran charter in Miami or the Gulf Coast. Half-day, full-day, and custom itineraries.',
      };
    case '/about':
      return {
        title: `About | ${BRAND}`,
        description:
          'Learn about Nautorious Charters — private luxury catamaran experiences across South Florida and beyond.',
      };
    case '/gallery':
      return {
        title: `Photo galleries | ${BRAND}`,
        description:
          'Browse photo galleries for our Aquila 36 and Aquila 54 power catamarans — deck layouts, interiors, and on-water moments.',
      };
    case '/gallery/aquila-36':
      return {
        title: `Aquila 36 gallery | ${BRAND}`,
        description:
          'Photos of our 36′ Aquila Power Catamaran — boutique private charters, spacious twin-hull layout, Miami and Gulf Coast itineraries.',
      };
    case '/gallery/aquila-54':
      return {
        title: `Aquila 54 gallery | ${BRAND}`,
        description:
          'Photos of our 54′ Aquila Power Catamaran — luxury group charters, Miami, Florida Keys, and Bahamas itineraries.',
      };
    default:
      return {
        title: BRAND,
        description: DEFAULT_DESCRIPTION,
      };
  }
}

function Seo() {
  const { pathname } = useLocation();
  const path = normalizePathname(pathname);
  const { title, description, noindex } = getPageMeta(path);
  const canonical =
    path === '/' ? SITE_URL : `${SITE_URL}${path}`;
  const ogImage = absoluteUrl(DEFAULT_OG_IMAGE_PATH);

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <link rel="canonical" href={canonical} />

      <meta property="og:site_name" content={BRAND} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content="Nautorious Charters on the water" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}

export default Seo;
