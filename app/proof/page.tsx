import { Suspense } from 'react';
import ProofPageClient from './ProofPageClient';

export default function ProofPage() {
  return (
    <Suspense fallback={null}>
      <ProofPageClient />
    </Suspense>
  );
}
