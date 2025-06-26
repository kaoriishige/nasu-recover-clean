import { useEffect, useState } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function LandingEditorPage() {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [campaign, setCampaign] = useState('');
  const [cta, setCta] = useState('');
  const [benefits, setBenefits] = useState<string[]>([]);
  const [referralNote, setReferralNote] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetch = async () => {
      const ref = doc(db, 'settings', 'landingV2');
      const snap = await getDoc(ref);
      if (snap.exists()) {
        const d = snap.data();
        setTitle(d.title || '');
        setSubtitle(d.subtitle || '');
        setCampaign(d.campaign || '');
        setCta(d.cta || '');
        setBenefits(d.benefits || []);
        setReferralNote(d.referralNote || '');
        setCompanyName(d.companyName || '');
      }
    };
    fetch();
  }, []);

  const handleSave = async () => {
    const ref = doc(db, 'settings', 'landingV2');
    await setDoc(ref, {
      title,
      subtitle,
      campaign,
      cta,
      benefits,
      referralNote,
      companyName,
    });
    setMessage('✅ 保存しました');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">ランディングページ編集（本番用）</h1>

      <label className="block font-semibold">タイトル</label>
      <input value={title} onChange={e => setTitle(e.target.value)} className="w-full border p-2 mb-4" />

      <label className="block font-semibold">サブタイトル</label>
      <input value={subtitle} onChange={e => setSubtitle(e.target.value)} className="w-full border p-2 mb-4" />

      <label className="block font-semibold">キャンペーン文</label>
      <input value={campaign} onChange={e => setCampaign(e.target.value)} className="w-full border p-2 mb-4" />

      <label className="block font-semibold">CTAボタン文言</label>
      <input value={cta} onChange={e => setCta(e.target.value)} className="w-full border p-2 mb-4" />

      <label className="block font-semibold">ベネフィット（改行区切りで複数）</label>
      <textarea
        value={benefits.join('\n')}
        onChange={e => setBenefits(e.target.value.split('\n'))}
        className="w-full border p-2 mb-4"
        rows={5}
      />

      <label className="block font-semibold">紹介制度の説明</label>
      <textarea
        value={referralNote}
        onChange={e => setReferralNote(e.target.value)}
        className="w-full border p-2 mb-4"
      />

      <label className="block font-semibold">会社情報（フッター）</label>
      <textarea
        value={companyName}
        onChange={e => setCompanyName(e.target.value)}
        className="w-full border p-2 mb-4"
      />

      <button onClick={handleSave} className="bg-blue-600 text-white px-6 py-2 rounded">保存する</button>
      {message && <p className="text-green-600 mt-4">{message}</p>}
    </div>
  );
}


