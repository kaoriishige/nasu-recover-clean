'use client';

import { useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function LandingTest() {
  useEffect(() => {
    const fetch = async () => {
      const snap = await getDoc(doc(db, 'settings', 'landingV2'));
      console.log(snap.data());
    };
    fetch();
  }, []);

  return <div className="p-4">テストページ</div>;
}





