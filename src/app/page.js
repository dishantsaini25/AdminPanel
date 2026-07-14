import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">ShopHub</span>
            </div>
            <div className="flex items-center gap-4">
              <Link 
                href="/admin"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                For Admin Panel Click Here →
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full border border-teal-200">
              <span className="w-2 h-2 bg-teal-600 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-teal-700">Live Store</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Premium <br />
              <span className="text-teal-600">E-commerce</span> Dashboard
            </h1>
            
            <p className="text-lg text-gray-600 max-w-lg">
              Manage your online store with ease. Track orders, customers, 
              products, and analytics all from one powerful dashboard.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                href="/admin"
                className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-teal-500/25"
              >
                Go to Admin Panel →
              </Link>
              <Link
                href="/admin/products"
                className="px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 font-medium rounded-lg border border-gray-200 transition"
              >
                Browse Products
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div>
                <p className="text-2xl font-bold text-gray-900">12K+</p>
                <p className="text-sm text-gray-500">Products</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">8.4K</p>
                <p className="text-sm text-gray-500">Customers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">95%</p>
                <p className="text-sm text-gray-500">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              {/* Dashboard Preview Header */}
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-500 font-medium">Dashboard Preview</span>
                </div>
              </div>
              
              {/* Dashboard Mock Content */}
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <p className="text-xs text-gray-500">Revenue</p>
                    <p className="text-xl font-bold text-gray-900">$48,295</p>
                    <span className="text-xs text-emerald-600">↑ 12.5%</span>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-xs text-gray-500">Orders</p>
                    <p className="text-xl font-bold text-gray-900">1,284</p>
                    <span className="text-xs text-emerald-600">↑ 8.2%</span>
                  </div>
                </div>
                <div className="h-24 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-medium">Sales Chart</span>
                </div>
              </div>
            </div>
            
            {/* Floating Badges */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg px-4 py-2 border border-gray-100">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📦</span>
                <div>
                  <p className="text-xs text-gray-500">New Orders</p>
                  <p className="text-sm font-bold text-gray-900">24 today</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Product Management</h3>
            <p className="text-sm text-gray-500">Add, edit, and manage your product inventory with ease.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Order Tracking</h3>
            <p className="text-sm text-gray-500">Track and manage all customer orders in real-time.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Analytics</h3>
            <p className="text-sm text-gray-500">Get insights into your store performance and growth.</p>
          </div>
        </div>

        {/* Simple Admin Button at Bottom */}
        <div className="mt-12 text-center border-t border-gray-200 pt-8">
          <Link
            href="/admin"
            className="text-sm text-gray-500 hover:text-teal-600 transition-colors font-medium"
          >
            For Admin Panel Click Here →
          </Link>
        </div>
      </main>
    </div>
  );
}