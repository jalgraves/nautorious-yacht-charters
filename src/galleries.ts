export type GalleryPhoto = {
  thumb: string;
  full: string;
};

export type GalleryInfoBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'subheading'; text: string }
  | { type: 'list'; items: string[] };

export type GalleryInfo = {
  heading: string;
  blocks: GalleryInfoBlock[];
};

export type GalleryConfig = {
  title: string;
  /** Copy block shown above the thumbnail grid */
  info: GalleryInfo;
  photos: GalleryPhoto[];
};

const AQUILA_36_NAMES = [
  'DJI_0104',
  'DJI_0105',
  'DJI_0106',
  'DJI_0107',
  'DJI_0108',
  'DSC01838',
  'DSC01841',
  'DSC01842',
  'DSC01843',
  'DSC01846',
  'DSC01847',
  'DSC01848',
  'DSC01851',
  'DSC01854',
  'DSC01855',
  'DSC01856',
  'DSC01858',
  'DSC01859',
  'DSC01862',
  'DSC01864',
  'DSC01866',
  'DSC01867',
  'DSC01868',
  'DSC01869',
  'DSC01872',
  'DSC01873',
  'DSC01875',
  'DSC01877',
  'DSC01878',
  'DSC01880',
  'DSC01884',
  'GP010862',
] as const;

const AQUILA_54_NAMES = [
  'DJI_0004',
  'DJI_0006',
  'DJI_0011',
  'DJI_0013',
  'DJI_0014',
  'DJI_0016',
  'DJI_0020',
  'DJI_0023',
  'DJI_0025',
  'DJI_0985',
  'DJI_0987',
  'DJI_0988',
  'DJI_0989',
  'DJI_0996',
  'DJI_0999',
  'DSC01600',
  'DSC01601',
  'DSC01603',
  'DSC01604',
  'DSC01606',
  'DSC01607',
  'DSC01609',
  'DSC01611',
  'DSC01612',
  'DSC01614',
  'DSC01615',
  'DSC01617',
  'DSC01618',
  'DSC01619',
  'DSC01622',
  'DSC01623',
  'DSC01624',
  'DSC01625',
  'DSC01626',
  'DSC01627',
  'DSC01629',
  'DSC01630',
  'DSC01633',
  'DSC01636',
  'DSC01639',
  'DSC01641',
  'DSC01642',
  'DSC01644',
  'DSC01645',
  'DSC01646',
  'DSC01647',
  'DSC01652',
  'DSC01653',
  'DSC01654',
  'DSC01655',
  'DSC01657',
  'DSC01663',
  'DSC01665',
  'DSC01667',
  'DSC01672',
  'DSC01674',
  'DSC01680',
  'DSC01682',
  'DSC01687',
  'DSC01691',
  'DSC01692',
  'DSC01694',
  'DSC01698',
  'DSC01704',
  'DSC01708',
  'DSC01710',
  'DSC01711',
  'DSC01712',
  'DSC01715',
] as const;

export const GALLERY_IDS = ['aquila-36', 'aquila-54'] as const;
export type GalleryId = (typeof GALLERY_IDS)[number];

