import Link from 'next/link'

const categories = [
  '生活情報',
  '健康支援',
  '子育て',
  '節約・特売',
  '占い・診断',
  '相談・悩み解決',
  '地域情報',
  'エンタメ・趣味',
]

export default function FeatureCategoryPage() {
  return (
    <main style={{ padding: '2rem', maxWidth: '720px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '1rem' }}>機能ジャンルで探す</h1>
      <ul style={{ display: 'grid', gap: '1rem', gridTemplateColumns: '1fr 1fr' }}>
        {categories.map((category) => (
          <li key={category} style={{ border: '1px solid #ccc', borderRadius: '6px', padding: '1rem' }}>
            <Link href={`/apps/category/${encodeURIComponent(category)}`} legacyBehavior>
              <a style={{ color: '#0070f3', fontWeight: 'bold' }}>{category} →</a>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
