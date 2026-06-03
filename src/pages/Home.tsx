import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  BookOpen,
  PlayCircle,
  Users,
  DollarSign,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
} from 'lucide-react'

export default function Home() {
  const { t } = useTranslation()

  const features = [
    {
      icon: <BookOpen size={28} />,
      title: t('home.feature1Title'),
      desc: t('home.feature1Desc'),
      color: 'var(--primary-500)',
      bg: 'var(--primary-50)',
    },
    {
      icon: <PlayCircle size={28} />,
      title: t('home.feature2Title'),
      desc: t('home.feature2Desc'),
      color: 'var(--accent-500)',
      bg: 'var(--accent-50)',
    },
    {
      icon: <Users size={28} />,
      title: t('home.feature3Title'),
      desc: t('home.feature3Desc'),
      color: 'var(--warning-500)',
      bg: 'var(--warning-50)',
    },
  ]

  const reasons = [
    {
      icon: <DollarSign size={24} />,
      title: t('home.reason1'),
      desc: t('home.reason1Desc'),
    },
    {
      icon: <BookOpen size={24} />,
      title: t('home.reason2'),
      desc: t('home.reason2Desc'),
    },
    {
      icon: <ShieldCheck size={24} />,
      title: t('home.reason3'),
      desc: t('home.reason3Desc'),
    },
    {
      icon: <TrendingUp size={24} />,
      title: t('home.reason4'),
      desc: t('home.reason4Desc'),
    },
  ]
  return (
    <div>
      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.heroInner}>
          <div style={styles.heroContent}>
            <span style={styles.badge}>Empowering Indonesian Youth</span>
            <h1 style={styles.heroTitle}>
              {t('home.title')}{' '}
              <span style={styles.highlight}>Chaulo</span>
            </h1>
            <p style={styles.heroSub}>
              {t('home.subtitle')}
            </p>
            <div style={styles.heroBtns}>
              <Link to="/dashboard" style={styles.btnPrimary}>
                {t('home.heroButton')} <ArrowRight size={18} />
              </Link>
              <Link to="/explore" style={styles.btnSecondary}>
                {t('home.heroButton')}
              </Link>
            </div>
          </div>
          <div style={styles.heroVisual}>
            <div style={styles.heroCard}>
              <div style={styles.heroCardInner}>
                <GlobeIcon />
                <div style={styles.heroCardText}>
                  <strong>5+ Countries</strong>
                  <span style={{ fontSize: 13, color: 'var(--neutral-500)' }}>
                    Explore opportunities worldwide
                  </span>
                </div>
              </div>
              <div style={styles.heroCardInner}>
                <GradIcon />
                <div style={styles.heroCardText}>
                  <strong>1000+ Students</strong>
                  <span style={{ fontSize: 13, color: 'var(--neutral-500)' }}>
                    Already preparing abroad
                  </span>
                </div>
              </div>
              <div style={styles.heroCardInner}>
                <MentorIcon />
                <div style={styles.heroCardText}>
                  <strong>50+ Mentors</strong>
                  <span style={{ fontSize: 13, color: 'var(--neutral-500)' }}>
                    Alumni & professionals
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Everything You Need to Go Abroad</h2>
            <p style={styles.sectionSub}>
              From preparation to departure, Chaulo covers every step of your
              international journey.
            </p>
          </div>
          <div style={styles.featureGrid}>
            {features.map((f, i) => (
              <div key={i} style={styles.featureCard}>
                <div
                  style={{
                    ...styles.featureIcon,
                    color: f.color,
                    background: f.bg,
                  }}
                >
                  {f.icon}
                </div>
                <h3 style={styles.featureTitle}>{f.title}</h3>
                <p style={styles.featureDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Chaulo */}
      <section style={styles.whySection}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>{t('home.whyChoose')}</h2>
            <p style={styles.sectionSub}>
              We make going abroad accessible, affordable, and achievable for
              every Indonesian student.
            </p>
          </div>
          <div style={styles.whyGrid}>
            {reasons.map((r, i) => (
              <div key={i} style={styles.whyCard}>
                <div style={styles.whyIcon}>{r.icon}</div>
                <div>
                  <h3 style={styles.whyTitle}>{r.title}</h3>
                  <p style={styles.whyDesc}>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.ctaSection}>
        <div style={styles.ctaInner}>
          <h2 style={styles.ctaTitle}>Ready to Start Your Journey?</h2>
          <p style={styles.ctaSub}>
            Join thousands of Indonesian students preparing for global
            opportunities.
          </p>
          <Link to="/dashboard" style={styles.btnPrimary}>
            Get Started Free <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}

function GlobeIcon() {
  return (
    <div style={{ ...styles.miniIcon, background: 'var(--primary-50)', color: 'var(--primary-600)' }}>
      <BookOpen size={20} />
    </div>
  )
}
function GradIcon() {
  return (
    <div style={{ ...styles.miniIcon, background: 'var(--accent-50)', color: 'var(--accent-600)' }}>
      <TrendingUp size={20} />
    </div>
  )
}
function MentorIcon() {
  return (
    <div style={{ ...styles.miniIcon, background: 'var(--warning-50)', color: 'var(--warning-500)' }}>
      <Users size={20} />
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  hero: {
    background: 'linear-gradient(135deg, var(--primary-50) 0%, var(--white) 50%, var(--primary-50) 100%)',
    padding: '80px 24px',
  },
  heroInner: {
    maxWidth: 1200,
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    gap: 64,
    flexWrap: 'wrap',
  },
  heroContent: {
    flex: '1 1 480px',
  },
  badge: {
    display: 'inline-block',
    padding: '6px 16px',
    borderRadius: 100,
    background: 'var(--primary-100)',
    color: 'var(--primary-700)',
    fontSize: 13,
    fontWeight: 600,
    marginBottom: 20,
  },
  heroTitle: {
    fontSize: 48,
    fontWeight: 700,
    lineHeight: 1.15,
    color: 'var(--neutral-900)',
    marginBottom: 20,
    letterSpacing: -1,
  },
  highlight: {
    color: 'var(--primary-600)',
  },
  heroSub: {
    fontSize: 18,
    lineHeight: 1.6,
    color: 'var(--neutral-500)',
    marginBottom: 32,
    maxWidth: 520,
  },
  heroBtns: {
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
  },
  btnPrimary: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '14px 28px',
    borderRadius: 'var(--radius)',
    background: 'var(--primary-600)',
    color: 'var(--white)',
    fontSize: 15,
    fontWeight: 600,
    textDecoration: 'none',
    transition: 'background 0.15s',
    border: 'none',
  },
  btnSecondary: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '14px 28px',
    borderRadius: 'var(--radius)',
    background: 'var(--white)',
    color: 'var(--primary-700)',
    fontSize: 15,
    fontWeight: 600,
    textDecoration: 'none',
    border: '1.5px solid var(--primary-200)',
    transition: 'border-color 0.15s',
  },
  heroVisual: {
    flex: '1 1 360px',
  },
  heroCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    padding: 32,
    background: 'var(--white)',
    borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--shadow-lg)',
  },
  heroCardInner: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    padding: 16,
    borderRadius: 'var(--radius)',
    background: 'var(--neutral-50)',
  },
  heroCardText: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  miniIcon: {
    width: 44,
    height: 44,
    borderRadius: 'var(--radius-sm)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  section: {
    padding: '80px 24px',
  },
  container: {
    maxWidth: 1200,
    margin: '0 auto',
  },
  sectionHeader: {
    textAlign: 'center' as const,
    marginBottom: 48,
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: 700,
    color: 'var(--neutral-900)',
    marginBottom: 12,
    letterSpacing: -0.5,
  },
  sectionSub: {
    fontSize: 16,
    color: 'var(--neutral-500)',
    maxWidth: 560,
    margin: '0 auto',
    lineHeight: 1.6,
  },
  featureGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: 24,
  },
  featureCard: {
    padding: 32,
    borderRadius: 'var(--radius-lg)',
    background: 'var(--white)',
    border: '1px solid var(--neutral-200)',
    transition: 'box-shadow 0.2s, transform 0.2s',
  },
  featureIcon: {
    width: 52,
    height: 52,
    borderRadius: 'var(--radius)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 600,
    color: 'var(--neutral-900)',
    marginBottom: 8,
  },
  featureDesc: {
    fontSize: 14,
    lineHeight: 1.6,
    color: 'var(--neutral-500)',
  },
  whySection: {
    padding: '80px 24px',
    background: 'var(--neutral-50)',
  },
  whyGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 24,
  },
  whyCard: {
    display: 'flex',
    gap: 16,
    padding: 28,
    borderRadius: 'var(--radius-lg)',
    background: 'var(--white)',
    border: '1px solid var(--neutral-200)',
  },
  whyIcon: {
    width: 44,
    height: 44,
    borderRadius: 'var(--radius-sm)',
    background: 'var(--primary-50)',
    color: 'var(--primary-600)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  whyTitle: {
    fontSize: 16,
    fontWeight: 600,
    color: 'var(--neutral-900)',
    marginBottom: 4,
  },
  whyDesc: {
    fontSize: 14,
    lineHeight: 1.6,
    color: 'var(--neutral-500)',
  },
  ctaSection: {
    padding: '80px 24px',
    background: 'linear-gradient(135deg, var(--primary-600) 0%, var(--primary-700) 100%)',
  },
  ctaInner: {
    maxWidth: 600,
    margin: '0 auto',
    textAlign: 'center' as const,
  },
  ctaTitle: {
    fontSize: 32,
    fontWeight: 700,
    color: 'var(--white)',
    marginBottom: 12,
  },
  ctaSub: {
    fontSize: 16,
    color: 'var(--primary-200)',
    marginBottom: 32,
    lineHeight: 1.6,
  },
}
