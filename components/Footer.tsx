export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-xs font-bold text-black">
            ZT
          </div>
          <span className="text-slate-400 text-sm">ZeroTrace</span>
        </div>
        <p className="text-slate-600 text-xs text-center">
          Privacy-preserving proofs on Polygon Miden. No identity. No trace.
        </p>
        <p className="text-slate-600 text-xs">Built for hackathon demo</p>
      </div>
    </footer>
  );
}
