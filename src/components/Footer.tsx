import { Link } from 'react-router-dom'
import { Globe, Camera, HelpCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <div style={styles.brand}>
          <div style={styles.logoRow}>
            <Globe size={22} color="var(--primary-400)" />
            <span style={styles.logoText}>Chaulo</span>
          </div>
          <p style={styles.tagline}>
            Helping Indonesian youth build their global future.
          </p>
        </div>

        <div style={styles.linksGrid}>
          <div style={styles.linkGroup}>
            <h4 style={styles.linkTitle}>Platform</h4>
            <Link to="/explore" style={styles.link}>Explore Countries</Link>
            <Link to="/dashboard" style={styles.link}>Learning Dashboard</Link>
            <Link to="/mentorship" style={styles.link}>Mentorship</Link>
            <Link to="/checklist" style={styles.link}>Checklist</Link>
          </div>
          <div style={styles.linkGroup}>
            <h4 style={styles.linkTitle}>Company</h4>
            <Link to="/contact" style={styles.link}>About Chaulo</Link>
            <Link to="/contact" style={styles.link}>Contact</Link>
            <a href="#" style={styles.link}>
              <Camera size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} />
              Instagram
            </a>
            <a href="#" style={styles.link}>
              <HelpCircle size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} />
              FAQ
            </a>
          </div>
        </div>
      </div>

      <div style={styles.bottom}>
        <p style={styles.copyright}>
          &copy; {new Date().getFullYear()} Chaulo. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

const styles: Record<string, React.CSSProperties> = {
  footer: {
    background: 'var(--bg-secondary)',
    color: 'var(--text-secondary)',
    marginTop: 'auto',
    borderTop: '1px solid var(--border-color)',
  },
  inner: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '48px 24px 32px',
    display: 'flex',
    gap: 64,
    flexWrap: 'wrap',
  },
  brand: {
    flex: '1 1 280px',
  },
  logoRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  logoText: {
    fontSize: 18,
    fontWeight: 700,
    color: 'var(--text-primary)',
  },
  tagline: {
    fontSize: 14,
    lineHeight: 1.6,
    color: 'var(--text-secondary)',
    maxWidth: 280,
  },
  linksGrid: {
    display: 'flex',
    gap: 64,
    flex: '1 1 400px',
  },
  linkGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  linkTitle: {
    fontSize: 14,
    fontWeight: 600,
    color: 'var(--text-primary)',
    marginBottom: 4,
  },
  link: {
    fontSize: 14,
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    transition: 'color 0.15s',
  },
  bottom: {
    borderTop: '1px solid var(--border-color)',
    maxWidth: 1200,
    margin: '0 auto',
    padding: '16px 24px',
  },
  copyright: {
    fontSize: 13,
    color: 'var(--text-secondary)',
  },
}
