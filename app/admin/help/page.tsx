// app/admin/help/page.tsx
'use client'

import React from 'react'

export default function AdminHelpPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-4">運用サポート・質問ガイド</h1>

      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-2">📘 よくある質問</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>紹介料の割合を変更したい場合は？ → ChatGPTに「紹介料30%を20%に変えたい」と聞いてください。</li>
          <li>アプリのカテゴリを追加するには？ → 「Firestoreのカテゴリフィールドに〇〇を追加」と入力</li>
          <li>特定の月の紹介報酬を確認したい → 「2025年7月の紹介報酬CSVを出力」と聞く</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">🖼 質問するときの画像例</h2>
        <p className="text-gray-600 mb-2">画面のスクリーンショットを添えて質問すると、より正確にサポートできます。</p>
        <div className="bg-gray-100 border p-4 rounded text-sm text-gray-700">
          例：このエラーが消えません。どうすれば？
        </div>

        <h2 className="text-xl font-semibold mt-6 mb-2">💡 ChatGPTへの聞き方例</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>「月末の紹介報酬CSVを自動で出したい」</li>
          <li>「Firestoreのこのコレクション構造でいい？」</li>
          <li>「この画面にFirestoreを接続して」</li>
        </ul>
      </div>
    </div>
  )
}
