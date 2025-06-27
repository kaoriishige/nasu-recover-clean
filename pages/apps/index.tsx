'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';

type AppData = {
  name: string;
};

export default function AppIndex() {
  const [apps, setApps] = useState<AppData[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const snap = await getDocs(collection(db, 'apps'));
      const list = snap.docs.map((doc) => doc.data() as AppData);
      setApps(list);
    };
    fetch();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">アプリ一覧</h1>
      <ul className="space-y-2">
        {apps.map((app, i) => (
          <li key={i}>{app.name}</li>
        ))}
      </ul>
    </div>
  );
}
