'use client';

import DashNavbar from '@/components/DashNavbar';
import DashSidebar from '@/components/DashSidebar';
import { useState } from 'react';


export default function AdminLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <DashSidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      <div className="lg:ml-64 transition-all duration-300">
        <DashNavbar onMenuClick={() => setMobileOpen(true)} />
        <main className="p-4 md:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
