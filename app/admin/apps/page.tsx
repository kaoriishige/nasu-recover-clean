'use client'

import { useEffect, useState } from 'react'
import { db } from '@/lib/firebase'
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  setDoc,
} from 'firebase/firestore'
import { Dialog } from '@headlessui/react'
import { v4 as uuidv4 } from 'uuid'

type AppData = {
  id: string
  name: string
  description: string
  url: string
  categories: string[]
  isPremium: boolean
}

export default function AdminAppsPage() {
  const [apps, setApps] = useState<AppData[]>([])
  const [editingApp, setEditingApp] = useState<AppData | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    fetchApps()
  }, [])

  const fetchApps = async () => {
    const snapshot = await getDocs(collection(db, 'apps'))
    const data = snapshot.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as Omit<AppData, 'id'>),
    }))
    setApps(data)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('本当に削除しますか？')) return
    await deleteDoc(doc(db, 'apps', id))
    fetchApps()
  }

  const openModal = (app?: AppData) => {
    setEditingApp(
      app || {
        id: '',
        name: '',
        description: '',
        url: '',
        categories: [],
        isPremium: false,
      }
    )
    setIsOpen(true)
  }

  const saveApp = async () => {
    if (!editingApp) return
    const id = editingApp.id || uuidv4()
    const appRef = doc(db, 'apps', id)
    await setDoc(appRef, {
      name: editingApp.name,
      description: editingApp.description,
      url: editingApp.url,
      categories: editingApp.categories,
      isPremium: editingApp.isPremium,
    })
    setIsOpen(false)
    fetchApps()
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">アプリ一覧（管理）</h1>
      <button
        onClick={() => openModal()}
        className="mb-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        ＋ 新規追加
      </button>
      <ul className="space-y-4">
        {apps.map(app => (
          <li key={app.id} className="border p-4 rounded">
            <p className="font-bold">{app.name}</p>
            <p className="text-sm text-gray-600">{app.description}</p>
            <div className="mt-2 space-x-2">
              <button
                onClick={() => openModal(app)}
                className="px-3 py-1 bg-blue-500 text-white rounded"
              >
                編集
              </button>
              <button
                onClick={() => handleDelete(app.id)}
                className="px-3 py-1 bg-red-500 text-white rounded"
              >
                削除
              </button>
            </div>
          </li>
        ))}
      </ul>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded p-6 max-w-md w-full">
            <Dialog.Title className="text-lg font-bold mb-4">アプリ編集</Dialog.Title>
            <input
              type="text"
              placeholder="アプリ名"
              value={editingApp?.name || ''}
              onChange={e => setEditingApp({ ...editingApp!, name: e.target.value })}
              className="w-full border p-2 mb-2"
            />
            <input
              type="text"
              placeholder="説明"
              value={editingApp?.description || ''}
              onChange={e => setEditingApp({ ...editingApp!, description: e.target.value })}
              className="w-full border p-2 mb-2"
            />
            <input
              type="text"
              placeholder="URL"
              value={editingApp?.url || ''}
              onChange={e => setEditingApp({ ...editingApp!, url: e.target.value })}
              className="w-full border p-2 mb-2"
            />
            <input
              type="text"
              placeholder="カテゴリ（カンマ区切り）"
              value={editingApp?.categories.join(',') || ''}
              onChange={e =>
                setEditingApp({
                  ...editingApp!,
                  categories: e.target.value.split(',').map(s => s.trim()),
                })
              }
              className="w-full border p-2 mb-2"
            />
            <label className="flex items-center mb-4">
              <input
                type="checkbox"
                checked={editingApp?.isPremium || false}
                onChange={e => setEditingApp({ ...editingApp!, isPremium: e.target.checked })}
                className="mr-2"
              />
              プレミアムアプリ
            </label>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                キャンセル
              </button>
              <button
                onClick={saveApp}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                保存
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  )
}

