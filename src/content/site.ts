export const site = {
  name: 'TradeHub',
  title: 'TradeHub — Explore the market. Practice investing.',
  description:
    'Explore Moroccan market information, practice virtual investing, track a simulated portfolio, and join investor conversations with TradeHub.',
  skipLink: 'Skip to main content',
  homeLabel: 'TradeHub — back to top',
  navigationLabel: 'Primary navigation',
  menuLabel: 'Menu',
  closeMenuLabel: 'Close menu',
  navigation: [
    { label: 'Product', href: '#product' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'About', href: '#about' },
    { label: 'Founders', href: '#founders' },
  ],
} as const;

export const hero = {
  eyebrow: 'A Morocco-first investing platform',
  headline: 'Explore the market. Practice investing. See the full picture.',
  introduction:
    'TradeHub connects Moroccan market information, virtual investing, portfolio tracking, and investor community in one product.',
  primaryAction: 'Explore the product',
  primaryTarget: '#product',
  secondaryAction: 'See how it works',
  secondaryTarget: '#how-it-works',
  trustItems: ['Morocco-first', 'Virtual investing', 'Connected experience'],
  visualLabel: 'TradeHub product',
  visualAlt:
    'TradeHub market overview with a virtual portfolio summary, market movers, indices, and a captured market heatmap.',
  visualCaption:
    'Authentic TradeHub interface. Virtual account figures are simulated and market information is shown as captured, not live.',
  fullSizeLabel: 'Open the full-size dashboard screenshot',
} as const;

export const proof = [
  'Moroccan market context',
  'Virtual buy and sell practice',
  'Portfolio and transaction tracking',
  'Market and community in one experience',
] as const;

export const productExperience = {
  eyebrow: 'Inside TradeHub',
  headline: 'One product. Four connected experiences.',
  introduction:
    'Move from market discovery to a simulated decision, follow the portfolio impact, and continue the conversation without switching platforms.',
  tabsLabel: 'TradeHub product experiences',
  items: [
    {
      id: 'market',
      label: 'Market',
      heading: 'Find the company. Understand the context.',
      description:
        'Search the Moroccan market, compare movement, and open detailed company information from one place.',
      image: {
        src: '/product/showcase/market-board.webp',
        srcset:
          '/product/showcase/market-board-640.webp 640w, /product/showcase/market-board.webp 1024w',
        width: 1024,
        height: 987,
        alt: 'TradeHub market board listing Moroccan market symbols with captured prices, changes, sectors, and update times.',
        caption:
          'Captured TradeHub market board. Market information is illustrative and is not a live, official, or exchange-provided feed.',
        fullSizeLabel: 'Open the full market-board screenshot',
      },
    },
    {
      id: 'practice',
      label: 'Practice',
      heading: 'Test a decision before risking real money.',
      description:
        'Use a simulated balance to practice buy and sell decisions through the real TradeHub workflow.',
      image: {
        src: '/product/showcase/virtual-investing.webp',
        srcset:
          '/product/showcase/virtual-investing-640.webp 640w, /product/showcase/virtual-investing.webp 1024w',
        width: 1024,
        height: 940,
        alt: 'TradeHub company view with a captured price chart, virtual trade panel, and simulated pending order.',
        caption:
          'TradeHub company view with a simulated order panel. Prices, orders, holdings, and results shown are virtual product data.',
        fullSizeLabel: 'Open the full virtual-investing screenshot',
      },
    },
    {
      id: 'portfolio',
      label: 'Portfolio',
      heading: 'Follow what changed.',
      description:
        'See positions, allocation, performance, and transaction history in one connected view.',
      image: {
        src: '/product/showcase/portfolio.webp',
        srcset:
          '/product/showcase/portfolio-640.webp 640w, /product/showcase/portfolio.webp 1024w',
        width: 1024,
        height: 867,
        alt: 'TradeHub simulated portfolio with summary values, a performance chart, asset allocation, and holdings.',
        caption:
          'Simulated TradeHub portfolio view. Balances, positions, and performance shown are virtual product data.',
        fullSizeLabel: 'Open the full portfolio screenshot',
      },
    },
    {
      id: 'community',
      label: 'Community',
      heading: 'Keep the conversation close to the market.',
      description:
        'Discuss companies and ideas, follow activity, and explore the community around the investing experience.',
      image: {
        src: '/product/showcase/community.webp',
        srcset:
          '/product/showcase/community-480.webp 480w, /product/showcase/community.webp 701w',
        width: 701,
        height: 768,
        alt: 'TradeHub community feed with a post composer, approved sample posts, and suggested sample profiles.',
        caption:
          'TradeHub community view using approved sample profiles and posts for product illustration.',
        fullSizeLabel: 'Open the full community screenshot',
      },
    },
  ],
} as const;

