import Link from 'next/link';

const features = [
  {
    icon: '🔒',
    title: 'Private Proofs',
    description:
      'Generate cryptographic proofs of your on-chain reputation without exposing wallet addresses, balances, or raw transaction history.',
  },
  {
    icon: '⚙️',
    title: 'Client-Side Execution',
    description:
      'All proof computation runs in your browser via Miden WASM. Your private data never leaves your device.',
  },
  {
    icon: '🚫',
    title: 'Zero Data Exposure',
    description:
      'Verifiers learn only what you choose to prove — nothing more. Built on zero-knowledge principles from day one.',
  },
];

export default function LandingPage() {
  return (
    <div className="hero-gradient">
      {/* Hero */}
      <section className="min-h-[88vh] flex flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-medium mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Powered by Polygon Miden ZK
        </div>

        <h1 className="text-7xl sm:text-8xl font-bold tracking-tight text-white mb-4 glow-text-blue">
          ZeroTrace
        </h1>

        <p className="text-xl sm:text-2xl text-slate-400 font-light mb-3 tracking-wide">
          Verified.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Zero trace left behind.
          </span>
        </p>

        <p className="text-slate-500 text-base max-w-xl mx-auto mb-12 leading-relaxed">
          Prove your on-chain reputation and portfolio strength without revealing
          your identity. Private by design. Verifiable by anyone.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/dashboard"
            className="px-8 py-3.5 rounded-xl font-semibold text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all glow-blue text-sm"
          >
            Generate Proof
          </Link>
          <a
            href="#how-it-works"
            className="px-8 py-3.5 rounded-xl font-medium text-slate-300 border border-white/10 hover:border-white/20 hover:text-white transition-all text-sm"
          >
            How it works
          </a>
        </div>

        {/* Decorative grid */}
        <div className="mt-20 w-full max-w-3xl mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050508] z-10" />
          <div
            className="h-48 rounded-2xl border border-white/5 bg-[#0d0d14] opacity-60"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>
      </section>

      {/* Features */}
      <section id="how-it-works" className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-3">Privacy by Architecture</h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            ZeroTrace uses zero-knowledge proofs to let you prove things about your wallet
            without revealing what's in it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="gradient-border rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-2xl">
                {f.icon}
              </div>
              <h3 className="text-white font-semibold text-lg">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="rounded-2xl border border-white/5 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Ready to prove yourself?</h2>
          <p className="text-slate-400 mb-8">Connect your wallet and generate your first private proof in seconds.</p>
          <Link
            href="/dashboard"
            className="inline-flex px-8 py-3.5 rounded-xl font-semibold text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all glow-blue text-sm"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
