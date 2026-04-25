'use client';

import { useState } from 'react';

interface WalletConnectButtonProps {
  onConnect?: (connected: boolean) => void;
}

export default function WalletConnectButton({ onConnect }: WalletConnectButtonProps) {
  const [connected, setConnected] = useState(false);
  const [connecting, setConnecting] = useState(false);

  const handleClick = async () => {
    if (connected) {
      setConnected(false);
      onConnect?.(false);
      return;
    }

    setConnecting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setConnected(true);
    setConnecting(false);
    onConnect?.(true);
  };

  if (connected) {
    return (
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-500/10 border border-green-500/30">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-green-400 text-sm font-mono">miden1...a9f3</span>
        </div>
        <button
          onClick={handleClick}
          className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
        >
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={handleClick}
      disabled={connecting}
      className="relative px-6 py-2.5 rounded-xl font-medium text-sm text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all glow-blue disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {connecting ? (
        <span className="flex items-center gap-2">
          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
          </svg>
          Connecting...
        </span>
      ) : (
        'Connect Wallet'
      )}
    </button>
  );
}
