import Link from 'next/link'

const emotions = [
  '癒やされたい',
  '困っている',
  'ヒマつぶし',
  'お得を探したい',
  'つながりたい',
  '自分を知りたい',
  '色んなこと知りたい',
  'もっとデキる',
  'スッキリしたい',
  'ワクワクしたい',
  '誰かの役に立ちたい',
]

export default function EmotionCategoryPage() {
  return (
    <main style={{ padding: '2rem', maxWidth: '720px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '1rem' }}>感情カテゴリで探す</h1>
      <ul style={{ display: 'grid', gap: '1rem', gridTemplateColumns: '1fr 1fr' }}>
        {emotions.map((emotion) => (
          <li key={emotion} style={{ border: '1px solid #ccc', borderRadius: '6px', padding: '1rem' }}>
            <Link href={`/apps/emotion/${encodeURIComponent(emotion)}`} legacyBehavior>
              <a style={{ color: '#0070f3', fontWeight: 'bold' }}>{emotion} →</a>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
