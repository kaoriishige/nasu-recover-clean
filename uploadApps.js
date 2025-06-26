const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const apps = [
  { name: "節約チラシアプリ", image: "/images/app1.png", categories: ["節約したい", "生活情報"] },
  { name: "子育て応援アプリ", image: "/images/app2.png", categories: ["子育て", "つながりたい"] },
  { name: "健康チェックアプリ", image: "/images/app3.png", categories: ["健康支援", "スッキリしたい"] },
  { name: "那須の特売情報", image: "/images/app4.png", categories: ["節約したい", "お得を探したい"] },
  { name: "AI相性診断", image: "/images/app5.png", categories: ["自分を知りたい", "癒やされたい"] },
  { name: "今日の運勢占い", image: "/images/app6.png", categories: ["癒やされたい", "ワクワクしたい"] },
  { name: "地域掲示板", image: "/images/app7.png", categories: ["つながりたい", "生活情報"] },
  { name: "那須のイベント情報", image: "/images/app8.png", categories: ["ワクワクしたい", "生活情報"] },
  { name: "地域クーポンアプリ", image: "/images/app9.png", categories: ["節約したい", "お得を探したい"] },
  { name: "天気と災害速報", image: "/images/app10.png", categories: ["困っている", "生活情報"] },
  { name: "妊娠・出産サポート", image: "/images/app11.png", categories: ["子育て", "健康支援"] },
  { name: "子どもの遊び場マップ", image: "/images/app12.png", categories: ["子育て", "ワクワクしたい"] },
  { name: "介護支援アプリ", image: "/images/app13.png", categories: ["困っている", "健康支援"] },
  { name: "ストレス解消法まとめ", image: "/images/app14.png", categories: ["スッキリしたい", "癒やされたい"] },
  { name: "孤独対策チャット", image: "/images/app15.png", categories: ["つながりたい", "癒やされたい"] },
  { name: "人生相談AI", image: "/images/app16.png", categories: ["困っている", "誰かの役に立ちたい"] },
  { name: "地域清掃ボランティア", image: "/images/app17.png", categories: ["誰かの役に立ちたい", "スッキリしたい"] },
  { name: "脳トレゲーム", image: "/images/app18.png", categories: ["もっとデキる", "ワクワクしたい"] },
  { name: "AIスケジュール管理", image: "/images/app19.png", categories: ["もっとデキる", "生活情報"] },
  { name: "メンタルサポートBot", image: "/images/app20.png", categories: ["癒やされたい", "健康支援"] },
  { name: "ファミリーカレンダー", image: "/images/app21.png", categories: ["子育て", "生活情報"] },
  { name: "ごみ出し通知アプリ", image: "/images/app22.png", categories: ["生活情報", "スッキリしたい"] },
  { name: "方言翻訳アプリ", image: "/images/app23.png", categories: ["色んなこと知りたい", "癒やされたい"] },
  { name: "交通情報リアルタイム", image: "/images/app24.png", categories: ["困っている", "生活情報"] },
  { name: "節水・節電アドバイザー", image: "/images/app25.png", categories: ["節約したい", "健康支援"] },
  { name: "親子レシピ共有アプリ", image: "/images/app26.png", categories: ["子育て", "健康支援"] },
  { name: "那須の四季写真集", image: "/images/app27.png", categories: ["癒やされたい", "ワクワクしたい"] },
  { name: "地域ペット情報", image: "/images/app28.png", categories: ["癒やされたい", "生活情報"] },
  { name: "AI翻訳・通訳アプリ", image: "/images/app29.png", categories: ["もっとデキる", "色んなこと知りたい"] },
  { name: "趣味サークル検索", image: "/images/app30.png", categories: ["つながりたい", "ワクワクしたい"] },
  { name: "地域史クイズ", image: "/images/app31.png", categories: ["色んなこと知りたい", "癒やされたい"] },
  { name: "公園混雑予報", image: "/images/app32.png", categories: ["子育て", "困っている"] },
  { name: "那須人インタビュー", image: "/images/app33.png", categories: ["つながりたい", "誰かの役に立ちたい"] },
  { name: "健康運動チャレンジ", image: "/images/app34.png", categories: ["健康支援", "もっとデキる"] },
  { name: "学習支援アプリ", image: "/images/app35.png", categories: ["もっとデキる", "子育て"] },
  { name: "地域特産品図鑑", image: "/images/app36.png", categories: ["色んなこと知りたい", "生活情報"] },
  { name: "安心安全マップ", image: "/images/app37.png", categories: ["困っている", "生活情報"] },
  { name: "家庭内ワークシェア", image: "/images/app38.png", categories: ["子育て", "スッキリしたい"] },
  { name: "ボイスメッセージ交換", image: "/images/app39.png", categories: ["つながりたい", "癒やされたい"] },
  { name: "避難所ARナビ", image: "/images/app40.png", categories: ["困っている", "生活情報"] },
  { name: "LINE風地域チャット", image: "/images/app41.png", categories: ["つながりたい", "癒やされたい"] },
  { name: "買い物リスト共有", image: "/images/app42.png", categories: ["生活情報", "子育て"] },
  { name: "フードロス対策マッチング", image: "/images/app43.png", categories: ["節約したい", "誰かの役に立ちたい"] },
  { name: "今日のおすすめ料理", image: "/images/app44.png", categories: ["健康支援", "生活情報"] },
  { name: "AI写真診断", image: "/images/app45.png", categories: ["もっとデキる", "自分を知りたい"] },
  { name: "家庭菜園支援", image: "/images/app46.png", categories: ["健康支援", "癒やされたい"] },
  { name: "地域図書館蔵書検索", image: "/images/app47.png", categories: ["色んなこと知りたい", "生活情報"] },
  { name: "お悩み共有掲示板", image: "/images/app48.png", categories: ["困っている", "癒やされたい"] },
  { name: "家計簿自動分析", image: "/images/app49.png", categories: ["節約したい", "もっとデキる"] },
  { name: "献立提案AI", image: "/images/app50.png", categories: ["健康支援", "子育て"] },
  { name: "那須クイズバトル", image: "/images/app51.png", categories: ["ワクワクしたい", "色んなこと知りたい"] },
  { name: "那須の昔話読み聞かせ", image: "/images/app52.png", categories: ["癒やされたい", "子育て"] },
  { name: "通勤快適ナビ", image: "/images/app53.png", categories: ["困っている", "生活情報"] },
  { name: "子ども成長記録", image: "/images/app54.png", categories: ["子育て", "癒やされたい"] },
  { name: "ご近所おすそ分けマップ", image: "/images/app55.png", categories: ["つながりたい", "生活情報"] },
];

(async () => {
  for (const app of apps) {
    await db.collection("apps").add(app);
  }
  console.log("✅ Firestoreにアプリ55個を登録しました");
})();

