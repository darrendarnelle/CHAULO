import { GraduationCap, Briefcase, FileText, DollarSign, ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function ExploreCountries() {
  const { t } = useTranslation()

  const countries = [
    {
      name: 'Australia',
      flag: '🇦🇺',
      desc: 'World-class universities and strong post-study work opportunities in a vibrant, multicultural environment.',
      education: 'Top QS-ranked universities, diverse programs',
      jobs: 'Post-study work visa up to 4 years',
      visa: 'Student Visa (Subclass 500)',
      cost: 'AUD 20,000 - 35,000 / year',
      color: 'var(--primary-500)',
    },
    {
      name: 'Taiwan',
      flag: '🇹🇼',
      desc: 'Affordable tuition, generous scholarships, and growing tech industry with opportunities for international graduates.',
      education: 'Government scholarships available, tech-focused programs',
      jobs: 'Evaluation foreign talent program',
      visa: 'Student Resident Visa',
      cost: 'TWD 150,000 - 300,000 / year',
      color: 'var(--accent-500)',
    },
    {
      name: 'Singapore',
      flag: '🇸🇬',
      desc: 'A global hub for finance and tech with prestigious universities and excellent career pathways.',
      education: 'NUS, NTU - top Asian universities',
      jobs: 'Employment Pass for skilled workers',
      visa: 'Student Pass',
      cost: 'SGD 25,000 - 45,000 / year',
      color: 'var(--warning-500)',
    },
    {
      name: 'Malaysia',
      flag: '🇲🇾',
      desc: 'Affordable living costs, English-medium programs, and a welcoming culture close to home.',
      education: 'Branch campuses of UK/Australian universities',
      jobs: 'Growing digital economy opportunities',
      visa: 'Student Pass',
      cost: 'MYR 20,000 - 40,000 / year',
      color: 'var(--error-500)',
    },
    {
      name: 'Canada',
      flag: '🇨🇦',
      desc: 'Immigration-friendly policies, high quality of life, and clear pathways from study to permanent residency.',
      education: 'Globally recognized degrees, co-op programs',
      jobs: 'Post-graduation work permit up to 3 years',
      visa: 'Study Permit',
    cost: 'CAD 20,000 - 40,000 / year',
    color: 'var(--primary-600)',
  },
]

  return (
    <div>
      <section style={styles.hero}>
        <div style={styles.container}>
          <h1 style={styles.title}>{t('explore.title')}</h1>
          <p style={styles.subtitle}>
            {t('explore.description')}
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
    color: 'var(--white)',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: 'var(--primary-200)',
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
    background: 'var(--white)',
    border: '1px solid var(--neutral-200)',
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
    color: 'var(--neutral-900)',
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 14,
    lineHeight: 1.6,
    color: 'var(--neutral-500)',
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
    color: 'var(--neutral-400)',
    textTransform: 'uppercase' as const,
    letterSpacing: 0.5,
  },
  detailValue: {
    fontSize: 14,
    color: 'var(--neutral-700)',
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
