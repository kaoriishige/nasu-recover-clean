import { useEffect, useState } from 'react';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

type AppData = {
  id: string;
  name: string;
  description: string;
  emotions: string[];
  functions: string[];
};

export default function AdminAppsPage() {
  const [apps, setApps] = useState<AppData[]>([]);

  useEffect(() => {
    const fetchApps = async () => {
      const snapshot = await getDocs(collection(db, 'apps'));
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Omit<AppData, 'id'>),
      }));
      setApps(data);
    };
    fetchApps();
  }, []);

  const handleUpdate = async (id: string, field: keyof AppData, value: string) => {
    const newApps = apps.map(app =>
      app.id === id ? { ...app, [field]: value } : app
    );
    setApps(newApps);
    await updateDoc(doc(db, 'apps', id), { [field]: value });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">アプリ一覧（編集）</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {apps.map(app => (
          <div key={app.id} className="border p-4 rounded shadow">
            <input
              value={app.name}
              onChange={e => handleUpdate(app.id, 'name', e.target.value)}
              className="font-bold text-lg w-full border mb-2 p-1"
            />
            <textarea
              value={app.description}
              onChange={e => handleUpdate(app.id, 'description', e.target.value)}
              className="w-full border mb-2 p-1 text-sm"
            />
            <p className="text-xs text-gray-500">ID: {app.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


