import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '1.5rem' }}>
        管理ダッシュボード
      </h1>

      <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <li>
          <Link href="/admin/landing-editor" legacyBehavior>
            <a style={linkStyle}>ランディングページ編集（本番反映）</a>
          </Link>
        </li>
        <li>
          <Link href="/landing-v2" legacyBehavior>
            <a style={linkStyle}>公開ランディングページ（本番確認）</a>
          </Link>
        </li>
        {/* 他のリンクも続けて追加可能 */}
      </ul>
    </div>
  );
}

const linkStyle = {
  display: 'block',
  padding: '1rem',
  border: '1px solid #ccc',
  borderRadius: '8px',
  background: '#f9f9f9',
  textDecoration: 'none',
  color: '#333',
  fontWeight: 'bold',
};


