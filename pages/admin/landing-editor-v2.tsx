'use client';

import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

type LandingData = {
  title: string;
  subtitle: string;
  campaign: string;
  cta: string;
  benefits: string[];
  referralNote: string;
  companyName: string;
};

export default function LandingV2() {
  const [data, setData] = useState<LandingData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, 'settings', 'landingV2');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setData(docSnap.data() as LandingData);
      }
    };
    fetchData();
  }, []);

  if (!data) return <p className="p-6 text-gray-600">読み込み中...</p>;

  return (
    <div className="bg-white text-gray-800">
      {/* ✅ ファーストビュー */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.title}</h1>
        <p className="text-lg mb-6">{data.subtitle}</p>
        <p className="text-yellow-300 text-lg font-semibold mb-4">{data.campaign}</p>
        <a
          href="#register"
          className="bg-white text-blue-600 font-bold py-3 px-6 rounded shadow hover:bg-gray-100 transition"
        >
          {data.cta}
        </a>
      </section>

      {/* ✅ ベネフィット */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-6">こんなお悩み、ありませんか？</h2>
        <ul className="max-w-xl mx-auto text-left space-y-3 text-lg">
          {data.benefits.map((item, index) => (
            <li key={index}>・{item}</li>
          ))}
        </ul>
      </section>

      {/* ✅ 特徴・価値セクション */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-6">これだけの価値が、月額980円。</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-lg text-gray-700">
          <li>✅ 初回7日間は完全無料</li>
          <li>✅ 初月は480円でキャンペーン中</li>
          <li>✅ 月額980円で55個のアプリが使い放題</li>
          <li>✅ フードロス・運勢・健康・子育て・地域まで網羅</li>
          <li>✅ 家族で使える全年齢対応</li>
        </ul>
        <p className="text-center text-sm mt-6 text-gray-500">
          ※いつでもキャンセル可能。継続の義務なし。
        </p>
      </section>

      {/* ✅ 紹介制度 */}
      <section className="bg-green-50 py-12 px-6 text-center" id="register">
        <h2 className="text-2xl font-bold mb-6">紹介制度で“実質無料”どころか、副収入に！</h2>

        <p className="text-lg mb-3 text-gray-800">
          🎉 <span className="font-bold">8月末</span>までに紹介した方には →
          <span className="text-red-600 font-bold">紹介報酬【30％】ずっと継続!!</span>
        </p>

        <p className="text-lg mb-3 text-gray-800">
          🗓 <span className="font-bold">9月から初めて紹介</span>した方は →
          <span className="text-blue-600 font-bold">紹介報酬【20％】</span>
        </p>

        <ul className="text-lg space-y-2 text-gray-800 mt-6 mb-6">
          <li>🎯 1人紹介 → 月294円</li>
          <li>💸 4人紹介 → 実質無料（980円カバー）</li>
          <li>💼 10人紹介 → 約月30,000円の副収入</li>
        </ul>

        <p className="text-sm text-gray-600">{data.referralNote}</p>
      </section>

      {/* ✅ LINE登録 */}
      <section className="bg-blue-50 py-12 px-6 text-center">
        <h2 className="text-xl font-bold mb-4">🎁 先行登録キャンペーン 実施中！</h2>
        <p className="text-lg mb-3 text-gray-700">
          LINE登録で、アプリ先行体験＋紹介報酬30％継続＋LINE限定情報が届きます。
        </p>
        <img src="/qrcode-line.png" alt="LINE登録QR" className="w-40 mx-auto mt-4" />
        <p className="text-sm text-gray-500 mt-2">※QRコードをスマホで読み取って登録</p>
      </section>

      {/* ✅ フッター（会社情報） */}
      <footer className="bg-gray-100 text-center py-6 text-sm text-gray-600 leading-relaxed">
        運営：みんなの那須アプリ<br />
        株式会社adtown<br />
        〒329-2711 栃木県那須塩原市石林698-35<br />
        TEL:0287-39-7577
      </footer>
    </div>
  );
}
