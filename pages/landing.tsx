import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function LandingPage() {
  const [data, setData] = useState({
    title: '',
    description: '',
    cta: '',
    company: '',
    qrImageUrl: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const ref = doc(db, 'settings', 'landing');
      const snap = await getDoc(ref);
      if (snap.exists()) {
        const d = snap.data();
        setData({
          title: d.title || '',
          description: d.description || '',
          cta: d.cta || '',
          company: d.company || '',
          qrImageUrl: d.qrImageUrl || '',
        });
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ background: '#fff', minHeight: '100vh', color: '#333' }}>
      {/* ファーストビュー */}
      <section style={{ background: 'linear-gradient(to right, #3b82f6, #9333ea)', color: '#fff', padding: '4rem 2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '1rem' }}>{data.title}</h1>
        <p style={{ fontSize: '16px', marginBottom: '2rem' }}>{data.description}</p>
        <a
          href="#"
          style={{
            backgroundColor: '#facc15',
            color: '#000',
            fontWeight: 'bold',
            padding: '0.75rem 1.5rem',
            borderRadius: '999px',
            fontSize: '16px',
            display: 'inline-block',
          }}
        >
          {data.cta}
        </a>
      </section>

      {/* QRコードセクション */}
      {data.qrImageUrl && (
        <section style={{ textAlign: 'center', padding: '3rem 1rem' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '1rem' }}>LINE登録はこちら</h2>
          <img src={data.qrImageUrl} alt="QRコード" style={{ width: '160px', height: '160px', objectFit: 'contain' }} />
        </section>
      )}

      {/* フッター：会社情報 */}
      <footer style={{ backgroundColor: '#f3f4f6', fontSize: '12px', textAlign: 'center', padding: '1rem' }}>
        <div dangerouslySetInnerHTML={{ __html: data.company }} />
      </footer>
    </div>
  );
}
