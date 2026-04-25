'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import ProofCard from '@/components/ProofCard';
import { getProofById, Proof } from '@/lib/proofs';

export default function ProofPage() {
  const { id } = useParams<{ id: string }>();
  const [proof, setProof] = useState<Proof | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const found = getProofById(id);
    setProof(found);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <svg className="w-8 h-8 animate-spin text-cyan-400" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
          </svg>
          <p className="text-slate-400 text-sm">Loading proof...</p>
        </div>
      </div>
    );
  }

  if (!proof) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-6">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h2 className="text-white text-xl font-semibold mb-2">Proof not found</h2>
          <p className="text-slate-400 text-sm mb-6">This proof ID doesn't exist or has expired.</p>
          <Link
            href="/dashboard"
            className="inline-flex px-6 py-2.5 rounded-xl font-medium text-sm text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all glow-blue"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <Link
        href="/dashboard"
        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm mb-8 group"
      >
        <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Dashboard
      </Link>

      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/5 text-green-400 text-xs font-medium mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
          Proof Verified
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">Proof Certificate</h1>
        <p className="text-slate-400 text-sm">
          This zero-knowledge proof verifies your badge without revealing any personal information.
        </p>
      </div>

      <ProofCard proof={proof} />

      <div className="mt-6 p-4 rounded-xl bg-black/30 border border-white/5">
        <p className="text-xs text-slate-500 text-center">
          This proof was generated client-side and stored locally. Your wallet address,
          balance, and transaction history were never transmitted or stored externally.
        </p>
      </div>

      <div className="mt-8 flex gap-3">
        <button
          onClick={() => navigator.clipboard.writeText(window.location.href)}
          className="flex-1 py-2.5 rounded-xl border border-white/10 text-slate-300 hover:border-white/20 hover:text-white transition-all text-sm font-medium"
        >
          Copy Proof URL
        </button>
        <Link
          href="/dashboard"
          className="flex-1 py-2.5 rounded-xl text-center font-medium text-sm text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all glow-blue"
        >
          Generate Another
        </Link>
      </div>
    </div>
  );
}
