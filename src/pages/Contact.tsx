import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const countries = ['Australia', 'Taiwan', 'Singapore', 'Malaysia', 'Canada', 'Other']
const goals = ['Study', 'Work', 'Both']

export default function Contact() {
  const { t } = useTranslation()
  const [form, setForm] = useState({
    name: '',
    email: '',
    country: '',
    goal: '',
    questions: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  if (submitted) {
    return (
      <div>
        <section style={styles.hero}>
          <div style={styles.container}>
            <h1 style={styles.title}>{t('contact.title')}</h1>
            <p style={styles.subtitle}>
              {t('contact.subtitle')}
            </p>
          </div>
        </section>
        <section style={styles.mainSection}>
          <div style={styles.successCard}>
            <CheckCircle size={48} color="var(--accent-500)" />
            <h2 style={styles.successTitle}>Consultation Booked!</h2>
            <p style={styles.successText}>
              Thank you, {form.name}! We'll reach out to you at {form.email} to
              schedule your consultation about {form.goal.toLowerCase()} opportunities
              {form.country ? ` in ${form.country}` : ''}.
            </p>
            <button
              style={styles.againBtn}
              onClick={() => {
                setSubmitted(false)
                setForm({ name: '', email: '', country: '', goal: '', questions: '' })
              }}
            >
              Book Another Consultation
            </button>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div>
      <section style={styles.hero}>
        <div style={styles.container}>
          <h1 style={styles.title}>{t('contact.title')}</h1>
          <p style={styles.subtitle}>
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      <section style={styles.mainSection}>
        <div style={styles.container}>
          <form style={styles.form} onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.label}>{t('contact.name')}</label>
              <input
                style={styles.input}
                type="text"
                placeholder="Your full name"
                value={form.name}
                onChange={(e) => update('name', e.target.value)}
                required
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>{t('contact.email')}</label>
              <input
                style={styles.input}
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
                required
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Destination Country</label>
              <select
                style={styles.select}
                value={form.country}
                onChange={(e) => update('country', e.target.value)}
                required
              >
                <option value="">Select a country</option>
                {countries.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Goal</label>
              <div style={styles.radioGroup}>
                {goals.map((g) => (
                  <label key={g} style={styles.radioLabel}>
                    <input
                      type="radio"
                      name="goal"
                      value={g}
                      checked={form.goal === g}
                      onChange={(e) => update('goal', e.target.value)}
                      style={styles.radio}
                    />
                    <span
                      style={{
                        ...styles.radioBtn,
                        ...(form.goal === g ? styles.radioBtnActive : {}),
                      }}
                    >
                      {g}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>{t('contact.message')}</label>
              <textarea
                style={styles.textarea}
                placeholder="Tell us about your goals, questions, or anything you'd like to discuss..."
                rows={4}
                value={form.questions}
                onChange={(e) => update('questions', e.target.value)}
              />
            </div>

            <button style={styles.submitBtn} type="submit">
              <Send size={18} />
              Book Consultation
            </button>
          </form>
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
    maxWidth: 560,
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
    lineHeight: 1.6,
  },
  mainSection: {
    padding: '64px 24px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: 600,
    color: 'var(--neutral-700)',
  },
  input: {
    padding: '12px 16px',
    borderRadius: 'var(--radius-sm)',
    border: '1.5px solid var(--neutral-200)',
    fontSize: 15,
    color: 'var(--neutral-800)',
    outline: 'none',
    transition: 'border-color 0.15s',
    background: 'var(--white)',
  },
  select: {
    padding: '12px 16px',
    borderRadius: 'var(--radius-sm)',
    border: '1.5px solid var(--neutral-200)',
    fontSize: 15,
    color: 'var(--neutral-800)',
    outline: 'none',
    background: 'var(--white)',
    cursor: 'pointer',
  },
  radioGroup: {
    display: 'flex',
    gap: 12,
  },
  radioLabel: {
    cursor: 'pointer',
  },
  radio: {
    display: 'none',
  },
  radioBtn: {
    display: 'inline-block',
    padding: '10px 24px',
    borderRadius: 'var(--radius-sm)',
    border: '1.5px solid var(--neutral-200)',
    fontSize: 14,
    fontWeight: 500,
    color: 'var(--neutral-600)',
    background: 'var(--white)',
    transition: 'all 0.15s',
    cursor: 'pointer',
  },
  radioBtnActive: {
    background: 'var(--primary-50)',
    borderColor: 'var(--primary-500)',
    color: 'var(--primary-700)',
    fontWeight: 600,
  },
  textarea: {
    padding: '12px 16px',
    borderRadius: 'var(--radius-sm)',
    border: '1.5px solid var(--neutral-200)',
    fontSize: 15,
    color: 'var(--neutral-800)',
    outline: 'none',
    resize: 'vertical' as const,
    fontFamily: 'inherit',
    lineHeight: 1.5,
    background: 'var(--white)',
  },
  submitBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: '14px 32px',
    borderRadius: 'var(--radius)',
    background: 'var(--primary-600)',
    color: 'var(--white)',
    fontSize: 16,
    fontWeight: 600,
    border: 'none',
    cursor: 'pointer',
    transition: 'background 0.15s',
  },
  successCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center' as const,
    padding: 48,
    borderRadius: 'var(--radius-lg)',
    background: 'var(--white)',
    border: '1px solid var(--neutral-200)',
    gap: 16,
  },
  successTitle: {
    fontSize: 24,
    fontWeight: 700,
    color: 'var(--neutral-900)',
  },
  successText: {
    fontSize: 15,
    lineHeight: 1.6,
    color: 'var(--neutral-500)',
    maxWidth: 400,
  },
  againBtn: {
    padding: '12px 24px',
    borderRadius: 'var(--radius-sm)',
    background: 'var(--primary-50)',
    color: 'var(--primary-700)',
    fontSize: 14,
    fontWeight: 600,
    border: '1.5px solid var(--primary-200)',
    cursor: 'pointer',
    marginTop: 8,
  },
}
