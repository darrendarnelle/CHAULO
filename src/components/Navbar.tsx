import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Globe, LogOut } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

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
  const { user, signOut } = useAuth()

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

          <div className="chaulo-user-section">
            {user ? (
              <div className="chaulo-user-menu">
                <span className="chaulo-user-name">{user.name}</span>
                <button
                  onClick={() => signOut()}
                  className="chaulo-logout-btn"
                  title="Sign out"
                >
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <div className="chaulo-auth-links">
                <Link to="/login" className="chaulo-login-link">
                  Sign In
                </Link>
                <Link to="/signup" className="chaulo-signup-link">
                  Sign Up
                </Link>
              </div>
            )}
          </div>

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
            {user ? (
              <div className="chaulo-mobile-user">
                <span className="chaulo-mobile-user-name">{user.name}</span>
                <button
                  onClick={() => {
                    signOut()
                    setOpen(false)
                  }}
                  className="chaulo-mobile-logout"
                >
                  <LogOut size={18} />
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="chaulo-mobile-auth">
                <Link
                  to="/login"
                  className="chaulo-mobile-auth-link"
                  onClick={() => setOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="chaulo-mobile-auth-link primary"
                  onClick={() => setOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            )}
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
        .chaulo-user-section {
          display: flex;
          align-items: center;
        }
        .chaulo-user-menu {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .chaulo-user-name {
          font-size: 14px;
          font-weight: 500;
          color: var(--neutral-700);
        }
        .chaulo-logout-btn {
          background: none;
          border: none;
          color: var(--neutral-600);
          cursor: pointer;
          padding: 4px;
          border-radius: 6px;
          transition: all 0.15s ease;
          display: flex;
          align-items: center;
        }
        .chaulo-logout-btn:hover {
          color: var(--error-600);
          background: var(--error-50);
        }
        .chaulo-auth-links {
          display: flex;
          gap: 12px;
        }
        .chaulo-login-link, .chaulo-signup-link {
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.15s ease;
        }
        .chaulo-login-link {
          color: var(--primary-700);
          background: var(--primary-50);
        }
        .chaulo-login-link:hover {
          background: var(--primary-100);
        }
        .chaulo-signup-link {
          color: white;
          background: var(--primary-600);
        }
        .chaulo-signup-link:hover {
          background: var(--primary-700);
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
        .chaulo-mobile-user {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-top: 12px;
          border-top: 1px solid var(--neutral-200);
          margin-top: 12px;
        }
        .chaulo-mobile-user-name {
          font-size: 14px;
          font-weight: 600;
          color: var(--neutral-700);
        }
        .chaulo-mobile-logout {
          display: flex;
          align-items: center;
          gap: 8px;
          background: none;
          border: none;
          color: var(--error-600);
          cursor: pointer;
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.15s ease;
        }
        .chaulo-mobile-logout:hover {
          background: var(--error-50);
        }
        .chaulo-mobile-auth {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-top: 12px;
          border-top: 1px solid var(--neutral-200);
          margin-top: 12px;
        }
        .chaulo-mobile-auth-link {
          padding: 10px 16px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          text-align: center;
          transition: all 0.15s ease;
          color: var(--primary-700);
          background: var(--primary-50);
        }
        .chaulo-mobile-auth-link.primary {
          color: white;
          background: var(--primary-600);
        }
        .chaulo-mobile-auth-link.primary:hover {
          background: var(--primary-700);
        }
        .chaulo-mobile-auth-link:hover {
          background: var(--primary-100);
        }
        @media (max-width: 768px) {
          .chaulo-desktop-nav { display: none; }
          .chaulo-user-section { display: none; }
          .chaulo-menu-btn { display: block; }
        }
      `}</style>
    </>
  )
}
