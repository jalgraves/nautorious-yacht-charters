import { useState } from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';
import logo from '@/assets/vertical-logo-3.png';
import styles from './Layout.module.css';

const NAV_LINKS = [
  { to: '/gallery', label: 'Yachts' },
  { to: '/booking', label: 'Booking' },
];

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <nav className={styles.headerNav}>
          <Link to="/" className={styles.logoLink} onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="Nautorious Yacht Charters" className={styles.logoImage} />
          </Link>

          <ul className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ''}`}>
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span className={styles.hamburgerBar} />
            <span className={styles.hamburgerBar} />
            <span className={styles.hamburgerBar} />
          </button>
        </nav>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <img src={logo} alt="Nautorious Yacht Charters" className={styles.footerLogo} />
        <p>&copy; {new Date().getFullYear()} Nautorious Yacht Charters</p>
      </footer>
    </div>
  );
}

export default Layout;
