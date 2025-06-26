'use client';

import { useEffect, useState } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function LandingEditorV3() {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [campaign, setCampaign] = useState('');
  const [cta, setCta] = useState('');
  const [benefitsText, setBenefitsText] = useState('');
  const [referralNote, setReferralNote] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const load = async () => {
      const ref = doc(db, 'settings', 'landingV2');
      const snap = await getDoc(ref);
      if (snap.exists()) {
        const d = snap.data();
        console.log('✅ Firestore 読み込み成功:', d); // ← 追加ログ
        setTitle(d.title || '');
        setSubtitle(d.subtitle || '');
        setCampaign(d.campaign || '');
        setCta(d.cta || '');
        setBenefitsText((d.benefits || []).join('\n'));
        setReferralNote(d.referralNote || '');
        setCompanyName(d.companyName || '');
      } else {
        console.warn('⚠️ landingV2 ドキュメントが存在しません');
      }
    };
    load();
  }, []);

  const save = async () => {
    const ref = doc(db, 'settings', 'landingV2');
    await setDoc(ref, {
      title,
      subtitle,
      campaign,
      cta,
      benefits: benefitsText.split('\n').filter(Boolean),
      referralNote,
      companyName,
    });
    console.log('✅ Firestore 書き込み成功'); // ← 追加ログ
    setMessage('✅ 保存しました');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">【v3】本番ランディングページ編集</h1>

      <label className="font-semibold block">タイトル</label>
      <input value={title} onChange={e => setTitle(e.target.value)} className="w-full border p-2 mb-4" />

      <label className="font-semibold block">サブタイトル</label>
      <input value={subtitle} onChange={e => setSubtitle(e.target.value)} className="w-full border p-2 mb-4" />

      <label className="font-semibold block">キャンペーン文</label>
      <input value={campaign} onChange={e => setCampaign(e.target.value)} className="w-full border p-2 mb-4" />

      <label className="font-semibold block">CTA文言</label>
      <input value={cta} onChange={e => setCta(e.target.value)} className="w-full border p-2 mb-4" />

      <label className="font-semibold block">ベネフィット（改行区切り）</label>
      <textarea value={benefitsText} onChange={e => setBenefitsText(e.target.value)} className="w-full border p-2 mb-4" rows={4} />

      <label className="font-semibold block">紹介制度の説明</label>
      <textarea value={referralNote} onChange={e => setReferralNote(e.target.value)} className="w-full border p-2 mb-4" rows={3} />

      <label className="font-semibold block">会社情報</label>
      <textarea value={companyName} onChange={e => setCompanyName(e.target.value)} className="w-full border p-2 mb-4" rows={3} />

      <button onClick={save} className="bg-blue-600 text-white px-6 py-2 rounded">保存する</button>
      {message && <p className="text-green-600 mt-4">{message}</p>}
    </div>
  );
}
