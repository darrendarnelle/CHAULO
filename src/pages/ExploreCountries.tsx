import { GraduationCap, Briefcase, FileText, DollarSign, ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function ExploreCountries() {
  const { t } = useTranslation()

  const countries = [
    {
      name: 'Australia',
      flag: '🇦🇺',
      desc: t('explore.australia'),
      education: t('explore.australiaEdu'),
      jobs: t('explore.australiaJobs'),
      visa: t('explore.australiaVisa'),
      cost: t('explore.australiaCost'),
      color: 'var(--primary-500)',
    },
    {
      name: 'Taiwan',
      flag: '🇹🇼',
      desc: t('explore.taiwan'),
      education: t('explore.taiwanEdu'),
      jobs: t('explore.taiwanJobs'),
      visa: t('explore.taiwanVisa'),
      cost: t('explore.taiwanCost'),
      color: 'var(--accent-500)',
    },
    {
      name: 'Singapore',
      flag: '🇸🇬',
      desc: t('explore.singapore'),
      education: t('explore.singaporeEdu'),
      jobs: t('explore.singaporeJobs'),
      visa: t('explore.singaporeVisa'),
      cost: t('explore.singaporeCost'),
      color: 'var(--warning-500)',
    },
    {
      name: 'Malaysia',
      flag: '🇲🇾',
      desc: t('explore.malaysia'),
      education: t('explore.malaysiaEdu'),
      jobs: t('explore.malaysiaJobs'),
      visa: t('explore.malaysiaVisa'),
      cost: t('explore.malaysiaCost'),
      color: 'var(--error-500)',
    },
    {
      name: 'Canada',
      flag: '🇨🇦',
      desc: t('explore.canada'),
      education: t('explore.canadaEdu'),
      jobs: t('explore.canadaJobs'),
      visa: t('explore.canadaVisa'),
      cost: t('explore.canadaCost'),
      color: 'var(--primary-600)',
    },
  ]

  return (
    <div>
      <section style={styles.hero}>
        <div style={styles.container}>
          <h1 style={styles.title}>{t('explore.title')}</h1>
          <p style={styles.subtitle}>
            {t('explore.subtitle')}
          </p>
        </div>
      </section>

      <section style={styles.gridSection}>
        <div style={styles.container}>
          <div style={styles.grid}>
            {countries.map((c, i) => (
              <div key={i} style={styles.card}>
                <div style={styles.cardHeader}>
                  <span style={styles.flag}>{c.flag}</span>
                  <div>
                    <h3 style={styles.cardTitle}>{c.name}</h3>
                    <p style={styles.cardDesc}>{c.desc}</p>
                  </div>
                </div>

                <div style={styles.details}>
                  <div style={styles.detailRow}>
                    <GraduationCap size={16} style={{ color: c.color, flexShrink: 0 }} />
                    <div>
                      <span style={styles.detailLabel}>Education</span>
                      <p style={styles.detailValue}>{c.education}</p>
                    </div>
                  </div>
                  <div style={styles.detailRow}>
                    <Briefcase size={16} style={{ color: c.color, flexShrink: 0 }} />
                    <div>
                      <span style={styles.detailLabel}>Job Opportunities</span>
                      <p style={styles.detailValue}>{c.jobs}</p>
                    </div>
                  </div>
                  <div style={styles.detailRow}>
                    <FileText size={16} style={{ color: c.color, flexShrink: 0 }} />
                    <div>
                      <span style={styles.detailLabel}>Visa Guidance</span>
                      <p style={styles.detailValue}>{c.visa}</p>
                    </div>
                  </div>
                  <div style={styles.detailRow}>
                    <DollarSign size={16} style={{ color: c.color, flexShrink: 0 }} />
                    <div>
                      <span style={styles.detailLabel}>Estimated Living Cost</span>
                      <p style={styles.detailValue}>{c.cost}</p>
                    </div>
                  </div>
                </div>

                <button style={styles.cardBtn}>
                  View Guide <ArrowRight size={16} />
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
  hero: {
    background: 'linear-gradient(135deg, var(--primary-600) 0%, var(--primary-700) 100%)',
    padding: '64px 24px',
    textAlign: 'center' as const,
  },
  container: {
    maxWidth: 1200,
    margin: '0 auto',
  },
  title: {
    fontSize: 36,
    fontWeight: 700,
    color: 'var(--text-primary)',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: 'var(--text-secondary)',
    maxWidth: 560,
    margin: '0 auto',
    lineHeight: 1.6,
  },
  gridSection: {
    padding: '64px 24px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
    gap: 24,
  },
  card: {
    padding: 32,
    borderRadius: 'var(--radius-lg)',
    background: 'var(--bg-primary)',
    border: '1px solid var(--border-color)',
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    transition: 'box-shadow 0.2s, transform 0.2s',
  },
  cardHeader: {
    display: 'flex',
    gap: 16,
    alignItems: 'flex-start',
  },
  flag: {
    fontSize: 40,
    lineHeight: 1,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 700,
    color: 'var(--text-primary)',
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 14,
    lineHeight: 1.6,
    color: 'var(--text-secondary)',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  detailRow: {
    display: 'flex',
    gap: 10,
    alignItems: 'flex-start',
  },
  detailLabel: {
    fontSize: 12,
    fontWeight: 600,
    color: 'var(--text-secondary)',
    textTransform: 'uppercase' as const,
    letterSpacing: 0.5,
  },
  detailValue: {
    fontSize: 14,
    color: 'var(--text-primary)',
    lineHeight: 1.4,
    marginTop: 2,
  },
  cardBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '12px 24px',
    borderRadius: 'var(--radius)',
    background: 'var(--primary-50)',
    color: 'var(--primary-700)',
    fontSize: 14,
    fontWeight: 600,
    border: '1.5px solid var(--primary-200)',
    cursor: 'pointer',
    transition: 'all 0.15s',
    alignSelf: 'flex-start',
  },
}
