export default function TestLanding() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <h1>これはテスト用ランディング</h1>
      <p>本番を壊さず、LINEボタンの動作確認専用です。</p>
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
  );
}

