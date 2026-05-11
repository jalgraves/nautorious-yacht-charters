import { Link } from 'react-router-dom';
import logo from '@/assets/nautorious-charters.webp';
import HomeJsonLd from '@/components/HomeJsonLd';
import styles from './HomePage.module.css';

/** Shown beneath the hero logo (over the ocean). Edit this string to change the header description. */
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
        <div className={styles.ocean}>
          <div className={styles.wave} />
          <div className={styles.wave2} />
          <div className={styles.wave3} />
        </div>
        <div className={styles.heroContent}>
          <img src={logo} alt="Nautorious Yacht Charters" className={styles.logo} />
          <div className={styles.heroText}>
            <p className={styles.heroDescription}>
              {HERO_DESCRIPTION}
            </p>
            <p className={styles.heroSubtitle}>
            Luxury Aquila Yacht Charters in Florida &amp; The Bahamas
            </p>
          </div>
        </div>
      </div>
      <section className={styles.videoSection}>
        <p className={styles.sectionDescription}>
        Experience the water the way it should be—comfortable, private, and effortlessly elevated. Our fleet of 36’ and 54’ Aquila Power Catamarans offers premium yacht charters designed for smooth cruising, spacious lounging, and unforgettable days on the water.
        </p>
        <p className={styles.sectionDescription}>
        Based in Florida and operating across St. Petersburg, Miami, Key West, and the Bahamas, we provide flexible private charters ranging from relaxed coastal cruises to full-day and multi-destination offshore adventures.
        </p>
        <p className={styles.sectionDescription}>
        <strong>The bay is calling. Answer Nautoriously</strong>. Book your Nautorious charter today — and become the legend everyone's talking about Monday morning
        </p>

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

        <section className={styles.fleetSection} aria-labelledby="fleet-heading">
          <h2 id="fleet-heading" className={styles.videoHeading}>
            THE FLEET
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
