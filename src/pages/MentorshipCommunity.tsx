import { useState } from 'react'
import { Calendar, MessageCircle, Send, User } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const mentors = [
  {
    name: 'Rina Wijaya',
    role: 'Masters Student at University of Melbourne',
    country: 'Australia',
    intro: 'Helped 20+ students navigate Australian university applications and scholarships.',
    color: 'var(--primary-500)',
  },
  {
    name: 'Budi Santoso',
    role: 'Software Engineer at a Taipei Tech Company',
    country: 'Taiwan',
    intro: 'Went through the Taiwan talent program and can guide you through the process.',
    color: 'var(--accent-500)',
  },
  {
    name: 'Siti Aisyah',
    role: 'Finance Professional in Singapore',
    country: 'Singapore',
    intro: 'From Jakarta to NUS to a career in Singapore finance. Ask me anything!',
    color: 'var(--warning-500)',
  },
  {
    name: 'Andi Pratama',
    role: 'Data Analyst in Toronto',
    country: 'Canada',
    intro: 'Navigated the study-to-PR pathway in Canada. Happy to share my experience.',
    color: 'var(--error-500)',
  },
  {
    name: 'Dewi Lestari',
    role: 'PhD Researcher at Monash University Malaysia',
    country: 'Malaysia',
    intro: 'Affordable quality education in Malaysia - I can show you how it works.',
    color: 'var(--primary-600)',
  },
  {
    name: 'Fajar Nugroho',
    role: 'Product Designer in Sydney',
    country: 'Australia',
    intro: 'From Bandung to Sydney - I know the creative industry landscape in Australia.',
    color: 'var(--primary-400)',
  },
]

const initialPosts = [
  {
    author: 'Maya S.',
    time: '2 hours ago',
    text: 'Just got accepted into a university in Taiwan! Anyone else going this fall?',
    replies: 5,
  },
  {
    author: 'Rizky A.',
    time: '5 hours ago',
    text: 'What documents do I need for the Australia student visa? The checklist on Chaulo helped a lot but I want to double-check.',
    replies: 8,
  },
  {
    author: 'Putri D.',
    time: '1 day ago',
    text: 'Sharing my experience: I got a full scholarship to NUS Singapore. Happy to answer questions about the application process!',
    replies: 12,
  },
]

