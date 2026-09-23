export type DemoStock = {
  id: string;
  symbol: string;
  name: string;
  sector: string;
  price: number;
  open: number;
  high: number;
  low: number;
  volume: number;
  change: number;
  history: number[];
};

export type DemoHolding = {
  stockId: string;
  quantity: number;
  averageCost: number;
};
export type DemoTransaction = {
  id: string;
  stockId: string;
  side: 'buy' | 'sell';
  quantity: number;
  price: number;
  createdAt: string;
};
export type DemoSocialPost = {
  id: string;
  authorId: string;
  createdAt: string;
  body: string;
  topic: 'Market' | 'Strategy' | 'Learning';
  stockId?: string;
  reactions: number;
  comments: number;
};
export type DemoState = {
  version: 2;
  sessionId: string;
  cash: number;
  holdings: DemoHolding[];
  transactions: DemoTransaction[];
  watchlist: string[];
  socialPosts: DemoSocialPost[];
  likedPosts: string[];
  followedPeople: string[];
};

export const stocks: DemoStock[] = [
  {
    id: 'afi',
    symbol: 'AFI',
    name: 'Afric Industries',
    sector: 'Industrials',
    price: 332.1,
    open: 332.05,
    high: 338.4,
    low: 329.5,
    volume: 18420,
    change: 0.02,
    history: [324, 326, 325, 329, 328, 331, 330, 333, 332.1],
  },
  {
    id: 'crs',
    symbol: 'CRS',
    name: 'Cartier Saada',
    sector: 'Consumer goods',
    price: 20,
    open: 19.6,
    high: 25.6,
    low: 19.2,
    volume: 132320,
    change: 2.05,
    history: [18.8, 19.1, 19.4, 19.2, 19.7, 19.8, 20.2, 19.9, 20],
  },
  {
    id: 'dyt',
    symbol: 'DYT',
    name: 'Disty Technologies',
    sector: 'Technology',
    price: 355.05,
    open: 353.3,
    high: 361,
    low: 349.2,
    volume: 4860,
    change: 0.5,
    history: [344, 348, 351, 347, 352, 354, 350, 353, 355.05],
  },
  {
    id: 'fbr',
    symbol: 'FBR',
    name: 'Fenie Brossette',
    sector: 'Distribution',
    price: 348,
    open: 346.22,
    high: 377.4,
    low: 342,
    volume: 9710,
    change: 0.51,
    history: [337, 340, 344, 342, 346, 349, 347, 350, 348],
  },
  {
    id: 'inv',
    symbol: 'INV',
    name: 'Involys',
    sector: 'Technology',
    price: 126.3,
    open: 129,
    high: 139.75,
    low: 124.6,
    volume: 24100,
    change: -2.09,
    history: [137, 135, 132, 134, 130, 129, 128, 127, 126.3],
  },
  {
    id: 'm2m',
    symbol: 'M2M',
    name: 'M2M Group',
    sector: 'Technology',
    price: 397.35,
    open: 397.55,
    high: 408,
    low: 390,
    volume: 3250,
    change: -0.05,
    history: [389, 394, 392, 398, 401, 399, 396, 398, 397.35],
  },
  {
    id: 'mdp',
    symbol: 'MDP',
    name: 'Med Paper',
    sector: 'Materials',
    price: 24.65,
    open: 25.71,
    high: 25.9,
    low: 24.4,
    volume: 62900,
    change: -4.12,
    history: [27.2, 26.9, 27, 26.4, 26.1, 25.8, 25.3, 24.9, 24.65],
  },
  {
    id: 'mox',
    symbol: 'MOX',
    name: 'Maghreb Oxygene',
    sector: 'Industrials',
    price: 384.9,
    open: 385,
    high: 401,
    low: 380,
    volume: 6180,
    change: -0.03,
    history: [378, 380, 383, 388, 386, 390, 387, 386, 384.9],
  },
  {
    id: 'reb',
    symbol: 'REB',
    name: 'Rebab Company',
    sector: 'Finance',
    price: 98,
    open: 92.46,
    high: 99.4,
    low: 91.8,
    volume: 41500,
    change: 5.99,
    history: [89, 90, 92, 91, 94, 93, 96, 97, 98],
  },
  {
    id: 's2m',
    symbol: 'S2M',
    name: 'Société Maghrébine de Monétique',
    sector: 'Technology',
    price: 529.9,
    open: 534,
    high: 540,
    low: 518,
    volume: 2940,
    change: -0.77,
    history: [541, 538, 535, 537, 532, 534, 531, 528, 529.9],
  },
];

