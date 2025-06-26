'use client'

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'

export default function AppDetailPage() {
  const router = useRouter()
  const { id } = router.query as { id: string }
  const [app, setApp] = useState<any>(null)

  useEffect(() => {
    if (!id) return
    const fetch = async () => {
      const ref = doc(db, 'apps', id)
      const snap = await getDoc(ref)
      if (snap.exists()) setApp(snap.data())
    }
    fetch()
  }, [id])

  if (!app) return <p style={{ padding: '2rem' }}>読み込み中...</p>

  return (
    <div style={{ padding: '2rem', maxWidth: '640px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>{app.name}</h1>
      <p style={{ margin: '1rem 0' }}>{app.description}</p>
      <p style={{ fontSize: '14px', color: '#666' }}>
        カテゴリ: {app.categories?.join(', ') || '未設定'}
      </p>
    </div>
  )
}