export default function MentorshipCommunity() {
  const { t } = useTranslation()
  const [posts, setPosts] = useState(initialPosts)
  const [newPost, setNewPost] = useState('')

  const handlePost = () => {
    if (!newPost.trim()) return
    setPosts([
      {
        author: 'You',
        time: 'Just now',
        text: newPost,
        replies: 0,
      },
      ...posts,
    ])
    setNewPost('')
  }

  return (
    <div>
      {/* Mentorship Section */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <h1 style={styles.title}>{t('mentorship.title')}</h1>
          <p style={styles.subtitle}>
            {t('mentorship.subtitle')}
          </p>
        </div>
      </section>

      {/* Mentors */}
      <section style={styles.mentorsSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Meet Our Mentors</h2>
          <p style={styles.sectionSub}>
            Alumni studying abroad and professionals working overseas are here to
            guide you.
          </p>
          <div style={styles.mentorGrid}>
            {mentors.map((m, i) => (
              <div key={i} style={styles.mentorCard}>
                <div style={styles.mentorPhoto}>
                  <User size={32} color="var(--neutral-400)" />
                </div>
                <div style={styles.mentorBadge}>
                  <span style={{ fontSize: 14 }}>{m.country === 'Australia' ? '\u{1F1E6}\u{1F1FA}' : m.country === 'Taiwan' ? '\u{1F1F9}\u{1F1FC}' : m.country === 'Singapore' ? '\u{1F1F8}\u{1F1EC}' : m.country === 'Canada' ? '\u{1F1E8}\u{1F1E6}' : '\u{1F1F2}\u{1F1FE}'}</span>
                  <span style={styles.mentorCountry}>{m.country}</span>
                </div>
                <h3 style={styles.mentorName}>{m.name}</h3>
                <p style={styles.mentorRole}>{m.role}</p>
                <p style={styles.mentorIntro}>{m.intro}</p>
                <button style={styles.bookBtn}>
                  <Calendar size={16} />
                  Book Session
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section style={styles.communitySection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Community Discussion</h2>
          <p style={styles.sectionSub}>
            Ask questions, share experiences, and support each other on the
            journey abroad.
          </p>

          {/* Post Input */}
          <div style={styles.postInput}>
            <div style={styles.postAvatar}>
              <User size={20} color="var(--neutral-400)" />
            </div>
            <input
              style={styles.postField}
              placeholder="Share a question or experience..."
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handlePost()}
            />
            <button style={styles.postBtn} onClick={handlePost}>
              <Send size={16} />
            </button>
          </div>

          {/* Posts */}
          <div style={styles.postsList}>
            {posts.map((p, i) => (
              <div key={i} style={styles.postCard}>
                <div style={styles.postHeader}>
                  <div style={styles.postAvatarSmall}>
                    <User size={16} color="var(--neutral-400)" />
                  </div>
                  <div>
                    <strong style={styles.postAuthor}>{p.author}</strong>
                    <span style={styles.postTime}>{p.time}</span>
                  </div>
                </div>
                <p style={styles.postText}>{p.text}</p>
                <div style={styles.postActions}>
                  <button style={styles.replyBtn}>
                    <MessageCircle size={14} /> {p.replies} replies
                  </button>
                </div>
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
  mentorsSection: {
    padding: '64px 24px',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 700,
    color: 'var(--neutral-900)',
    marginBottom: 8,
  },
  sectionSub: {
    fontSize: 15,
    color: 'var(--neutral-500)',
    marginBottom: 32,
    lineHeight: 1.6,
  },
  mentorGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 20,
  },
  mentorCard: {
    padding: 28,
    borderRadius: 'var(--radius-lg)',
    background: 'var(--white)',
    border: '1px solid var(--neutral-200)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center' as const,
    gap: 8,
  },
  mentorPhoto: {
    width: 72,
    height: 72,
    borderRadius: '50%',
    background: 'var(--neutral-100)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  mentorBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 4,
    padding: '4px 12px',
    borderRadius: 100,
    background: 'var(--primary-50)',
    fontSize: 13,
  },
  mentorCountry: {
    fontWeight: 600,
    color: 'var(--primary-700)',
    fontSize: 13,
  },
  mentorName: {
    fontSize: 17,
    fontWeight: 700,
    color: 'var(--neutral-900)',
  },
  mentorRole: {
    fontSize: 13,
    color: 'var(--neutral-500)',
    lineHeight: 1.4,
  },
  mentorIntro: {
    fontSize: 14,
    color: 'var(--neutral-600)',
    lineHeight: 1.5,
    marginBottom: 4,
  },
  bookBtn: {
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
    marginTop: 4,
    transition: 'background 0.15s',
  },
  communitySection: {
    padding: '64px 24px',
    background: 'var(--neutral-50)',
  },
  postInput: {
    display: 'flex',
    gap: 12,
    alignItems: 'center',
    padding: 16,
    borderRadius: 'var(--radius-lg)',
    background: 'var(--white)',
    border: '1px solid var(--neutral-200)',
    marginBottom: 24,
  },
  postAvatar: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    background: 'var(--neutral-100)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  postField: {
    flex: 1,
    border: 'none',
    outline: 'none',
    fontSize: 14,
    color: 'var(--neutral-800)',
    background: 'transparent',
  },
  postBtn: {
    width: 40,
    height: 40,
    borderRadius: 'var(--radius-sm)',
    background: 'var(--primary-600)',
    color: 'var(--white)',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    transition: 'background 0.15s',
  },
  postsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  postCard: {
    padding: 20,
    borderRadius: 'var(--radius-lg)',
    background: 'var(--white)',
    border: '1px solid var(--neutral-200)',
  },
  postHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    marginBottom: 12,
  },
  postAvatarSmall: {
    width: 32,
    height: 32,
    borderRadius: '50%',
    background: 'var(--neutral-100)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  postAuthor: {
    fontSize: 14,
    fontWeight: 600,
    color: 'var(--neutral-900)',
    marginRight: 8,
  },
  postTime: {
    fontSize: 12,
    color: 'var(--neutral-400)',
  },
  postText: {
    fontSize: 14,
    lineHeight: 1.6,
    color: 'var(--neutral-700)',
    marginBottom: 12,
  },
  postActions: {
    display: 'flex',
    gap: 16,
  },
  replyBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: '6px 12px',
    borderRadius: 'var(--radius-sm)',
    background: 'var(--neutral-50)',
    color: 'var(--neutral-500)',
    fontSize: 13,
    fontWeight: 500,
    border: 'none',
    cursor: 'pointer',
    transition: 'background 0.15s',
  },
}
