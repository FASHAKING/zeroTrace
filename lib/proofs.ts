export type BadgeId = 'early-miden-user' | 'active-builder' | 'consistent-wallet' | 'private-holder';

export interface Badge {
  id: BadgeId;
  name: string;
  description: string;
  icon: string;
  color: 'blue' | 'purple' | 'cyan' | 'violet';
}

export interface Proof {
  id: string;
  badgeId: BadgeId;
  badgeName: string;
  proofHash: string;
  timestamp: string;
  verified: boolean;
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

function generateProofHash(): string {
  const chars = 'abcdef0123456789';
  let hash = '0x';
  for (let i = 0; i < 64; i++) {
    hash += chars[Math.floor(Math.random() * chars.length)];
  }
  return hash;
}

export function generateProof(badgeId: BadgeId): Proof {
  const badge = BADGES.find((b) => b.id === badgeId);
  if (!badge) throw new Error(`Unknown badge: ${badgeId}`);

  const proof: Proof = {
    id: `${badgeId}-${Date.now()}`,
    badgeId,
    badgeName: badge.name,
    proofHash: generateProofHash(),
    timestamp: new Date().toISOString(),
    verified: true,
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
