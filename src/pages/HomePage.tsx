import { Link } from 'react-router-dom';
import logo from '@/assets/nautorious-charters.webp';
import HomeJsonLd from '@/components/HomeJsonLd';
import styles from './HomePage.module.css';

/** Shown beneath the hero logo (over the header video). Edit this string to change the header description. */
const HERO_DESCRIPTION = "Florida's most unforgettable on the water experiences";

const DESTINATIONS = [
  {
    title: 'The Bahamas',
    description:
      'Crystal water, pink-sand coves, and island hopping at your pace — ideal for extended getaways and passport-stamp bragging rights.',
    imageSrc: '/destinations/bahamas-1.jpg',
    to: '/gallery/aquila-54',
  },
  {
    title: 'Key West',
    description:
      'Mallory sunsets, reef colors, and that laid-back Conch Republic energy — a legendary run down the Keys with the Gulf on your shoulder.',
    imageSrc: '/destinations/key-west-1.jpg',
    to: '/gallery/aquila-54',
  },
  {
    title: 'Miami',
    description:
      "Skyline glow, Biscayne chop, and sandbar Sundays — the home court for Nautorious' Aquila 56, where the party and the postcard share the same wake.",
    imageSrc: '/destinations/miami.jpg',
    to: '/gallery/aquila-54',
  },
  {
    title: 'St. Petersburg',
    description:
      'Gulf breezes, sugar-sand bars, and artsy waterfront nights — Florida’s west-coast gem for mellow days that still feel electric.',
    imageSrc: '/destinations/st-pete-beach.jpg',
    to: '/gallery/aquila-36',
  },
  {
    title: 'Tampa Bay',
    description:
      'Wide open water, city lights across the horizon, and room to roam — perfect for big-sky cruises and crew-sized celebrations.',
    imageSrc: '/destinations/tampa-bay.jpg',
    to: '/gallery/aquila-36',
  },
] as const;

const EXPERIENCES = [
  {
    title: 'Sunset Cruises',
    description:
      'Golden-hour runs with skyline glow, champagne-ready decks, and the kind of light that turns every photo into a keepsake.',
    imageSrc: '/experiences/sunset-cruises.jpg',
    to: '/gallery',
  },
  {
    title: 'Sandbars & Reefs',
    description:
      'Anchor in waist-deep turquoise, snorkel glassy coves, and spend the afternoon where the only schedule is the tide.',
    imageSrc: '/experiences/sandbars-and-reefs.jpg',
    to: '/gallery',
  },
  {
    title: 'Bachelorette Parties',
    description:
      'Your crew, your playlist, your rules — a private floating celebration built for stories worth retelling Monday morning.',
    imageSrc: '/experiences/bachelorette-parites.jpg',
    to: '/gallery',
  },
  {
    title: 'Company Outings',
    description:
      'Impress clients or reward the team with open water, room to mingle, and a venue that beats any conference room.',
    imageSrc: '/experiences/company-outing.jpg',
    to: '/gallery',
  },
  {
    title: 'Memorable Celebrations',
    description:
      'Birthdays, anniversaries, proposals, and milestone moments — mark the occasion on the water with a private charter built around your guest list.',
    imageSrc: '/experiences/memorable-celebrations.JPG',
    to: '/gallery',
  },
] as const;

const FLEET = [
  {
    title: 'Aquila 36',
    description:
      "Our 36ft. luxury catamaran based out of St. Pete Beach's Treasure Island with private experiences starting at $2000 — maximum 12 guests. Click for more details",
    imageSrc: '/aquila-36/DJI_0108.webp',
    to: '/gallery/aquila-36',
  },
  {
    title: 'Aquila 54',
    description:
      "Our 54ft. luxury catamaran based out of Miami — stretch-out lounges, serious range for Keys and Bahamas hops, and the kind of deck flow that keeps milestones, mixers, and long-weekend escapes effortless. Private experiences starting at $3000 — maximum 12 guests. Click for more details",
    imageSrc: '/aquila-54/DJI_0006.webp',
    to: '/gallery/aquila-54',
  },
] as const;

function HomePage() {
  return (
    <div className={styles.page}>
      <HomeJsonLd />
      <div className={styles.logoContainer}>
        <video
          className={styles.heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
        >
          <source src="/aquila-54-background.webm" type="video/webm" />
          <source src="/aquila-54-background.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroVideoOverlay} aria-hidden="true" />
        <img
          src={logo}
          alt="Nautorious Yacht Charters"
          className={styles.heroLogo}
        />
        <div className={styles.heroText}>
          <p className={styles.heroDescription}>
            {HERO_DESCRIPTION}
          </p>
          <p className={styles.heroSubtitle}>
            Luxury Aquila Yacht Charters in Florida &amp; The Bahamas
          </p>
          <p className={styles.headerDescription}>
            Experience the water the way it should be—comfortable, private, and effortlessly elevated. Our fleet of 36’ and 54’ Aquila Power Catamarans offers premium yacht charters designed for smooth cruising, spacious lounging, and unforgettable days on the water.
          </p>
        </div>
      </div>
      <section className={styles.videoSection}>
        <p className={styles.sectionDescription}>
        Based in Florida and operating across St. Petersburg, Miami, Key West, and the Bahamas, we provide flexible private charters ranging from relaxed coastal cruises to full-day and multi-destination offshore adventures.
        </p>
        {/* <p className={styles.sectionDescription}>
        <strong>The bay is calling. Answer Nautoriously</strong>. Book your Nautorious charter today — and become the legend everyone's talking about Monday morning
        </p> */}

        <section className={styles.destinationsSection} aria-labelledby="destinations-heading">
          <h2 id="destinations-heading" className={styles.videoHeading}>
            DESTINATIONS
          </h2>
          <div className={styles.destinationsGrid}>
            {DESTINATIONS.map(({ title, description, imageSrc, to }) => (
              <Link
                key={title}
                to={to}
                className={styles.destCard}
                aria-label={`${title}: open photo gallery`}
              >
                <img
                  className={styles.destImage}
                  src={imageSrc}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
                <div className={styles.destOverlay} aria-hidden="true" />
                <div className={styles.destText}>
                  <h3 className={styles.destTitle}>{title}</h3>
                  <p className={styles.destDescription}>{description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.experiencesSection} aria-labelledby="experiences-heading">
          <h2 id="experiences-heading" className={styles.videoHeading}>
            EXPERIENCES
          </h2>
          <div className={styles.destinationsGrid}>
            {EXPERIENCES.map(({ title, description, imageSrc, to }) => (
              <Link
                key={title}
                to={to}
                className={styles.destCard}
                aria-label={`${title}: book a charter`}
              >
                <img
                  className={styles.destImage}
                  src={imageSrc}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
                <div className={styles.destOverlay} aria-hidden="true" />
                <div className={styles.destText}>
                  <h3 className={styles.destTitle}>{title}</h3>
                  <p className={styles.destDescription}>{description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.fleetSection} aria-labelledby="fleet-heading">
          <h2 id="fleet-heading" className={styles.videoHeading}>
            LUXARY CATAMARANS
          </h2>
          <div className={styles.fleetGrid}>
            {FLEET.map(({ title, description, imageSrc, to }) => (
              <Link
                key={title}
                to={to}
                className={styles.fleetCard}
                aria-label={`${title}: open photo gallery`}
              >
                <div className={styles.fleetImageWrap}>
                  <img
                    className={styles.fleetImage}
                    src={imageSrc}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className={styles.fleetBody}>
                  <h3 className={styles.fleetTitle}>{title}</h3>
                  <p className={styles.fleetDescription}>{description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}

export default HomePage;
