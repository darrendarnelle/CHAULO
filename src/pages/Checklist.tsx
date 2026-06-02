import { useState } from 'react'
import { Check, Circle, Plane, BookOpen, FileText, Home, DollarSign, Briefcase, CreditCard } from 'lucide-react'

const initialItems = [
  { id: 1, label: 'Passport ready', icon: <CreditCard size={18} />, checked: true },
  { id: 2, label: 'Language preparation', icon: <BookOpen size={18} />, checked: true },
  { id: 3, label: 'University/job applications', icon: <Briefcase size={18} />, checked: true },
  { id: 4, label: 'Visa documents', icon: <FileText size={18} />, checked: true },
  { id: 5, label: 'Housing research', icon: <Home size={18} />, checked: false },
  { id: 6, label: 'Financial planning', icon: <DollarSign size={18} />, checked: false },
  { id: 7, label: 'Departure preparation', icon: <Plane size={18} />, checked: false },
]

export default function Checklist() {
  const [items, setItems] = useState(initialItems)

  const toggle = (id: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    )
  }

  const checkedCount = items.filter((i) => i.checked).length
  const percent = Math.round((checkedCount / items.length) * 100)

  return (
    <div>
      <section style={styles.hero}>
        <div style={styles.container}>
          <h1 style={styles.title}>Personal Checklist</h1>
          <p style={styles.subtitle}>
            Track your preparation progress and make sure nothing is missed
            before you go abroad.
          </p>
        </div>
      </section>

      <section style={styles.mainSection}>
        <div style={styles.container}>
          {/* Progress Overview */}
          <div style={styles.progressCard}>
            <div style={styles.progressTop}>
              <div style={styles.progressInfo}>
                <h2 style={styles.progressTitle}>Your Progress</h2>
                <p style={styles.progressSub}>
                  {checkedCount} of {items.length} tasks completed
                </p>
              </div>
              <div style={styles.progressCircle}>
                <svg width="100" height="100" viewBox="0 0 100 100">
                  <circle
                    cx="50" cy="50" r="42"
                    fill="none"
                    stroke="var(--neutral-200)"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50" cy="50" r="42"
                    fill="none"
                    stroke="var(--primary-500)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 42}`}
                    strokeDashoffset={`${2 * Math.PI * 42 * (1 - percent / 100)}`}
                    transform="rotate(-90 50 50)"
                    style={{ transition: 'stroke-dashoffset 0.5s ease' }}
                  />
                </svg>
                <span style={styles.progressPercent}>{percent}%</span>
              </div>
            </div>
            <div style={styles.progressBar}>
              <div
                style={{
                  ...styles.progressBarFill,
                  width: `${percent}%`,
                }}
              />
            </div>
            <p style={styles.progressLabel}>
              {percent === 100
                ? 'All done! You are ready to go!'
                : percent >= 50
                ? 'Great progress! Keep going.'
                : 'Just getting started. You can do this!'}
            </p>
          </div>

          {/* Checklist Items */}
          <div style={styles.checklist}>
            {items.map((item) => (
              <button
                key={item.id}
                style={{
                  ...styles.checkItem,
                  ...(item.checked ? styles.checkItemDone : {}),
                }}
                onClick={() => toggle(item.id)}
              >
                <div
                  style={{
                    ...styles.checkBox,
                    ...(item.checked ? styles.checkBoxDone : {}),
                  }}
                >
                  {item.checked ? (
                    <Check size={14} color="var(--white)" strokeWidth={3} />
                  ) : (
                    <Circle size={14} color="var(--neutral-300)" />
                  )}
                </div>
                <span
                  style={{
                    ...styles.checkIcon,
                    color: item.checked ? 'var(--neutral-400)' : 'var(--primary-500)',
                  }}
                >
                  {item.icon}
                </span>
                <span
                  style={{
                    ...styles.checkLabel,
                    ...(item.checked ? styles.checkLabelDone : {}),
                  }}
                >
                  {item.label}
                </span>
              </button>
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
    maxWidth: 720,
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
  progressCard: {
    padding: 32,
    borderRadius: 'var(--radius-lg)',
    background: 'var(--white)',
    border: '1px solid var(--neutral-200)',
    marginBottom: 32,
  },
  progressTop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  progressInfo: {
    flex: 1,
  },
  progressTitle: {
    fontSize: 20,
    fontWeight: 700,
    color: 'var(--neutral-900)',
    marginBottom: 4,
  },
  progressSub: {
    fontSize: 14,
    color: 'var(--neutral-500)',
  },
  progressCircle: {
    position: 'relative',
    width: 100,
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressPercent: {
    position: 'absolute',
    fontSize: 20,
    fontWeight: 700,
    color: 'var(--primary-700)',
  },
  progressBar: {
    height: 10,
    borderRadius: 100,
    background: 'var(--neutral-100)',
    overflow: 'hidden',
    marginBottom: 12,
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 100,
    background: 'linear-gradient(90deg, var(--primary-400), var(--primary-600))',
    transition: 'width 0.4s ease',
  },
  progressLabel: {
    fontSize: 14,
    fontWeight: 500,
    color: 'var(--primary-600)',
  },
  checklist: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  checkItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    padding: '16px 20px',
    borderRadius: 'var(--radius)',
    background: 'var(--white)',
    border: '1px solid var(--neutral-200)',
    cursor: 'pointer',
    textAlign: 'left' as const,
    transition: 'all 0.15s',
    width: '100%',
  },
  checkItemDone: {
    background: 'var(--neutral-50)',
    borderColor: 'var(--neutral-100)',
  },
  checkBox: {
    width: 28,
    height: 28,
    borderRadius: 8,
    border: '2px solid var(--neutral-300)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    transition: 'all 0.15s',
  },
  checkBoxDone: {
    background: 'var(--primary-500)',
    border: '2px solid var(--primary-500)',
  },
  checkIcon: {
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
  },
  checkLabel: {
    fontSize: 15,
    fontWeight: 500,
    color: 'var(--neutral-800)',
    transition: 'all 0.15s',
  },
  checkLabelDone: {
    textDecoration: 'line-through',
    color: 'var(--neutral-400)',
  },
}
