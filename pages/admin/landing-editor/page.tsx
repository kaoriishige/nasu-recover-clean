'use client';

import { useEffect, useState } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function LandingEditorPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [cta, setCta] = useState('');
  const [company, setCompany] = useState('');
  const [qrImageUrl, setQrImageUrl] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, 'settings', 'landing');
      const snap = await getDoc(docRef);
      if (snap.exists()) {
        const data = snap.data();
        setTitle(data.title || '');
        setDescription(data.description || '');
        setCta(data.cta || '');
        setCompany(data.company || '');
        setQrImageUrl(data.qrImageUrl || '');
      }
    };
    fetchData();
  }, []);

  const handleSave = async () => {
    const docRef = doc(db, 'settings', 'landing');
    await setDoc(docRef, {
      title,
      description,
      cta,
      company,
      qrImageUrl,
    });
    setMessage('✅ 保存しました');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="p-8 max-w-xl">
      <h1 className="text-2xl font-bold mb-6">ランディングページ編集</h1>

      <label className="block mb-2 font-semibold">タイトル</label>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="w-full border p-2 mb-4"
      />

      <label className="block mb-2 font-semibold">説明文</label>
      <textarea
        value={description}
        onChange={e => setDescription(e.target.value)}
        className="w-full border p-2 mb-4"
      />

      <label className="block mb-2 font-semibold">CTAボタン文言</label>
      <input
        value={cta}
        onChange={e => setCta(e.target.value)}
        className="w-full border p-2 mb-4"
      />

      <label className="block mb-2 font-semibold">会社情報（HTML可）</label>
      <textarea
        value={company}
        onChange={e => setCompany(e.target.value)}
        className="w-full border p-2 mb-4"
      />

      <label className="block mb-2 font-semibold">QR画像のURL</label>
      <input
        value={qrImageUrl}
        onChange={e => setQrImageUrl(e.target.value)}
        className="w-full border p-2 mb-4"
      />

      <button
        onClick={handleSave}
        className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
      >
        保存する
      </button>

      {message && <p className="text-green-600 mt-4">{message}</p>}
    </div>
  );
}
