'use client'

import Link from 'next/link'

export default function AdminDashboardPage() {
  const sections = [
    {
      href: '/admin/landing-editor',
      title: 'ランディングページ編集',
      description: 'タイトル・説明・CTAボタン文言の編集',
    },
    {
      href: '/admin/users',
      title: 'ユーザー管理',
      description: '紹介者・課金状況・口座登録などの確認',
    },
    {
      href: '/admin/apps',
      title: 'アプリ管理',
      description: 'アプリ情報・カテゴリを確認・追加・編集',
    },
    {
      href: '/admin/inquiries',
      title: '問い合わせ管理',
      description: 'ユーザーからの問い合わせ一覧を確認',
    },
    {
      href: '/admin/rewards',
      title: '紹介報酬管理',
      description: '紹介件数・報酬額・支払い状況を確認',
    },
    {
      href: '/admin/export',
      title: 'CSV出力',
      description: '報酬データをCSVでダウンロード',
    },
    {
      href: '/admin/functions',
      title: '関数手動実行',
      description: '月次集計・CSV生成などのCloud Functionを実行',
    },
    {
      href: '/admin/help',
      title: '運用ガイド',
      description: 'ChatGPT質問テンプレート・サポート一覧',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-8">管理画面ダッシュボード</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {sections.map((section, index) => (
          <Link
            key={section.href}
            href={section.href}
            className="block p-6 bg-white rounded-2xl shadow hover:bg-blue-50 transition cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-1">
              {index + 1}. {section.title}
            </h2>
            <p className="text-sm text-gray-500">{section.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}







