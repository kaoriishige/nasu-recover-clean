export default function TestLanding() {
  return (
    <div
      style={{
        background: 'linear-gradient(to right, #3b82f6, #9333ea)',
        minHeight: '100vh',
        color: 'white',
        textAlign: 'center',
        padding: '4rem 1rem',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>これはテスト用ランディング</h1>
      <p style={{ fontSize: '1.2rem', margin: '1rem 0' }}>
        本番を壊さず、LINEボタンの動作確認専用です。
      </p>
      <a
        href="https://lin.ee/jSgXSlq"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
          alt="友だち追加"
          height="36"
          style={{ border: 0 }}
        />
      </a>
    </div>
  )
}
