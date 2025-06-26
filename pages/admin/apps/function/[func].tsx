import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Link from "next/link";

type App = {
  id: string;
  name: string;
  imageUrl?: string;
  functions?: string[];
};

export default async function FunctionApps({ params }: { params: { func: string } }) {
  const snapshot = await getDocs(collection(db, "apps"));
  const allApps = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as App[];
  const apps = allApps.filter((app) => app.functions?.includes(params.func));

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">機能ジャンル: {params.func}</h1>
      {apps.length === 0 ? (
        <p>該当するアプリがありません</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {apps.map((app) => (
            <div key={app.id} className="border p-4 rounded shadow bg-white">
              <h2 className="text-lg font-semibold">
                <Link href={`/apps/${app.id}`} className="text-blue-600 hover:underline">
                  {app.name}
                </Link>
              </h2>
              {app.imageUrl && (
                <img src={app.imageUrl} alt={app.name} className="mt-2 rounded" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
