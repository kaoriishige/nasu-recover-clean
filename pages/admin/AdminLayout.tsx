// components/admin/AdminLayout.tsx
import { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ padding: '2rem', background: '#f0f0f0', minHeight: '100vh' }}>
      <header style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '1rem' }}>
        管理画面
      </header>
      <main>{children}</main>
    </div>
  );
}
