export const site = {
  name: 'TradeHub',
  title: 'TradeHub — Investing in Morocco, brought together.',
  skipLink: 'Skip to main content',
  homeLabel: 'TradeHub — back to top',
  navigationLabel: 'Primary navigation',
  primaryAction: 'Request Early Access',
  secondaryAction: 'Explore TradeHub',
  primaryTarget: '#early-access',
  secondaryTarget: '#product-preview',
} as const;

export const hero = {
  eyebrow: 'Preparing for early users',
  headline: 'Investing in Morocco, brought together.',
  introduction:
    'TradeHub is a Morocco-first investing platform bringing market information, investing practice, portfolio tools, and investor community into one integrated experience.',
  status:
    "A working TradeHub platform is already built. We're preparing to open it to early users.",
  clarity:
    'TradeHub currently provides a virtual investing environment. Real-money trade execution is not currently available.',
  visualLabel: 'Product preview',
  visualAlt:
    'TradeHub market overview with portfolio summary, market movers, indices, and a market heatmap. Account figures shown are simulated.',
  visualCaption:
    'Actual TradeHub interface. Demo account figures, balances, and portfolio performance are simulated. Market information is shown as captured, not as a live feed.',
  fullSizeLabel: 'Open the full-size product screenshot',
  accessLabel: 'Early access',
  accessNotice:
    'Early-access requests are not open on this page yet. No information is collected here.',
  temporaryActionNote:
    'Explore TradeHub currently opens the product preview on this page.',
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

// Future product requirement only: no /demo route is implemented in Task 002.
export const futureDemoPath = '/demo';
export const pendingInputs = {
  contact: null,
  earlyAccessDestination: null,
  productionUrl: null,
} as const;
