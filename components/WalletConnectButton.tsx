'use client';

import { useEffect } from 'react';
import {
  PrivateDataPermission,
  useWallet,
  WalletAdapterNetwork,
} from '@demox-labs/miden-wallet-adapter';

interface WalletConnectButtonProps {
  onConnect?: (connected: boolean) => void;
}

export default function WalletConnectButton({ onConnect }: WalletConnectButtonProps) {
  const { connected, connecting, connect, disconnect, publicKey, wallet, wallets, select } = useWallet();

  useEffect(() => {
    onConnect?.(connected);
  }, [connected, onConnect]);

  const handleConnect = async () => {
    if (!wallet && wallets[0]) {
      select(wallets[0].adapter.name);
    }
    await connect(PrivateDataPermission.UponRequest, WalletAdapterNetwork.Testnet);
  };

  if (connected) {
    return (
      <button
        onClick={() => disconnect()}
        className="px-4 py-2 border border-cyan-500/40 rounded-xl text-cyan-300 hover:border-cyan-300 transition-colors"
      >
        Connected {publicKey?.toString?.().slice(0, 8)}...
      </button>
    );
  }

  return (
    <button
      onClick={handleConnect}
      disabled={connecting}
      className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-colors disabled:opacity-70"
    >
      {connecting ? 'Connecting...' : 'Connect Miden Wallet'}
    </button>
  );
}
