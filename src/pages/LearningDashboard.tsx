import { ArrowRight, BookOpen, FileText, DollarSign, Briefcase, Globe, Home } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function LearningDashboard() {
  const { t } = useTranslation()

  const modules = [
    {
      title: t('dashboard.module1'),
      desc: t('dashboard.module1Desc'),
      icon: <Globe size={22} />,
      progress: 80,
      color: 'var(--primary-500)',
      bg: 'var(--primary-50)',
    },
    {
      title: t('dashboard.module2'),
      desc: t('dashboard.module2Desc'),
      icon: <FileText size={22} />,
      progress: 45,
      color: 'var(--accent-500)',
      bg: 'var(--accent-50)',
    },
    {
      title: t('dashboard.module6'),
      desc: t('dashboard.module6Desc'),
      icon: <DollarSign size={22} />,
      progress: 30,
      color: 'var(--warning-500)',
      bg: 'var(--warning-50)',
    },
    {
      title: t('dashboard.module5'),
      desc: t('dashboard.module5Desc'),
      icon: <Briefcase size={22} />,
      progress: 15,
      color: 'var(--error-500)',
      bg: 'var(--error-50)',
    },
    {
      title: t('dashboard.module7'),
      desc: t('dashboard.module7Desc'),
      icon: <BookOpen size={22} />,
      progress: 0,
      color: 'var(--primary-600)',
      bg: 'var(--primary-50)',
    },
    {
      title: t('dashboard.module8'),
      desc: t('dashboard.module8Desc'),
      icon: <Home size={22} />,
      progress: 0,
      color: 'var(--neutral-500)',
      bg: 'var(--neutral-100)',
    },
  ]

  const overallProgress = Math.round(
    modules.reduce((sum, m) => sum + m.progress, 0) / modules.length
  )

  return (
    <div>
      {/* Welcome Header */}
      <section style={styles.welcome}>
        <div style={styles.container}>
          <div style={styles.welcomeContent}>
            <div>
              <h1 style={styles.welcomeTitle}>{t('dashboard.title')}</h1>
              <p style={styles.welcomeSub}>
                {t('dashboard.subtitle')}
              </p>
            </div>
            <div style={styles.overallCard}>
              <div style={styles.overallCircle}>
                <svg width="80" height="80" viewBox="0 0 80 80">
                  <circle
                    cx="40" cy="40" r="34"
                    fill="none"
                    stroke="var(--neutral-200)"
                    strokeWidth="6"
                  />
                  <circle
                    cx="40" cy="40" r="34"
                    fill="none"
                    stroke="var(--primary-500)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 34}`}
                    strokeDashoffset={`${2 * Math.PI * 34 * (1 - overallProgress / 100)}`}
                    transform="rotate(-90 40 40)"
                    style={{ transition: 'stroke-dashoffset 0.6s ease' }}
                  />
                </svg>
                <span style={styles.overallPercent}>{overallProgress}%</span>
              </div>
              <div style={styles.overallText}>
                <strong>Overall Progress</strong>
                <span style={{ fontSize: 13, color: 'var(--neutral-500)' }}>
                  Keep it up!
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section style={styles.modulesSection}>
        <div style={styles.container}>
          <h2 style={styles.modulesTitle}>Your Learning Modules</h2>
          <div style={styles.modulesGrid}>
            {modules.map((m, i) => (
              <div key={i} style={styles.moduleCard}>
                <div style={styles.moduleTop}>
                  <div style={{ ...styles.moduleIcon, background: m.bg, color: m.color }}>
                    {m.icon}
                  </div>
                  <div style={styles.moduleInfo}>
                    <h3 style={styles.moduleTitle}>{m.title}</h3>
                    <p style={styles.moduleDesc}>{m.desc}</p>
                  </div>
                </div>
                <div style={styles.progressRow}>
                  <div style={styles.progressTrack}>
                    <div
                      style={{
                        ...styles.progressFill,
                        width: `${m.progress}%`,
                        background: m.color,
                      }}
                    />
                  </div>
                  <span style={styles.progressLabel}>{m.progress}%</span>
                </div>
                <button
                  style={{
                    ...styles.continueBtn,
                    opacity: m.progress === 0 ? 0.6 : 1,
                  }}
                >
                  {m.progress === 0 ? 'Start Module' : 'Continue'}{' '}
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  welcome: {
    background: 'linear-gradient(135deg, var(--primary-600) 0%, var(--primary-700) 100%)',
    padding: '56px 24px',
  },
  container: {
    maxWidth: 1200,
    margin: '0 auto',
  },
  welcomeContent: {
    display: 'flex',
    alignItems: 'center',
    gap: 48,
    flexWrap: 'wrap',
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 700,
    color: 'var(--white)',
    marginBottom: 8,
  },
  welcomeSub: {
    fontSize: 15,
    color: 'var(--primary-200)',
    lineHeight: 1.6,
    maxWidth: 480,
  },
  overallCard: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    padding: '20px 28px',
    borderRadius: 'var(--radius-lg)',
    background: 'rgba(255,255,255,0.12)',
    backdropFilter: 'blur(8px)',
  },
  overallCircle: {
    position: 'relative',
    width: 80,
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overallPercent: {
    position: 'absolute',
    fontSize: 16,
    fontWeight: 700,
    color: 'var(--white)',
  },
  overallText: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    color: 'var(--white)',
    fontSize: 15,
  },
  modulesSection: {
    padding: '64px 24px',
  },
  modulesTitle: {
    fontSize: 24,
    fontWeight: 700,
    color: 'var(--neutral-900)',
    marginBottom: 32,
  },
  modulesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
    gap: 20,
  },
  moduleCard: {
    padding: 28,
    borderRadius: 'var(--radius-lg)',
    background: 'var(--white)',
    border: '1px solid var(--neutral-200)',
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  moduleTop: {
    display: 'flex',
    gap: 16,
  },
  moduleIcon: {
    width: 48,
    height: 48,
    borderRadius: 'var(--radius)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  moduleInfo: {
    flex: 1,
  },
  moduleTitle: {
    fontSize: 16,
    fontWeight: 600,
    color: 'var(--neutral-900)',
    marginBottom: 4,
  },
  moduleDesc: {
    fontSize: 13,
    lineHeight: 1.5,
    color: 'var(--neutral-500)',
  },
  progressRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  progressTrack: {
    flex: 1,
    height: 8,
    borderRadius: 100,
    background: 'var(--neutral-100)',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 100,
    transition: 'width 0.4s ease',
  },
  progressLabel: {
    fontSize: 13,
    fontWeight: 600,
    color: 'var(--neutral-500)',
    minWidth: 36,
    textAlign: 'right' as const,
  },
  continueBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: '10px 20px',
    borderRadius: 'var(--radius-sm)',
    background: 'var(--primary-600)',
    color: 'var(--white)',
    fontSize: 14,
    fontWeight: 600,
    border: 'none',
    cursor: 'pointer',
    alignSelf: 'flex-start',
    transition: 'background 0.15s',
  },
}
