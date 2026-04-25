import type { Metadata } from 'next';
import './globals.css';
import '@demox-labs/miden-wallet-adapter/styles.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MidenProvider } from '@/components/providers/MidenProvider';

export const metadata: Metadata = {
  title: 'ZeroTrace — Verified. Zero trace left behind.',
  description:
    'Privacy-first proof system for Polygon Miden. Generate reputation and portfolio proofs without revealing your wallet address or balances.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#050508] text-slate-200 antialiased">
        <MidenProvider>
          <Header />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </MidenProvider>
      </body>
    </html>
  );
}
