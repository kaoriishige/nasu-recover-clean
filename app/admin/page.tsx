// app/admin/page.tsx
'use client'

import Link from 'next/link'

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">管理ダッシュボード</h1>

      <div className="grid gap-4 md:grid-cols-2">
        <Link href="/admin/landing-editor">
          <div className="p-4 bg-white rounded-2xl shadow hover:bg-blue-50 transition">
            <h2 className="text-lg font-semibold">ランディングページ編集</h2>
            <p className="text-sm text-gray-500">タイトル・説明・ボタン文言を編集</p>
          </div>
        </Link>

        <Link href="/admin/users">
          <div className="p-4 bg-white rounded-2xl shadow hover:bg-blue-50 transition">
            <h2 className="text-lg font-semibold">ユーザー管理</h2>
            <p className="text-sm text-gray-500">紹介者、口座、課金情報などを確認</p>
          </div>
        </Link>

        <Link href="/admin/apps">
          <div className="p-4 bg-white rounded-2xl shadow hover:bg-blue-50 transition">
            <h2 className="text-lg font-semibold">アプリ管理</h2>
            <p className="text-sm text-gray-500">アプリ情報やカテゴリを編集・追加</p>
          </div>
        </Link>

        <Link href="/admin/help">
          <div className="p-4 bg-white rounded-2xl shadow hover:bg-blue-50 transition">
            <h2 className="text-lg font-semibold">運用ガイド</h2>
            <p className="text-sm text-gray-500">ChatGPTの質問例や使い方サポート</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

