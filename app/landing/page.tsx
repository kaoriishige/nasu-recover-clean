export default function LandingPage() {
  return (
    <div className="bg-white min-h-screen text-gray-800">
      {/* ファーストビュー */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 px-6 text-center">
        <p className="text-lg text-red-500 font-semibold mb-2">緊急予告!!</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">みんなの那須アプリ</h1>
        <p className="text-lg text-red-500 font-semibold mb-2">7月スタート予定!!</p>
        <p className="text-lg text-white font-semibold mb-6">まずは、55個を7日間無料でお試し使い放題！</p>
        <p className="max-w-2xl mx-auto text-lg">
          特売情報・今日の運勢・相性診断・地域情報アプリ、あなたに役立つ55選、ぜんぶ入り使い放題！
        </p>
        <a
          href="/subscribe"
          className="mt-8 inline-block bg-white text-blue-600 font-bold text-lg px-6 py-3 rounded-full shadow hover:bg-blue-100 transition"
        >
          📱 今すぐ無料で始める
        </a>
      </section>

      {/* サブコピー */}
      <section className="py-12 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">このアプリ55個があれば、毎日が便利に！</h2>
        <p className="mb-2 text-red-600 font-semibold">使用料もお得満載で、無料と一緒、いや儲かる!!</p>
        <ul className="text-left inline-block text-base leading-8">
          <li>● 初回7日間は完全無料使い放題！</li>
          <li>● 初月はたったの480円キャンペーン中!!</li>
          <li>● 2ヶ月目からは月額980円（自動更新）</li>
          <li>● 一日たったの30円でお得満載！</li>
          <li>● フードロス激安情報やスーパー特売情報もスマホで簡単チェック</li>
          <li>● 家族みんなで使える、全年齢対応アプリ集</li>
        </ul>
      </section>

      {/* 紹介制度 */}
      <section className="bg-blue-100 py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">紹介制度</h2>
        <p className="mb-2">アプリ紹介で紹介手数料30%をゲット！</p>
        <p className="mb-2">3人以上紹介すれば、あなたのアプリ利用料はずっと無料に！</p>
        <p className="mb-2">例：100人紹介で毎月約30,000円の紹介手数料</p>
      </section>

      {/* 使用手順 */}
      <section className="py-12 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">使用手順</h2>
        <ol className="text-left inline-block text-base leading-8 list-decimal list-inside">
          <li>「無料で始める」ボタンをタップ</li>
          <li>メール登録、決済でアカウント作成</li>
          <li>第1段階（無料期間7日）が開始</li>
          <li>7日後に自動的に480円の月額に</li>
          <li>その後は月980円で継続 👉 いつでもキャンセル可能！継続の義務なし！</li>
        </ol>
      </section>

      {/* ピックアップアプリ */}
      <section className="bg-blue-100 py-12 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">ピックアップアプリ一覧</h2>
        <div className="grid md:grid-cols-2 gap-4 text-left text-base">
          <ul className="space-y-2">
            <li>● 今日の運勢アプリ</li>
            <li>● 個性心理学診断</li>
            <li>● 相性診断ツール</li>
            <li>● スーパー特売情報アプリ</li>
          </ul>
          <ul className="space-y-2">
            <li>● フードロス激安現品情報</li>
            <li>● 地域フリマアプリ</li>
            <li>● 健康チェックアプリ</li>
            <li>● ペット情報アプリなど55種類が使い放題!!</li>
          </ul>
        </div>
      </section>

      {/* PR & ボタン */}
      <section className="py-12 px-6 text-center">
        <p className="text-xl font-semibold mb-6">
          年代を問わず、誰にでも「使える」「役立つ」アプリを組み合わせた月額プラン。
        </p>
        <p className="text-lg mb-8">
          「お得情報」も「地域情報」も「エンタメ情報」もまとめて使い放題。
        </p>
        <a
          href="/subscribe"
          className="inline-block bg-blue-600 text-white font-bold text-lg px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
        >
          今すぐ無料で始める
        </a>
      </section>
    </div>
  )
}
