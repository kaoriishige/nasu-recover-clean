import Link from 'next/link'

export default function AdminPage() {
  const pages = [
    { href: "/admin/apps", title: "アプリ管理" },
    { href: "/admin/rewards", title: "紹介報酬管理" },
    { href: "/admin/export", title: "CSV出力" },
    { href: "/admin/functions", title: "関数実行" },
    { href: "/admin/users", title: "ユーザー管理" },
    { href: "/admin/inquiries", title: "お問い合わせ管理" },
    { href: "/admin/landing-editor", title: "ランディング編集" },
    { href: "/admin/help", title: "質問ガイド" },
  ]

  return (
    <main style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>管理者ダッシュボード</h1>
      <ul>
        {pages.map((p) => (
          <li key={p.href}>
            <Link href={p.href}>{p.title} →</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
