'use client';

import { useState } from 'react';
import WalletConnectButton from '@/components/WalletConnectButton';
import BadgeCard from '@/components/BadgeCard';
import { BADGES } from '@/lib/proofs';

export default function DashboardPage() {
  const [walletConnected, setWalletConnected] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 relative">
      <div className="absolute -z-10 top-4 left-10 w-56 h-56 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="absolute -z-10 top-20 right-6 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl" />

      {/* Header row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12 glass-panel rounded-2xl p-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">Your Badges</h1>
          <p className="text-slate-400 text-sm">
            Generate zero-knowledge proofs for your on-chain reputation
          </p>
        </div>
        <WalletConnectButton onConnect={setWalletConnected} />
      </div>

      {/* Status banner */}
      {!walletConnected && (
        <div className="mb-8 flex items-center gap-3 px-5 py-4 rounded-xl bg-amber-500/8 border border-amber-500/30 shadow-[0_0_30px_rgba(245,158,11,0.08)]">
          <svg className="w-5 h-5 text-amber-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p className="text-amber-300 text-sm">
            Connect your wallet to generate proofs. No private keys or balances will be read.
          </p>
        </div>
      )}

      {/* Badge grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5">
        {BADGES.map((badge) => (
          <BadgeCard key={badge.id} badge={badge} walletConnected={walletConnected} />
        ))}
      </div>

      {/* Info section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: 'Total Proofs Generated', value: '—', note: 'Connect wallet to view' },
          { label: 'Privacy Level', value: '100%', note: 'No identity revealed' },
          { label: 'Proof System', value: 'ZK-STARK', note: 'Polygon Miden' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="scanline rounded-xl border border-white/10 bg-gradient-to-br from-[#10101a] to-[#090911] px-5 py-4 flex flex-col gap-1 shadow-[0_0_20px_rgba(0,0,0,0.3)]"
          >
            <p className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</p>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
            <p className="text-xs text-slate-500">{stat.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
