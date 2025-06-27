'use client';

import { useEffect, useState } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function LandingEditor() {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [campaign, setCampaign] = useState('');
  const [cta, setCta] = useState('');
  const [referralNote, setReferralNote] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [benefits, setBenefits] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const snap = await getDoc(doc(db, 'settings', 'landingV2'));
      if (snap.exists()) {
        const data = snap.data();
        setTitle(data.title || '');
        setSubtitle(data.subtitle || '');
        setCampaign(data.campaign || '');
        setCta(data.cta || '');
        setReferralNote(data.referralNote || '');
        setCompanyName(data.companyName || '');
        setBenefits(data.benefits || []);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const save = async () => {
    await setDoc(doc(db, 'settings', 'landingV2'), {
      title,
      subtitle,
      campaign,
      cta,
      referralNote,
      companyName,
      benefits,
    });
    alert('保存しました');
  };

  if (loading) return <p className="p-4">読み込み中...</p>;

  return (
    <div className="max-w-xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">ランディング編集</h1>
      {/* フォーム略 */}
    </div>
  );
}
