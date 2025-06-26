// ✅ 管理画面共通レイアウト（ナビゲーション＋ログアウト）
// /components/admin/AdminLayout.tsx

'use client'

import Link from 'next/link'
import { getAuth, signOut } from 'firebase/auth'
import { app } from '@/lib/firebase'
import { useRouter } from 'next/router'

const auth = getAuth(app)

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const handleLogout = async () => {
    await signOut(auth)
    router.push('/login')
  }

  return (
    <div>
      <nav style={{
        padding: '1rem',
        backgroundColor: '#f0f0f0',
        borderBottom: '1px solid #ccc',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '1rem'
      }}>
        <Link href="/admin" style={link}>🏠 ダッシュボード</Link>
        <Link href="/admin/apps" style={link}>アプリ</Link>
        <Link href="/admin/users" style={link}>ユーザー</Link>
        <Link href="/admin/rewards" style={link}>報酬</Link>
        <Link href="/admin/export" style={link}>CSV出力</Link>
        <Link href="/admin/functions" style={link}>関数実行</Link>
        <Link href="/admin/inquiries" style={link}>お問い合わせ</Link>
        <Link href="/admin/landing-editor" style={link}>LP編集</Link>
        <Link href="/admin/help" style={link}>ヘルプ</Link>
        <button onClick={handleLogout} style={button}>ログアウト</button>
      </nav>
      <div style={{ padding: '2rem' }}>{children}</div>
    </div>
  )
}

const link: React.CSSProperties = {
  textDecoration: 'none',
  color: '#0070f3',
  fontWeight: 'bold'
}

const button: React.CSSProperties = {
  padding: '0.5rem 1rem',
  backgroundColor: '#999',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
}
