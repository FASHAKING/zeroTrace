export type ProofBadge =
  | 'Early Miden User'
  | 'Active Builder'
  | 'Consistent Wallet'
  | 'Private Holder';

export type BadgeId = 'early-miden-user' | 'active-builder' | 'consistent-wallet' | 'private-holder';

export interface Badge {
  id: BadgeId;
  name: ProofBadge;
  description: string;
  icon: string;
  color: 'blue' | 'purple' | 'cyan' | 'violet';
}

export interface Proof {
  id: string;
  badge: ProofBadge;
  verified: boolean;
  proofHash: string;
  timestamp: string;
  network: 'Miden';
}

export const BADGES: Badge[] = [
  {
    id: 'early-miden-user',
    name: 'Early Miden User',
    description: 'Proves on-chain activity during Miden testnet without revealing wallet age or address.',
    icon: '⚡',
    color: 'blue',
  },
  {
    id: 'active-builder',
    name: 'Active Builder',
    description: 'Proves consistent smart contract interactions without exposing contract addresses.',
    icon: '🔨',
    color: 'purple',
  },
  {
    id: 'consistent-wallet',
    name: 'Consistent Wallet',
    description: 'Proves regular transaction activity over 90 days without revealing timestamps.',
    icon: '🔄',
    color: 'cyan',
  },
  {
    id: 'private-holder',
    name: 'Private Holder',
    description: 'Proves token holdings above a threshold without disclosing exact balance or assets.',
    icon: '🛡️',
    color: 'violet',
  },
];

export function generateProof(badge: ProofBadge): Proof {
  const proofId = crypto.randomUUID();
  const proof: Proof = {
    id: proofId,
    badge,
    verified: true,
    proofHash:
      '0x' +
      Array.from(crypto.getRandomValues(new Uint8Array(32)))
        .map((b) => b.toString(16).padStart(2, '0'))
        .join(''),
    timestamp: new Date().toISOString(),
    network: 'Miden',
  };

  const stored = getStoredProofs();
  stored[proof.id] = proof;
  localStorage.setItem('zerotrace_proofs', JSON.stringify(stored));

  return proof;
}

export function getStoredProofs(): Record<string, Proof> {
  if (typeof window === 'undefined') return {};
  try {
    return JSON.parse(localStorage.getItem('zerotrace_proofs') || '{}');
  } catch {
    return {};
  }
}

export function getProofById(id: string): Proof | null {
  return getStoredProofs()[id] ?? null;
}
