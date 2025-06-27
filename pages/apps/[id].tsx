'use client';

import { useEffect, useState } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useRouter } from 'next/navigation';

export default function EditApp({ params }: { params: { id: string } }) {
  const [name, setName] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetch = async () => {
      const snap = await getDoc(doc(db, 'apps', params.id));
      if (snap.exists()) {
        const data = snap.data();
        setName(data.name || '');
      }
    };
    fetch();
  }, [params.id]);

  const save = async () => {
    await updateDoc(doc(db, 'apps', params.id), { name });
    alert('保存しました');
    router.push('/admin/apps');
  };

  return (
    <div className="p-6 max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">アプリ編集</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border rounded p-2 w-full"
      />
      <button
        onClick={save}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        保存
      </button>
    </div>
  );
}

