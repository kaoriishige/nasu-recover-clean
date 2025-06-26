import { GetServerSideProps } from "next";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

type App = {
  name: string;
  description: string;
  imageUrl?: string;
  emotions?: string[];
  functions?: string[];
  link?: string;
};

export default function AppDetailPage({ app }: { app: App | null }) {
  if (!app) return <p>アプリが見つかりません</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{app.name}</h1>
      {app.imageUrl && <img src={app.imageUrl} alt={app.name} className="mb-4 rounded" />}
      <p className="mb-4">{app.description}</p>
      <p className="text-sm text-gray-500">
        カテゴリ: {app.emotions?.join(", ")} / {app.functions?.join(", ")}
      </p>
      {app.link && (
        <a
          href={app.link}
          target="_blank"
          className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          アプリを開く
        </a>
      )}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.appId as string;
  const ref = doc(db, "apps", id);
  const snap = await getDoc(ref);
  if (!snap.exists()) return { props: { app: null } };

  return { props: { app: snap.data() } };
};
