// pages/test-landing.tsx
export default function TestLanding() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem', background: '#f0f0f0' }}>
      <h1 style={{ fontSize: '28px', color: '#1e40af' }}>これはテスト用ランディング</h1>
      <p style={{ fontSize: '16px', marginTop: '1rem' }}>
        本番とは別で、LINEボタン表示テスト中です。
      </p>
      <a
        href="https://lin.ee/jSgXSlq"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'inline-block', marginTop: '2rem' }}
      >
        <img
          src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
          alt="友だち追加"
          height="36"
          style={{ border: 0 }}
        />
      </a>
    </div>
  );
}







