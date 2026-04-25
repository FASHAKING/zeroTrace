'use client';

import { ReactNode, useMemo } from 'react';
import { WalletProvider } from '@demox-labs/miden-wallet-adapter';
import { MidenWalletAdapter } from '@demox-labs/miden-wallet-adapter-miden';

export function MidenProvider({ children }: { children: ReactNode }) {
  const wallets = useMemo(() => [new MidenWalletAdapter()], []);

  return (
    <WalletProvider wallets={wallets} autoConnect>
      {children}
    </WalletProvider>
  );
}
