import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Globe } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/explore', label: 'Explore' },
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/mentorship', label: 'Mentorship' },
  { path: '/checklist', label: 'Checklist' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <>
      <header className="chaulo-header">
        <div className="chaulo-header-inner">
          <Link to="/" className="chaulo-logo">
            <Globe size={28} color="var(--primary-600)" strokeWidth={2.5} />
            <span className="chaulo-logo-text">Chaulo</span>
          </Link>

          <nav className="chaulo-desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`chaulo-nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            className="chaulo-menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <nav className="chaulo-mobile-nav">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`chaulo-mobile-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      <style>{`
        .chaulo-header {
          background: var(--white);
          border-bottom: 1px solid var(--neutral-200);
          position: sticky;
          top: 0;
          z-index: 50;
        }
        .chaulo-header-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .chaulo-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
        }
        .chaulo-logo-text {
          font-size: 22px;
          font-weight: 700;
          color: var(--primary-700);
          letter-spacing: -0.5px;
        }
        .chaulo-desktop-nav {
          display: flex;
          gap: 4px;
        }
        .chaulo-nav-link {
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          color: var(--neutral-600);
          text-decoration: none;
          transition: all 0.15s ease;
        }
        .chaulo-nav-link:hover {
          color: var(--primary-700);
          background: var(--primary-50);
        }
        .chaulo-nav-link.active {
          color: var(--primary-700);
          background: var(--primary-50);
        }
        .chaulo-menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--neutral-700);
          padding: 4px;
          cursor: pointer;
        }
        .chaulo-mobile-nav {
          display: flex;
          flex-direction: column;
          padding: 8px 24px 16px;
          background: var(--white);
          border-bottom: 1px solid var(--neutral-200);
        }
        .chaulo-mobile-link {
          padding: 12px 16px;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 500;
          color: var(--neutral-600);
          text-decoration: none;
          transition: all 0.15s ease;
        }
        .chaulo-mobile-link:hover,
        .chaulo-mobile-link.active {
          color: var(--primary-700);
          background: var(--primary-50);
        }
        @media (max-width: 768px) {
          .chaulo-desktop-nav { display: none; }
          .chaulo-menu-btn { display: block; }
        }
      `}</style>
    </>
  )
}
