'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-md bg-black/40">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded-md bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-xs font-bold text-black">
            ZT
          </div>
          <span className="text-white font-semibold tracking-tight">ZeroTrace</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm transition-colors ${
              pathname === '/' ? 'text-cyan-400' : 'text-slate-400 hover:text-white'
            }`}
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className={`text-sm transition-colors ${
              pathname === '/dashboard' ? 'text-cyan-400' : 'text-slate-400 hover:text-white'
            }`}
          >
            Dashboard
          </Link>
          <Link
            href="/dashboard"
            className="text-sm px-4 py-1.5 rounded-full border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all glow-blue"
          >
            Launch App
          </Link>
        </nav>
      </div>
    </header>
  );
}
