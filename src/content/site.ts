export const site = {
  name: 'TradeHub',
  title: 'TradeHub — Investing in Morocco, brought together.',
  demoTitle: 'TradeHub demo environment',
  skipLink: 'Skip to main content',
  homeLabel: 'TradeHub — back to top',
  navigationLabel: 'Primary navigation',
  primaryAction: 'Try the Demo',
  secondaryAction: 'See the Product',
  primaryTarget: '/demo',
  secondaryTarget: '#showcase',
} as const;

export const hero = {
  eyebrow: 'Interactive demo',
  headline: 'Investing in Morocco, brought together.',
  introduction:
    'TradeHub is a Morocco-first investing platform bringing market information, investing practice, portfolio tools, and investor community into one integrated experience.',
  status:
    'A working TradeHub product already exists. Explore the experience through a controlled virtual demo built with simulated data.',
  helper:
    'No registration required. Demo activity is simulated and does not execute real-money trades.',
  clarity:
    'TradeHub currently provides a virtual investing environment. Real-money trade execution is not currently available.',
  visualLabel: 'Product preview',
  visualAlt:
    'TradeHub market overview with portfolio summary, market movers, indices, and a market heatmap. Account figures shown are simulated.',
  visualCaption:
    'Actual TradeHub interface. Demo account figures, balances, and portfolio performance are simulated. Market information is shown as captured, not as a live feed.',
  fullSizeLabel: 'Open the full-size product screenshot',
} as const;

export const fragmentedExperience = {
  eyebrow: 'The challenge',
  headline: 'The investing journey can feel fragmented.',
  introduction:
    'Exploring the market, practicing investment decisions, understanding a portfolio, and joining investor conversations can require moving between separate tools and channels. TradeHub is designed around a more connected experience for people interested in the Moroccan market.',
  points: [
    {
      number: '01',
      title: 'Discover',
      description:
        'Market context and company information may be explored separately from the rest of the investing journey.',
    },
    {
      number: '02',
      title: 'Practice',
      description:
        'Learning becomes more practical when people can explore decisions in a simulated environment.',
    },
    {
      number: '03',
      title: 'Understand',
      description:
        'Portfolio positions, allocation, performance, and activity are easier to follow in one coherent view.',
    },
    {
      number: '04',
      title: 'Connect',
      description:
        'Market tools and investor conversation become more useful when they share the same experience.',
    },
  ],
} as const;

export const integratedSolution = {
  eyebrow: 'The TradeHub approach',
  headline: 'One connected investing experience.',
  introduction:
    'TradeHub brings market exploration, virtual investing practice, portfolio understanding, and investor community into one platform built around the Moroccan market.',
  clarification:
    'The platform begins with a virtual investing environment, allowing people to explore the experience without real-money trade execution.',
  journey: ['Explore', 'Practice', 'Understand', 'Connect'],
} as const;

export const productPillars = {
  eyebrow: 'The platform',
  headline: 'Four parts of one investing experience.',
  introduction:
    'TradeHub is being built to connect the information, practice, tools, and conversations that shape how people engage with investing.',
  items: [
    {
      number: '01',
      title: 'Market Information',
      description:
        'Explore market and company information relevant to the Moroccan investing ecosystem in a product designed to connect information with the rest of the investing journey.',
    },
    {
      number: '02',
      title: 'Investing Practice',
      description:
        'Explore investment decisions in a virtual environment using simulated balances, transactions, and positions—without real-money trade execution.',
    },
    {
      number: '03',
      title: 'Portfolio Tools',
      description:
        'Follow positions, allocation, performance, and investing activity within the TradeHub experience.',
    },
    {
      number: '04',
      title: 'Investor Community',
      description:
        "Discuss companies, markets, investment ideas, and investing experiences through TradeHub's social and community functionality.",
    },
  ],
} as const;

export const productShowcase = {
  eyebrow: 'Inside TradeHub',
  headline: 'A working product, not just an idea.',
  introduction:
    'Explore real views from the TradeHub platform—from market discovery and virtual investing practice to portfolio understanding and investor community.',
  qualification:
    'Product views use simulated demo data. TradeHub does not currently execute real-money trades.',
  stories: [
    {
      number: '01',
      label: 'Market exploration',
      title: 'Explore the Moroccan market in context.',
      description:
        'Move from a broad market view toward the companies and information you want to understand, within the wider TradeHub experience.',
      image: {
        src: '/product/showcase/market-board.webp',
        srcset:
          '/product/showcase/market-board-640.webp 640w, /product/showcase/market-board.webp 1024w',
        width: 1024,
        height: 987,
        alt: 'TradeHub market board listing Moroccan market symbols with prices, changes, sectors, and captured update times.',
        caption:
          'Captured TradeHub market board. Market information is shown for illustration and is not a live, official, or exchange-provided feed.',
        fullSizeLabel: 'Open the full market-board screenshot',
      },
    },
    {
      number: '02',
      label: 'Virtual investing practice',
      title: 'Practice decisions in a virtual environment.',
      description:
        'Explore simulated buying and selling decisions without real-money trade execution, then see how those decisions affect the demo experience.',
      image: {
        src: '/product/showcase/virtual-investing.webp',
        srcset:
          '/product/showcase/virtual-investing-640.webp 640w, /product/showcase/virtual-investing.webp 1024w',
        width: 1024,
        height: 940,
        alt: 'TradeHub company view with a price chart, virtual trade panel, and simulated pending order.',
        caption:
          'TradeHub company view with a simulated order panel and pending-order example. All prices, orders, holdings, and results shown are demo data; no real-money trade is executed.',
        fullSizeLabel: 'Open the full virtual-investing screenshot',
      },
    },
    {
      number: '03',
      label: 'Portfolio understanding',
      title: 'See the portfolio as a connected picture.',
      description:
        'Review positions, allocation, performance, and investing activity together within the simulated TradeHub portfolio experience.',
      image: {
        src: '/product/showcase/portfolio.webp',
        srcset:
          '/product/showcase/portfolio-640.webp 640w, /product/showcase/portfolio.webp 1024w',
        width: 1024,
        height: 867,
        alt: 'TradeHub simulated portfolio with summary values, a performance chart, asset allocation, and holdings.',
        caption:
          'Simulated TradeHub portfolio view with positions, allocation, and performance. All balances, positions, and results shown are demo data.',
        fullSizeLabel: 'Open the full portfolio screenshot',
      },
    },
    {
      number: '04',
      label: 'Investor community',
      title: 'Connect tools with investor conversation.',
      description:
        "Discuss companies, markets, investment ideas, and investing experiences through TradeHub's social and community functionality.",
      image: {
        src: '/product/showcase/community.webp',
        srcset:
          '/product/showcase/community-480.webp 480w, /product/showcase/community.webp 701w',
        width: 701,
        height: 768,
        alt: 'TradeHub community feed with a post composer, demo posts, and suggested demo profiles.',
        caption:
          'TradeHub community view using approved demo profiles and demo posts. Community content is shown for product illustration, not as investment advice or endorsement.',
        fullSizeLabel: 'Open the full community screenshot',
      },
    },
  ],
} as const;

