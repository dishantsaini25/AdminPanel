import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black min-h-screen">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            GarageOS Admin Dashboard
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Manage your garage business efficiently. Track customers, vehicles, 
            services, and more from a single dashboard.
          </p>
          
          {/* Admin Dashboard Button */}
          <Link 
            href="/admin"
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-teal-500/25"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            Go to Dashboard
          </Link>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <Link 
              href="/admin/customers"
              className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              👥 Manage Customers
            </Link>
            <Link 
              href="/admin/vehicles"
              className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              🚗 Track Vehicles
            </Link>
            <Link 
              href="/admin/billing"
              className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              💳 View Billing
            </Link>
          </div>
        </div>
        
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}