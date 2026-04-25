'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Badge, generateProof } from '@/lib/proofs';

interface BadgeCardProps {
  badge: Badge;
  walletConnected: boolean;
}

const colorConfig = {
  blue: {
    border: 'border-cyan-500/30 hover:border-cyan-400/60',
    iconBg: 'bg-cyan-500/10',
    iconText: 'text-cyan-400',
    btn: 'from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500',
    glow: 'glow-blue',
    tag: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
  },
  purple: {
    border: 'border-purple-500/30 hover:border-purple-400/60',
    iconBg: 'bg-purple-500/10',
    iconText: 'text-purple-400',
    btn: 'from-purple-500 to-violet-600 hover:from-purple-400 hover:to-violet-500',
    glow: 'glow-purple',
    tag: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
  },
  cyan: {
    border: 'border-teal-500/30 hover:border-teal-400/60',
    iconBg: 'bg-teal-500/10',
    iconText: 'text-teal-400',
    btn: 'from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500',
    glow: 'glow-blue',
    tag: 'bg-teal-500/10 text-teal-400 border-teal-500/30',
  },
  violet: {
    border: 'border-violet-500/30 hover:border-violet-400/60',
    iconBg: 'bg-violet-500/10',
    iconText: 'text-violet-400',
    btn: 'from-violet-500 to-purple-600 hover:from-violet-400 hover:to-purple-500',
    glow: 'glow-purple',
    tag: 'bg-violet-500/10 text-violet-400 border-violet-500/30',
  },
};

export default function BadgeCard({ badge, walletConnected }: BadgeCardProps) {
  const [generating, setGenerating] = useState(false);
  const router = useRouter();
  const c = colorConfig[badge.color];

  const handleGenerate = async () => {
    if (!walletConnected) return;
    setGenerating(true);
    await new Promise((r) => setTimeout(r, 1800));
    const proof = generateProof(badge.id);
    setGenerating(false);
    router.push(`/proof/${proof.id}`);
  };

  return (
    <div
      className={`relative rounded-2xl border bg-[#0d0d14] p-6 transition-all duration-300 ${c.border} flex flex-col gap-4`}
    >
      <div className="flex items-start justify-between">
        <div className={`w-12 h-12 rounded-xl ${c.iconBg} flex items-center justify-center text-2xl`}>
          {badge.icon}
        </div>
        <span className={`text-xs px-2.5 py-1 rounded-full border ${c.tag} font-mono`}>
          ZK Badge
        </span>
      </div>

      <div className="flex flex-col gap-1.5">
        <h3 className="text-white font-semibold text-lg">{badge.name}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{badge.description}</p>
      </div>

      <div className="flex items-center gap-2 text-xs text-slate-500">
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        No identity exposed
      </div>

      <button
        onClick={handleGenerate}
        disabled={generating || !walletConnected}
        className={`mt-auto w-full py-2.5 rounded-xl font-medium text-sm text-white bg-gradient-to-r ${c.btn} transition-all ${c.glow} disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none`}
      >
        {generating ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Generating proof...
          </span>
        ) : !walletConnected ? (
          'Connect wallet to generate'
        ) : (
          'Generate Proof'
        )}
      </button>
    </div>
  );
}
