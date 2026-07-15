'use client';

import DashNavbar from '@/components/DashNavbar';
import DashSidebar from '@/components/DashSidebar';
import { useState } from 'react';

export default function AdminLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed]   = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <DashSidebar
        mobileOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        collapsed={collapsed}
        onCollapse={setCollapsed}
      />
      <div
        className="transition-all duration-300"
        style={{ marginLeft: collapsed ? '88px' : '256px' }}
      >
        <DashNavbar onMenuClick={() => setMobileOpen(true)} />
        <main className="p-4 md:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
