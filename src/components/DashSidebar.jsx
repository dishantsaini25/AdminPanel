'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard, Users, Car, Wrench, Receipt,
  ChevronLeft, ChevronRight, Gauge, LogOut, Settings,
} from 'lucide-react';

const navItems = [
  { label: 'Dashboard', href: '/admin',           icon: LayoutDashboard },
  { label: 'Customers', href: '/admin/customers', icon: Users           },
  { label: 'Vehicles',  href: '/admin/vehicles',  icon: Car             },
  { label: 'Services',  href: '/admin/services',  icon: Wrench          },
  { label: 'Billing',   href: '/admin/billing',   icon: Receipt         },
];

const bottomItems = [
  { label: 'Settings', href: '/admin/settings', icon: Settings },
];

export default function DashSidebar({ mobileOpen, onClose }) {
  const pathname  = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={[
          'fixed top-0 left-0 h-full z-30 flex flex-col',
          'bg-[#0d1b2a] text-white transition-all duration-300',
          'border-r border-white/5',
          collapsed ? 'w-[72px]' : 'w-64',
          mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
        ].join(' ')}
        style={{ boxShadow: '4px 0 24px rgba(0,0,0,0.3)' }}
      >
        {/* Logo */}
        <div className={`flex items-center h-16 px-4 border-b border-white/5 ${collapsed ? 'justify-center' : 'justify-between'}`}>
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shrink-0 shadow-lg shadow-teal-900/50">
              <Gauge className="w-5 h-5 text-white" />
            </div>
            {!collapsed && (
              <div className="min-w-0">
                <p className="text-sm font-bold text-white leading-tight">AdminPanel</p>
                <p className="text-[10px] text-teal-400 font-medium">Pro Dashboard</p>
              </div>
            )}
          </div>

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden lg:flex w-6 h-6 items-center justify-center rounded-lg hover:bg-white/10 transition shrink-0"
          >
            {collapsed
              ? <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              : <ChevronLeft  className="w-3.5 h-3.5 text-slate-400" />}
          </button>
        </div>

        {/* Nav label */}
        {!collapsed && (
          <p className="px-4 pt-5 pb-2 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
            Main Menu
          </p>
        )}

        {/* Nav items */}
        <nav className="flex-1 overflow-y-auto px-2 space-y-0.5 pb-4">
          {navItems.map(({ label, href, icon: Icon }) => {
            const active = pathname === href || (href !== '/admin' && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                onClick={() => {
                  if (typeof window !== 'undefined' && window.innerWidth < 1024) onClose();
                }}
                title={collapsed ? label : undefined}
                className={[
                  'group flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 relative',
                  collapsed ? 'justify-center' : '',
                  active
                    ? 'bg-gradient-to-r from-teal-500/20 to-teal-600/10 text-teal-400 border border-teal-500/20'
                    : 'text-slate-400 hover:bg-white/5 hover:text-white',
                ].join(' ')}
              >
                {active && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-teal-400 rounded-r-full" />
                )}
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all ${
                  active ? 'bg-teal-500/20' : 'group-hover:bg-white/5'
                }`}>
                  <Icon className={`w-4 h-4 ${active ? 'text-teal-400' : 'text-slate-400 group-hover:text-white'}`} />
                </div>
                {!collapsed && (
                  <span className="text-sm font-medium truncate">{label}</span>
                )}
              </Link>
            );
          })}

          {/* Divider */}
          <div className="my-3 border-t border-white/5" />

          {!collapsed && (
            <p className="px-2 pb-2 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
              System
            </p>
          )}

          {bottomItems.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              title={collapsed ? label : undefined}
              className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-slate-500 hover:bg-white/5 hover:text-slate-300 ${collapsed ? 'justify-center' : ''}`}
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-white/5">
                <Icon className="w-4 h-4" />
              </div>
              {!collapsed && <span className="text-sm font-medium">{label}</span>}
            </Link>
          ))}
        </nav>

        {/* User footer */}
        <div className="border-t border-white/5 p-3">
          {collapsed ? (
            <button
              title="Logout"
              className="w-full flex justify-center p-2.5 rounded-xl hover:bg-white/5 transition text-slate-500 hover:text-white"
            >
              <LogOut className="w-4 h-4" />
            </button>
          ) : (
            <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition cursor-pointer group">
              <div className="relative shrink-0">
                <div className="w-9 h-9 rounded-full bg-teal-600 flex items-center justify-center ring-2 ring-teal-500/40">
                  <span className="text-sm font-bold text-white">A</span>
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full ring-2 ring-[#0d1b2a]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white truncate">Admin</p>
                <p className="text-[10px] text-slate-500 truncate">Super Admin</p>
              </div>
              <button
                title="Logout"
                className="p-1.5 rounded-lg hover:bg-white/10 transition text-slate-500 hover:text-red-400"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
