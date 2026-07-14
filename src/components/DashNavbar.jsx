'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import {
  Menu, Search, Bell, ChevronDown, X,
  Settings, LogOut, User, Shield,
} from 'lucide-react';

const pageTitles = {
  '/admin':           { title: 'Dashboard',  sub: 'Welcome back 👋' },
  '/admin/customers': { title: 'Customers',  sub: 'Manage your customer base' },
  '/admin/vehicles':  { title: 'Vehicles',   sub: 'Track all registered vehicles' },
  '/admin/services':  { title: 'Services',   sub: 'Service history & tracking' },
  '/admin/billing':   { title: 'Billing',    sub: 'Invoices & payment records' },
  '/admin/reports':   { title: 'Reports',    sub: 'Analytics & reports' },
  '/admin/settings':  { title: 'Settings',   sub: 'System configuration' },
};

export default function DashNavbar({ onMenuClick }) {
  const pathname = usePathname();
  const [search, setSearch]           = useState('');
  const [showProfile, setShowProfile] = useState(false);
  const [showNotif, setShowNotif]     = useState(false);

  const page = pageTitles[pathname] ?? pageTitles['/admin'];

  useEffect(() => {
    const close = () => { setShowProfile(false); setShowNotif(false); };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, []);

  return (
    <header className="sticky top-0 z-10 bg-white/90 backdrop-blur-xl border-b border-gray-200/60">
      <div className="flex items-center justify-between h-16 px-4 md:px-6 gap-4">

        {/* Left */}
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition"
          >
            <Menu className="w-5 h-5 text-gray-600" />
          </button>
          <div className="hidden sm:block">
            <h1 className="text-base font-bold text-gray-900 leading-tight">{page.title}</h1>
            <p className="text-xs text-gray-500">{page.sub}</p>
          </div>
        </div>

        {/* Center search */}
        <div className="flex-1 max-w-sm hidden md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search anything…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-9 py-2 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-400 focus:bg-white transition-all"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <X className="w-3.5 h-3.5 text-gray-400 hover:text-gray-600" />
              </button>
            )}
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-1.5">

          {/* Notifications */}
          <div className="relative" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => { setShowNotif(!showNotif); setShowProfile(false); }}
              className="relative p-2.5 rounded-xl hover:bg-gray-100 transition"
            >
              <Bell className="w-5 h-5 text-gray-600" />
            </button>

            {showNotif && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                  <p className="text-sm font-bold text-gray-900">Notifications</p>
                  <button className="text-xs text-teal-600 hover:text-teal-700 font-semibold">
                    Clear all
                  </button>
                </div>
                <div className="px-5 py-8 text-center">
                  <Bell className="w-8 h-8 text-gray-200 mx-auto mb-2" />
                  <p className="text-sm text-gray-400">No notifications yet</p>
                </div>
                <div className="px-5 py-3 border-t border-gray-100 bg-gray-50">
                  <button className="w-full text-center text-xs text-teal-600 hover:text-teal-700 font-semibold">
                    View all notifications →
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="w-px h-6 bg-gray-200 mx-1" />

          {/* Profile */}
          <div className="relative" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => { setShowProfile(!showProfile); setShowNotif(false); }}
              className="flex items-center gap-2.5 pl-1 pr-3 py-1.5 rounded-xl hover:bg-gray-100 transition"
            >
              <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center ring-2 ring-teal-500/30">
                <span className="text-sm font-bold text-white">A</span>
              </div>
              <div className="hidden md:block text-left">
                <p className="text-xs font-bold text-gray-900 leading-tight">Admin</p>
                <p className="text-[10px] text-gray-500">Super Admin</p>
              </div>
              <ChevronDown className="hidden md:block w-3.5 h-3.5 text-gray-400" />
            </button>

            {showProfile && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                <div className="px-4 py-4 bg-gradient-to-br from-teal-50 to-blue-50 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-teal-600 flex items-center justify-center ring-2 ring-teal-400/40">
                      <span className="text-base font-bold text-white">A</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">Admin</p>
                      <p className="text-xs text-gray-500">admin@example.com</p>
                      <span className="inline-flex items-center gap-1 mt-1 text-[10px] font-semibold text-teal-700 bg-teal-100 px-2 py-0.5 rounded-full">
                        <Shield className="w-2.5 h-2.5" /> Admin
                      </span>
                    </div>
                  </div>
                </div>
                <div className="py-1.5">
                  <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition">
                    <User className="w-4 h-4 text-gray-400" /> Profile
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition">
                    <Settings className="w-4 h-4 text-gray-400" /> Settings
                  </button>
                  <div className="border-t border-gray-100 my-1" />
                  <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition">
                    <LogOut className="w-4 h-4" /> Logout
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Mobile search */}
      <div className="md:hidden px-4 pb-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/50 transition"
          />
        </div>
      </div>
    </header>
  );
}
