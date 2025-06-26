'use client';

import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">管理画面ダッシュボード</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* ランディングページ編集 */}
        <Card
          title="1. ランディングページ編集（予告用）"
          desc="タイトル・説明・CTAボタン文言の編集"
          href="/admin/landing-editor"
        />
        <Card
          title="1-2. ランディングページ編集（本番）"
          desc="本番表示される landingV2 の編集"
          href="/admin/landing-v2-editor"
        />

        {/* 他の管理ページ */}
        <Card title="2. ユーザー管理" desc="紹介者・課金状況・口座登録などの確認" href="/admin/users" />
        <Card title="3. アプリ管理" desc="アプリ情報・カテゴリを確認・追加・編集" href="/admin/apps" />
        <Card title="4. 問い合わせ管理" desc="ユーザーからの問い合わせ一覧を確認" href="/admin/inquiries" />
        <Card title="5. 紹介報酬管理" desc="紹介件数・報酬額・支払い状況を確認" href="/admin/rewards" />
        <Card title="6. CSV出力" desc="報酬データをCSVでダウンロード" href="/admin/export" />
        <Card title="7. 関数手動実行" desc="月次集計・CSV生成などのCloud Functionを実行" href="/admin/functions" />
        <Card title="8. 運用ガイド" desc="ChatGPT質問テンプレート・サポート一覧" href="/admin/help" />
      </div>
    </div>
  );
}

function Card({ title, desc, href }: { title: string; desc: string; href: string }) {
  return (
    <Link href={href} className="block border rounded-lg p-6 bg-white shadow hover:shadow-md transition">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-sm text-gray-600">{desc}</p>
    </Link>
  );
}



