import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/lib/firebase';

type User = {
  email: string;
  referralId: string;
};

type Referral = {
  referrerId: string;
  referredEmail: string;
};

export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [referrals, setReferrals] = useState<Referral[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const usersSnap = await getDocs(collection(db, 'users'));
      const referralSnap = await getDocs(collection(db, 'referrals'));

      const userList = usersSnap.docs.map(doc => doc.data() as User);
      const referralList = referralSnap.docs.map(doc => doc.data() as Referral);

      setUsers(userList);
      setReferrals(referralList);
    };

    fetchData();
  }, []);

  // 各ユーザーが紹介した人数（報酬対象者数）を集計
  const getReferralCount = (referralId: string) => {
    return referrals.filter(ref => ref.referrerId === referralId).length;
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '1.5rem' }}>
        紹介者ユーザー一覧
      </h1>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={th}>メールアドレス</th>
            <th style={th}>紹介ID</th>
            <th style={th}>報酬対象者数</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.referralId}>
              <td style={td}>{user.email}</td>
              <td style={td}>{user.referralId}</td>
              <td style={td}>{getReferralCount(user.referralId)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const th = {
  borderBottom: '2px solid #ccc',
  padding: '0.75rem',
  textAlign: 'left' as const,
  background: '#f9fafb',
};

const td = {
  borderBottom: '1px solid #e5e7eb',
  padding: '0.75rem',
};
