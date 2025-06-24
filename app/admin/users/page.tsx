// app/admin/users/page.tsx
'use client'

import React from 'react'

export default function AdminUsersPage() {
  // 仮データ（Firestore接続前）
  const users = [
    {
      id: 'user1',
      name: '山田 太郎',
      email: 'taro@example.com',
      joinedAt: '2025-07-10',
      referralRate: 0.3,
      referralCount: 5,
    },
    {
      id: 'user2',
      name: '佐藤 花子',
      email: 'hanako@example.com',
      joinedAt: '2025-09-05',
      referralRate: 0.2,
      referralCount: 1,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-4">ユーザー一覧</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-xl">
          <thead>
            <tr className="bg-blue-100 text-gray-700">
              <th className="text-left py-3 px-4">名前</th>
              <th className="text-left py-3 px-4">メール</th>
              <th className="text-left py-3 px-4">登録日</th>
              <th className="text-left py-3 px-4">紹介人数</th>
              <th className="text-left py-3 px-4">紹介料率</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t hover:bg-blue-50">
                <td className="py-2 px-4 whitespace-nowrap">{user.name}</td>
                <td className="py-2 px-4 whitespace-nowrap">{user.email}</td>
                <td className="py-2 px-4 whitespace-nowrap">{user.joinedAt}</td>
                <td className="py-2 px-4 whitespace-nowrap">{user.referralCount}</td>
                <td className="py-2 px-4 whitespace-nowrap">{Math.round(user.referralRate * 100)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
