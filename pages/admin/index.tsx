import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Link from "next/link";

type App = {
  id: string;
  name: string;
  imageUrl?: string;
  emotions?: string[];
  functions?: string[];
};

export default async function AppsPage() {
  const snapshot = await getDocs(collection(db, "apps"));
  const apps: App[] = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as App[];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">📱 アプリ一覧</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {apps.map((app) => (
          <div key={app.id} className="border p-4 rounded shadow bg-white">
            <h2 className="text-xl font-semibold">
              <Link href={`/apps/${app.id}`} className="text-blue-600 hover:underline">
                {app.name}
              </Link>
            </h2>
            {app.imageUrl && <img src={app.imageUrl} alt={app.name} className="mt-2 rounded" />}
            <p className="text-sm text-gray-500 mt-2">
              {app.emotions?.join(", ")} / {app.functions?.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}


