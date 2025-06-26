import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import Link from 'next/link';

type AppData = {
  id: string;
  name: string;
  description: string;
  emotions: string[];
  functions: string[];
  imageUrl?: string;
};

export default function AppsListPage() {
  const [apps, setApps] = useState<AppData[]>([]);

  useEffect(() => {
    const fetchApps = async () => {
      const snap = await getDocs(collection(db, 'apps'));
      const data = snap.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Omit<AppData, 'id'>),
      }));
      setApps(data);
    };
    fetchApps();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">みんなの那須アプリ一覧</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apps.map(app => (
          <Link key={app.id} href={`/apps/${app.id}`}>
            <div className="border rounded-xl p-4 hover:shadow-md cursor-pointer">
              {app.imageUrl && (
                <img src={app.imageUrl} alt={app.name} className="w-full h-40 object-cover mb-2 rounded" />
              )}
              <h2 className="text-xl font-semibold">{app.name}</h2>
              <p className="text-sm text-gray-600">{app.description}</p>
              <p className="text-sm text-blue-500 mt-1">感情: {app.emotions.join(', ')}</p>
              <p className="text-sm text-green-500">機能: {app.functions.join(', ')}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