export const howItWorks = {
  eyebrow: 'How it works',
  headline: 'From discovery to understanding.',
  steps: [
    {
      number: '01',
      title: 'Discover',
      description:
        'Explore companies and market information built around the Moroccan investing context.',
    },
    {
      number: '02',
      title: 'Practice',
      description:
        'Try simulated buy and sell decisions without using real money.',
    },
    {
      number: '03',
      title: 'Understand',
      description:
        'Follow positions, allocation, performance, and transaction history.',
    },
    {
      number: '04',
      title: 'Connect',
      description:
        'Continue through community discussion, profiles, and shared market interest.',
    },
  ],
} as const;

export const whyTradeHub = {
  eyebrow: 'Why TradeHub',
  headline: 'Investing tools should feel connected.',
  copy: 'Market research, investing practice, portfolio tracking, and investor conversations often happen in separate places. TradeHub brings them into one coherent product designed around the Moroccan market.',
  supportingCopy:
    'The goal is simple: make the investing journey easier to explore and easier to understand.',
  flow: ['Market', 'Practice', 'Portfolio', 'Community'],
  status: {
    heading: 'Built and ready to explore.',
    copy: 'TradeHub is a working product bringing market exploration, virtual investing, portfolio tracking, and community into one connected experience.',
    labels: ['Working product', 'Four connected experiences', 'Morocco-first'],
  },
} as const;

export const credibility = {
  eyebrow: 'Credibility',
  headline: 'Experience behind the product.',
  achievements: [
    {
      number: '01',
      title: '2nd Place — Casablanca Stock Exchange Trading Competition, 2025',
      attribution: 'Nour-Eddine Ait Bouguarri',
      qualification:
        'Founder achievement. Not a TradeHub award or institutional endorsement.',
    },
    {
      number: '02',
      title:
        '2nd Place — CIH Bank & StartGate UM6P Embedded Finance Hackathon, 2026',
      attribution:
        'Nour-Eddine Ait Bouguarri and Aymane Kajjou, as members of the awarded team.',
      qualification:
        'Founder participation. Not a partnership or endorsement of TradeHub.',
    },
  ],
} as const;

export const founders = {
  eyebrow: 'Founders',
  headline: 'The people behind TradeHub.',
  profiles: [
    {
      name: 'Nour-Eddine Ait Bouguarri',
      role: 'Co-founder',
      bio: 'Software engineer from the 1337 / 42 Network focused on backend systems, infrastructure, and financial technology. He brings a strong interest in markets and trading to the product.',
      linkedIn: 'https://www.linkedin.com/in/nour-eddin-ait-bouguarri',
      linkedInLabel: 'View Nour-Eddine on LinkedIn',
      portrait: {
        src: '/founders/nour-eddine-ait-bouguarri.webp',
        srcset:
          '/founders/nour-eddine-ait-bouguarri-320.webp 320w, /founders/nour-eddine-ait-bouguarri.webp 600w',
        width: 600,
        height: 600,
        alt: 'Portrait of Nour-Eddine Ait Bouguarri, TradeHub co-founder.',
      },
    },
    {
      name: 'Aymane Kajjou',
      role: 'Co-founder',
      bio: 'Student at 1337 Coding School, UM6P / 42 Network, focused on product building and entrepreneurship. He works on turning ideas into practical products.',
      linkedIn: 'https://www.linkedin.com/in/aymane-kajjou',
      linkedInLabel: 'View Aymane on LinkedIn',
      portrait: {
        src: '/founders/aymane-kajjou.webp',
        srcset:
          '/founders/aymane-kajjou-320.webp 320w, /founders/aymane-kajjou.webp 400w',
        width: 400,
        height: 400,
        alt: 'Portrait of Aymane Kajjou, TradeHub co-founder.',
      },
    },
  ],
} as const;

export const disclaimer =
  'TradeHub currently provides a virtual investing environment. Balances, transactions, positions, and activity shown in product captures are simulated. TradeHub does not currently execute real-money trades. Financial and market information is provided for informational purposes and does not constitute personalized investment advice.';

export const footer = {
  descriptor: 'Morocco-first investing platform',
  navigationLabel: 'Footer navigation',
  links: [
    { label: 'Product', href: '#product' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'About', href: '#about' },
    { label: 'Founders', href: '#founders' },
  ],
  copyright: '© 2026 TradeHub',
} as const;
