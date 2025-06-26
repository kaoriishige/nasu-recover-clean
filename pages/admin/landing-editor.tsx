// pages/admin/inquiries.tsx
// これは「問い合わせ一覧」を表示する管理者ページです

import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";
import AdminLayout from "@/components/admin/AdminLayout";

type Inquiry = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: { seconds: number; nanoseconds: number };
};

export default function InquiriesPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);

  useEffect(() => {
    const fetchInquiries = async () => {
      const q = query(collection(db, "inquiries"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Inquiry[];
      setInquiries(data);
    };

    fetchInquiries();
  }, []);

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-4">📩 問い合わせ一覧</h1>

      {inquiries.length === 0 ? (
        <p>現在、問い合わせはありません。</p>
      ) : (
        <div className="space-y-4">
          {inquiries.map((inq) => (
            <div key={inq.id} className="border rounded-lg p-4 bg-white shadow-sm">
              <p className="text-sm text-gray-500">
                {new Date(inq.createdAt.seconds * 1000).toLocaleString()}
              </p>
              <p className="font-semibold">{inq.name}（{inq.email}）</p>
              <p className="mt-2 whitespace-pre-wrap">{inq.message}</p>
            </div>
          ))}
        </div>
      )}
    </AdminLayout>
  );
}