export const currentStage = {
  eyebrow: 'Current stage',
  headline: 'Built for hands-on exploration.',
  introduction:
    'A working TradeHub platform already exists. Visitors can explore the product through an isolated virtual demo without creating an account.',
  supportingCopy:
    'The demo uses simulated balances, positions, transactions, watchlists, and community content so people can understand the experience without real-money execution.',
  steps: [
    {
      number: '01',
      title: 'Built',
      description:
        'A working product brings the core TradeHub experience together.',
    },
    {
      number: '02',
      title: 'Explore',
      description:
        'The public demo provides a controlled environment for hands-on product exploration.',
    },
    {
      number: '03',
      title: 'Long-term direction',
      description:
        "TradeHub's broader vision is to connect more of the Moroccan retail-investing journey over time.",
    },
  ],
} as const;

export const credibility = {
  eyebrow: 'Relevant experience',
  headline: 'Experience shaped by markets and product building.',
  introduction:
    'The founders bring complementary experience in software, product building, investing, and market-oriented competitions.',
  achievements: [
    {
      number: '01',
      title: '2nd Place — Casablanca Stock Exchange Trading Competition, 2025',
      attribution: 'Nour-Eddine Ait Bouguarri',
      description:
        'This achievement belongs to Nour-Eddine and is not presented as a TradeHub award.',
    },
    {
      number: '02',
      title:
        '2nd Place — CIH Bank & StartGate UM6P Embedded Finance Hackathon, 2026',
      attribution: 'Nour-Eddine Ait Bouguarri and Aymane Kajjou',
      description:
        'Both TradeHub co-founders were members of the team awarded second place.',
    },
  ],
  clarification:
    'These achievements describe founder participation and do not represent institutional partnerships or endorsements of TradeHub.',
} as const;

export const founders = {
  eyebrow: 'Founders',
  headline: 'Meet the people building TradeHub.',
  introduction:
    'TradeHub is being built by two co-founders shaped by project-based learning at the 1337 / 42 Network and a shared focus on turning ideas into working products.',
  profiles: [
    {
      name: 'Nour-Eddine Ait Bouguarri',
      role: 'Co-founder',
      bio: 'Software engineer from the 1337 / 42 Network focused on backend systems, infrastructure, financial technology, and market-oriented products. He combines technical experience with a strong interest in investing and trading and is helping build TradeHub around the needs of Moroccan retail investors.',
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
      bio: 'Student at 1337 Coding School, UM6P / 42 Network, interested in technology, product building, and entrepreneurship. He focuses on turning ideas into practical products and exploring how technology can solve meaningful real-world problems.',
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

export const closingDemo = {
  eyebrow: 'Try TradeHub',
  headline: 'Explore the product for yourself.',
  supportingCopy:
    'Open a preloaded demo environment to explore market information, virtual investing, portfolio tools, and community features—without registration.',
  action: 'Try the Demo',
  target: '/demo',
  note: 'All demo balances, positions, transactions, and activity are simulated. No real-money trades are executed.',
} as const;

export const disclaimer =
  'TradeHub currently provides a virtual investing environment. Demo balances, transactions, positions, and activity are simulated. TradeHub does not currently execute real-money trades. Financial and market information is provided for informational purposes and does not constitute personalized investment advice.';

export const footer = {
  descriptor: 'Morocco-first investing platform.',
  navigationLabel: 'Footer navigation',
  links: [
    { label: 'Product', href: '#showcase' },
    { label: 'Founders', href: '#founders' },
    { label: 'Try the Demo', href: '/demo' },
  ],
  copyright: '© 2026 TradeHub.',
} as const;

export const demoHandoff = {
  label: 'Development handoff — not the final public demo',
  headline: 'TradeHub demo environment',
  status:
    'The isolated interactive demo is being connected to the TradeHub product experience. It will use simulated data and will not execute real-money trades.',
  backLabel: 'Back to the TradeHub website',
  backTarget: '/',
} as const;
