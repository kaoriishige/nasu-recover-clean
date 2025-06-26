import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

type AppData = {
  name: string;
  description: string;
  emotions: string[];
  functions: string[];
  imageUrl?: string;
};

export default function AppDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [app, setApp] = useState<AppData | null>(null);

  useEffect(() => {
    if (!id) return;
    const fetchApp = async () => {
      const snap = await getDoc(doc(db, 'apps', id as string));
      if (snap.exists()) {
        setApp(snap.data() as AppData);
      }
    };
    fetchApp();
  }, [id]);

  if (!app) return <div className="p-6">読み込み中...</div>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{app.name}</h1>
      {app.imageUrl && (
        <img src={app.imageUrl} alt={app.name} className="w-full rounded mb-4" />
      )}
      <p className="mb-4 text-gray-700">{app.description}</p>
      <div className="mb-2 text-sm text-blue-600">
        感情ジャンル：{app.emotions.join(', ')}
      </div>
      <div className="text-sm text-green-600">
        機能ジャンル：{app.functions.join(', ')}
      </div>
    </div>
  );
}
