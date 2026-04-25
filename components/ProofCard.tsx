'use client';

import { useState } from 'react';
import { Proof } from '@/lib/proofs';

interface ProofCardProps {
  proof: Proof;
}

export default function ProofCard({ proof }: ProofCardProps) {
  const [copied, setCopied] = useState(false);

  const copyHash = async () => {
    await navigator.clipboard.writeText(proof.proofHash);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formattedDate = new Date(proof.timestamp).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short',
  });

  return (
    <div className="rounded-2xl border border-white/10 bg-[#0d0d14] overflow-hidden">
      <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center">
            <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <p className="text-white font-semibold">{proof.badge}</p>
            <p className="text-green-400 text-xs font-medium">Verified</p>
          </div>
        </div>
        <span className="text-xs px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 font-mono">
          ✓ Valid
        </span>
      </div>

      <div className="p-6 flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-slate-500 uppercase tracking-wider font-medium">Proof Hash</label>
          <div className="flex items-center gap-3 bg-black/40 rounded-xl p-3 border border-white/5">
            <code className="text-cyan-400 text-xs font-mono flex-1 truncate">{proof.proofHash}</code>
            <button
              onClick={copyHash}
              className="shrink-0 text-slate-500 hover:text-white transition-colors"
              title="Copy hash"
            >
              {copied ? (
                <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs text-slate-500 uppercase tracking-wider font-medium">Timestamp</label>
            <p className="text-slate-300 text-sm">{formattedDate}</p>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs text-slate-500 uppercase tracking-wider font-medium">Network</label>
            <p className="text-slate-300 text-sm">Miden</p>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs text-slate-500 uppercase tracking-wider font-medium">Proof Type</label>
            <p className="text-slate-300 text-sm">ZK-STARK</p>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs text-slate-500 uppercase tracking-wider font-medium">Identity</label>
            <p className="text-slate-300 text-sm">Not revealed</p>
          </div>
        </div>

        <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-purple-500/5 border border-purple-500/20">
          <svg className="w-4 h-4 text-purple-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <p className="text-purple-300 text-sm">Verified privately via Miden</p>
        </div>
      </div>
    </div>
  );
}
