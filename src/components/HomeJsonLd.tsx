import { Helmet } from 'react-helmet-async';
import { SITE_URL } from '@/config/site';

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: 'Nautorious Charters',
  url: SITE_URL,
  description:
    'Private luxury Aquila power catamaran charters in Miami, the Florida Keys, the Bahamas, and Florida’s Gulf Coast.',
  areaServed: [
    { '@type': 'City', name: 'Miami', containedInPlace: { '@type': 'State', name: 'Florida' } },
    { '@type': 'AdministrativeArea', name: 'Florida Keys' },
    { '@type': 'Country', name: 'The Bahamas' },
    { '@type': 'City', name: 'St. Petersburg', containedInPlace: { '@type': 'State', name: 'Florida' } },
    { '@type': 'AdministrativeArea', name: 'Tampa Bay' },
  ],
  priceRange: '$$$',
} as const;

/** Structured data for the home page only */
function HomeJsonLd() {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(JSON_LD)}</script>
    </Helmet>
  );
}

export default HomeJsonLd;
