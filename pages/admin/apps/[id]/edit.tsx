'use client'

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'

export default function EditAppPage() {
  const router = useRouter()
  const { id } = router.query as { id: string }
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [categories, setCategories] = useState('')

  useEffect(() => {
    if (!id) return
    const fetch = async () => {
      const ref = doc(db, 'apps', id)
      const snap = await getDoc(ref)
      if (snap.exists()) {
        const data = snap.data()
        setName(data.name || '')
        setDescription(data.description || '')
        setCategories((data.categories || []).join(', '))
      }
    }
    fetch()
  }, [id])

  const save = async () => {
    if (!id) return
    const ref = doc(db, 'apps', id)
    await updateDoc(ref, {
      name,
      description,
      categories: categories.split(',').map(c => c.trim())
    })
    alert('✅ 保存しました')
    router.push('/admin/apps')
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontWeight: 'bold', fontSize: '24px' }}>アプリ編集</h1>
      <label>名前</label>
      <input value={name} onChange={e => setName(e.target.value)} style={{ width: '100%', marginBottom: '1rem' }} />
      <label>説明</label>
      <textarea value={description} onChange={e => setDescription(e.target.value)} style={{ width: '100%', marginBottom: '1rem' }} />
      <label>カテゴリ（カンマ区切り）</label>
      <input value={categories} onChange={e => setCategories(e.target.value)} style={{ width: '100%', marginBottom: '1rem' }} />
      <button onClick={save} style={{ background: 'blue', color: 'white', padding: '0.5rem 1rem' }}>
        保存する
      </button>
    </div>
  )
}