export const communityPeople = [
  {
    id: 'nadia',
    name: 'Nadia El Amrani',
    initials: 'ND',
    handle: '@nadia.demo',
    role: 'Market learner',
    accent: '#b9a27f',
  },
  {
    id: 'omar',
    name: 'Omar Benali',
    initials: 'OS',
    handle: '@omar.sandbox',
    role: 'Practice trader',
    accent: '#7ea99b',
  },
  {
    id: 'leila',
    name: 'Leila Haddad',
    initials: 'LP',
    handle: '@leila.preview',
    role: 'Finance student',
    accent: '#aa8eaa',
  },
  {
    id: 'yassine',
    name: 'Yassine Kabbaj',
    initials: 'YK',
    handle: '@yassine.paper',
    role: 'Long-term investor',
    accent: '#8f9fbe',
  },
  {
    id: 'salma',
    name: 'Salma Rami',
    initials: 'SR',
    handle: '@salma.notes',
    role: 'Research enthusiast',
    accent: '#ba8e7b',
  },
] as const;

export const communityPosts: DemoSocialPost[] = [
  {
    id: 'social-1',
    authorId: 'nadia',
    createdAt: '2026-09-23T10:42:00Z',
    body: 'Reviewing market breadth before making any virtual moves today. The strongest setups still need a clear risk level.',
    topic: 'Market',
    stockId: 'reb',
    reactions: 18,
    comments: 4,
  },
  {
    id: 'social-2',
    authorId: 'omar',
    createdAt: '2026-09-23T09:55:00Z',
    body: 'My practice portfolio is teaching me that position sizing matters more than finding the perfect entry. Small virtual orders make the lesson easier to see.',
    topic: 'Learning',
    reactions: 27,
    comments: 8,
  },
  {
    id: 'social-3',
    authorId: 'leila',
    createdAt: '2026-09-23T08:34:00Z',
    body: 'Added two industrial names to my demo watchlist. Waiting for confirmation rather than chasing the first move.',
    topic: 'Strategy',
    stockId: 'afi',
    reactions: 14,
    comments: 3,
  },
  {
    id: 'social-4',
    authorId: 'yassine',
    createdAt: '2026-09-22T16:20:00Z',
    body: 'A useful paper-trading rule: write down why you entered before looking at the daily result. It makes the review much more honest.',
    topic: 'Learning',
    reactions: 31,
    comments: 6,
  },
  {
    id: 'social-5',
    authorId: 'salma',
    createdAt: '2026-09-22T14:05:00Z',
    body: 'Technology names are mixed in today’s synthetic board. I am comparing volume and price direction before updating my practice thesis.',
    topic: 'Market',
    stockId: 'dyt',
    reactions: 22,
    comments: 5,
  },
];

function sessionId() {
  return typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : `demo-${Date.now().toString(36)}`;
}

export function initialState(): DemoState {
  return {
    version: 2,
    sessionId: sessionId(),
    cash: 82450,
    holdings: [
      { stockId: 'mox', quantity: 120, averageCost: 371.2 },
      { stockId: 'crs', quantity: 900, averageCost: 18.7 },
      { stockId: 'afi', quantity: 55, averageCost: 325.4 },
      { stockId: 'm2m', quantity: 40, averageCost: 402.1 },
    ],
    transactions: [
      {
        id: 'seed-1',
        stockId: 'mox',
        side: 'buy',
        quantity: 120,
        price: 371.2,
        createdAt: '2026-09-18T10:24:00Z',
      },
      {
        id: 'seed-2',
        stockId: 'crs',
        side: 'buy',
        quantity: 900,
        price: 18.7,
        createdAt: '2026-09-17T14:08:00Z',
      },
      {
        id: 'seed-3',
        stockId: 'afi',
        side: 'buy',
        quantity: 55,
        price: 325.4,
        createdAt: '2026-09-16T09:42:00Z',
      },
      {
        id: 'seed-4',
        stockId: 'm2m',
        side: 'buy',
        quantity: 40,
        price: 402.1,
        createdAt: '2026-09-15T15:31:00Z',
      },
    ],
    watchlist: ['reb', 'crs', 'afi', 'mdp'],
    socialPosts: communityPosts.map((post) => ({ ...post })),
    likedPosts: ['social-3'],
    followedPeople: ['nadia'],
  };
}