export const GALLERIES: Record<GalleryId, GalleryConfig> = {
  'aquila-36': {
    title: 'Aquila 36',
    info: {
      heading: '36′ Aquila Power Catamaran',
      blocks: [
        {
          type: 'paragraph',
          text: 'Experience the water the way it was meant to be enjoyed—elevated, private, and effortlessly refined. Our 36′ Aquila Power Catamaran offers a boutique yachting experience defined by comfort, stability, and understated luxury.',
        },
        {
          type: 'paragraph',
          text: 'With its modern catamaran design, the Aquila delivers an exceptionally smooth and quiet ride, creating the ideal environment for relaxation and coastal exploration. Expansive deck space, open-air lounging areas, and thoughtfully designed seating allow guests to unwind in complete comfort while taking in panoramic waterfront views.',
        },
        { type: 'heading', text: 'The Experience' },
        {
          type: 'paragraph',
          text: 'This is not a standard boat rental—it is a curated yachting experience. Whether you are cruising along the coastline, anchoring in a secluded cove, or enjoying a golden-hour sunset on the water, every detail is designed to feel private, relaxed, and refined.',
        },
        {
          type: 'paragraph',
          text: 'The 36′ Aquila is ideal for guests who value space, privacy, and a calm, elevated atmosphere on the water. Private charters accommodate a maximum of 12 guests.',
        },
        { type: 'paragraph', text: 'Perfect for:' },
        {
          type: 'list',
          items: [
            'Luxury couple getaways',
            'Family coastal cruising',
            'Executive and client entertaining',
            'Sunset and scenic cruises',
            'Special occasion experiences',
          ],
        },
        { type: 'heading', text: 'Onboard Comfort & Features' },
        {
          type: 'list',
          items: [
            'Spacious open-concept catamaran layout',
            'Premium lounge seating and sunpads',
            'Shaded cockpit and relaxed outdoor areas',
            'High-quality Bluetooth sound system',
            'Easy and safe water access for swimming',
            'Cooler storage for refreshments',
          ],
        },
        { type: 'heading', text: 'Charter Options' },
        {
          type: 'paragraph',
          text: 'Flexible private charters tailored to your ideal day on the water:',
        },
        {
          type: 'list',
          items: [
            'Half-Day Private Cruises',
            'Full-Day Luxury Experiences',
            'Custom Itineraries Available',
            'Private charters starting at $2,000',
          ],
        },
        { type: 'heading', text: 'Why the 36′ Aquila' },
        {
          type: 'paragraph',
          text: 'The Aquila 36 stands apart for its balance of sophistication and space. Its twin-hull design provides unmatched stability and generous living areas, making it an exceptional choice for guests who prioritize comfort and a premium onboard experience over crowd-focused outings.',
        },
        { type: 'heading', text: 'Reserve Your Experience' },
        {
          type: 'paragraph',
          text: 'Private availability is limited to ensure each charter remains exclusive and highly personalized. Advance reservations are strongly recommended.',
        },
      ],
    },
    photos: AQUILA_36_NAMES.map((name) => ({
      thumb: `/aquila-36/${name}-thumb.webp`,
      full: `/aquila-36/${name}.webp`,
    })),
  },
  'aquila-54': {
    title: 'Aquila 54',
    info: {
      heading: '54′ Aquila Power Catamaran',
      blocks: [
        {
          type: 'paragraph',
          text: "Explore the water with more space, more comfort, and more freedom aboard our 54′ Aquila Power Catamaran. Designed for smooth cruising and effortless entertaining, this yacht is built for full-day experiences and multi-destination charters across South Florida and beyond.",
        },
        {
          type: 'paragraph',
          text: 'Based in Miami, with itineraries available to the Florida Keys and the Bahamas, this vessel offers the versatility to turn any day on the water into a true escape.',
        },
        { type: 'heading', text: 'Destinations' },
        { type: 'subheading', text: 'Miami' },
        {
          type: 'paragraph',
          text: 'Cruise Biscayne Bay, glide past the Miami skyline, or anchor at sandbars and waterfront hotspots. Miami is the perfect starting point for vibrant day trips and sunset cruises with a luxury backdrop.',
        },
        { type: 'subheading', text: 'Key West' },
        {
          type: 'paragraph',
          text: 'Head south through the turquoise waters of the Florida Keys for an unforgettable coastal run. Enjoy island-hopping, reef views, and laid-back anchoring in one of the most iconic boating destinations in the U.S.',
        },
        { type: 'subheading', text: 'The Bahamas' },
        {
          type: 'paragraph',
          text: 'For guests looking to go further, the 54′ Aquila is ideal for private cross-water escapes to the Bahamas. Spend the day exploring clear waters, secluded beaches, and quiet anchorages that feel a world away from the mainland.',
        },
        { type: 'heading', text: 'The Experience' },
        {
          type: 'paragraph',
          text: 'The 54′ Aquila is built for comfort at scale. Its wide, open layout gives guests the space to move freely, relax together, or find their own quiet corner while still enjoying the full experience onboard. Private charters welcome a maximum of 12 guests.',
        },
        {
          type: 'paragraph',
          text: 'Smooth cruising, generous seating areas, and a stable catamaran platform make long-range trips feel easy and enjoyable—whether you’re staying local or heading offshore.',
        },
        { type: 'paragraph', text: 'Perfect for:' },
        {
          type: 'list',
          items: [
            'Multi-destination yacht days',
            'Private luxury getaways',
            'Family and group charters',
            'Special occasions and celebrations',
            'Extended cruising itineraries',
          ],
        },
        { type: 'heading', text: 'Onboard Features' },
        {
          type: 'list',
          items: [
            'Expansive indoor-outdoor lounge layout',
            'Large bow sunpad and aft seating area',
            'Air-conditioned interior salon (select layouts)',
            'Premium Bluetooth sound system',
            'Full galley and refreshment space',
            'Easy water access for swimming and snorkeling',
          ],
        },
        { type: 'heading', text: 'Charter Options' },
        {
          type: 'list',
          items: [
            'Half-Day Miami Cruises',
            'Full-Day Local Charters',
            'Custom Key West Itineraries',
            'Bahamas Day or Multi-Day Trips (weather and planning dependent)',
            'Private charters starting at $3,000 (seasonal pricing available)',
          ],
        },
        { type: 'heading', text: 'Book Your Charter' },
        {
          type: 'paragraph',
          text: 'Every trip is private and customized based on your preferred destination, timing, and experience level. Availability for Key West and Bahamas runs are limited and require advance planning.',
        },
      ],
    },
    photos: AQUILA_54_NAMES.map((name) => ({
      thumb: `/aquila-54/${name}-thumb.webp`,
      full: `/aquila-54/${name}.webp`,
    })),
  },
};

export function isGalleryId(id: string): id is GalleryId {
  return (GALLERY_IDS as readonly string[]).includes(id);
}
