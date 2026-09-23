export const TOUR_VERSION = 1 as const;
export const TOUR_INSTRUMENT_ID = 'dyt' as const;
export const TOUR_INSTRUMENT_SYMBOL = 'DYT' as const;
export const TOUR_BUY_QUANTITY = 10 as const;
export const TOUR_SELL_QUANTITY = 5 as const;

export type TourStatus =
  'not-started' | 'active' | 'paused' | 'skipped' | 'completed' | 'error';
export type TourChapter = 'Discover' | 'Practice' | 'Understand' | 'Connect';
export type TourRoute =
  | 'dashboard'
  | 'market'
  | 'stock'
  | 'portfolio'
  | 'transactions'
  | 'watchlist'
  | 'community'
  | 'profile';
export type TourPlacement = 'top' | 'right' | 'bottom' | 'left';

export type TourTargetId =
  | 'dashboard-summary'
  | 'nav-market'
  | 'market-search'
  | 'market-result-dyt'
  | 'stock-overview'
  | 'watchlist-toggle'
  | 'trade-buy'
  | 'trade-quantity'
  | 'trade-confirm'
  | 'nav-portfolio'
  | 'portfolio-position-dyt'
  | 'portfolio-summary'
  | 'nav-transactions'
  | 'transaction-dyt-buy'
  | 'trade-sell'
  | 'nav-watchlist'
  | 'watchlist-dyt'
  | 'nav-community'
  | 'community-post-social-1'
  | 'community-like-social-1'
  | 'nav-profile'
  | 'social-tools';

export type TourStep = {
  number: number;
  chapter: TourChapter;
  route: TourRoute;
  target: TourTargetId;
  title: string;
  body: string;
  placement: TourPlacement;
  informational?: boolean;
};

export const tourSteps: Record<number, TourStep> = {
  2: {
    number: 2,
    chapter: 'Discover',
    route: 'dashboard',
    target: 'dashboard-summary',
    title: 'Your investing overview',
    body: 'This dashboard brings together your simulated balance, portfolio value, market movement, and important activity in one place.',
    placement: 'bottom',
    informational: true,
  },
  3: {
    number: 3,
    chapter: 'Discover',
    route: 'dashboard',
    target: 'nav-market',
    title: 'Start with the market',
    body: 'Open Market to discover companies and explore the information available for each instrument.',
    placement: 'right',
  },
  4: {
    number: 4,
    chapter: 'Discover',
    route: 'market',
    target: 'market-search',
    title: 'Find a company',
    body: 'Search for DYT, the highlighted synthetic demo company, then open its market page.',
    placement: 'bottom',
  },
  5: {
    number: 5,
    chapter: 'Discover',
    route: 'stock',
    target: 'stock-overview',
    title: 'Understand the market context',
    body: 'Review the illustrative price history and indicators before practicing an investment decision. This is not a live trading feed.',
    placement: 'bottom',
    informational: true,
  },
  6: {
    number: 6,
    chapter: 'Practice',
    route: 'stock',
    target: 'watchlist-toggle',
    title: 'Save it to your watchlist',
    body: 'Add DYT to your watchlist so you can return to it quickly.',
    placement: 'left',
  },
  7: {
    number: 7,
    chapter: 'Practice',
    route: 'stock',
    target: 'trade-buy',
    title: 'Practice a buy decision',
    body: 'Choose Buy to use the real virtual order flow. It cannot execute a real-money trade.',
    placement: 'left',
  },
  8: {
    number: 8,
    chapter: 'Practice',
    route: 'stock',
    target: 'trade-quantity',
    title: 'Complete the simulated order',
    body: 'Enter the suggested quantity of 10, then confirm the virtual purchase.',
    placement: 'left',
  },
  9: {
    number: 9,
    chapter: 'Understand',
    route: 'stock',
    target: 'nav-portfolio',
    title: 'See the portfolio impact',
    body: 'Open Portfolio to see the new position, invested value, and simulated performance in one view.',
    placement: 'right',
  },
  10: {
    number: 10,
    chapter: 'Understand',
    route: 'portfolio',
    target: 'portfolio-position-dyt',
    title: 'A connected portfolio view',
    body: 'Your DYT position now appears alongside portfolio totals and performance information.',
    placement: 'top',
    informational: true,
  },
  11: {
    number: 11,
    chapter: 'Understand',
    route: 'portfolio',
    target: 'nav-transactions',
    title: 'Keep a clear activity history',
    body: 'Open Transactions to find the simulated purchase and review how TradeHub records investing activity.',
    placement: 'right',
  },
  12: {
    number: 12,
    chapter: 'Practice',
    route: 'transactions',
    target: 'nav-portfolio',
    title: 'Practice a partial sell',
    body: 'Return to Portfolio, open DYT, choose Sell, enter 5, and confirm. Five virtual shares will remain.',
    placement: 'right',
  },
  13: {
    number: 13,
    chapter: 'Practice',
    route: 'stock',
    target: 'nav-watchlist',
    title: 'Keep important instruments close',
    body: 'Open Watchlist to confirm that DYT remains easy to revisit.',
    placement: 'right',
  },
  14: {
    number: 14,
    chapter: 'Connect',
    route: 'watchlist',
    target: 'nav-community',
    title: 'Learn and connect through community',
    body: 'Open Community, then react to the highlighted synthetic discussion. The reaction stays in this browser.',
    placement: 'right',
  },
  15: {
    number: 15,
    chapter: 'Connect',
    route: 'community',
    target: 'nav-profile',
    title: 'More ways to explore TradeHub',
    body: 'Open Profile to see where leaderboard, notifications, friends, and messaging fit in the wider experience.',
    placement: 'right',
  },
};

export type TourState = {
  version: typeof TOUR_VERSION;
  status: TourStatus;
  chapter: TourChapter;
  step: number;
  substep: string;
  instrumentId: typeof TOUR_INSTRUMENT_ID;
  buyQuantity: typeof TOUR_BUY_QUANTITY;
  sellQuantity: typeof TOUR_SELL_QUANTITY;
  buyTransactionId?: string;
  sellTransactionId?: string;
  watchlistComplete: boolean;
  communityComplete: boolean;
  routeExpectation: TourRoute;
  error?: string;
};

export type TourEvent =
  | { type: 'START' }
  | { type: 'NEXT' }
  | { type: 'BACK' }
  | { type: 'SKIP' }
  | { type: 'PAUSE' }
  | { type: 'RESUME' }
  | { type: 'NAVIGATED'; route: TourRoute }
  | { type: 'SEARCH_MATCH' }
  | { type: 'INSTRUMENT_OPENED'; instrumentId: string }
  | { type: 'WATCHLIST_UPDATED'; instrumentId: string; watched: boolean }
  | { type: 'SIDE_SELECTED'; side: 'buy' | 'sell' }
  | { type: 'QUANTITY_SET'; quantity: number }
  | {
      type: 'TRADE_SUCCEEDED';
      instrumentId: string;
      side: 'buy' | 'sell';
      quantity: number;
      transactionId: string;
    }
  | { type: 'COMMUNITY_REACTED'; postId: string; liked: boolean }
  | { type: 'FINISH' }
  | { type: 'ERROR'; message: string }
  | { type: 'RETRY' };

export function initialTourState(): TourState {
  return {
    version: TOUR_VERSION,
    status: 'not-started',
    chapter: 'Discover',
    step: 1,
    substep: 'welcome',
    instrumentId: TOUR_INSTRUMENT_ID,
    buyQuantity: TOUR_BUY_QUANTITY,
    sellQuantity: TOUR_SELL_QUANTITY,
    watchlistComplete: false,
    communityComplete: false,
    routeExpectation: 'dashboard',
  };
}

function atStep(state: TourState, step: number, substep = 'ready'): TourState {
  const definition = tourSteps[step];
  return {
    ...state,
    status: 'active',
    step,
    substep,
    chapter: definition.chapter,
    routeExpectation: definition.route,
    error: undefined,
  };
}

export function transitionTour(state: TourState, event: TourEvent): TourState {
  if (event.type === 'START') return atStep(initialTourState(), 2);
  if (event.type === 'SKIP') return { ...state, status: 'skipped' };
  if (event.type === 'PAUSE' && state.status === 'active')
    return { ...state, status: 'paused' };
  if (event.type === 'RESUME' && state.status === 'paused')
    return { ...state, status: 'active' };
  if (event.type === 'ERROR')
    return { ...state, status: 'error', error: event.message };
  if (event.type === 'RETRY' && state.status === 'error')
    return { ...state, status: 'active', error: undefined };
  if (state.status !== 'active') return state;

  if (event.type === 'BACK' && state.step > 2)
    return atStep(state, state.step - 1);
  if (
    event.type === 'NEXT' &&
    ([2, 5, 10].includes(state.step) ||
      (state.step === 11 && state.substep === 'verify') ||
      (state.step === 13 && state.substep === 'verify'))
  )
    return atStep(
      state,
      state.step + 1,
      state.step === 11 ? 'open-portfolio' : 'ready',
    );
  if (
    state.step === 3 &&
    event.type === 'NAVIGATED' &&
    event.route === 'market'
  )
    return atStep(state, 4, 'search');
  if (state.step === 4 && event.type === 'SEARCH_MATCH')
    return { ...state, substep: 'result' };
  if (
    state.step === 4 &&
    event.type === 'INSTRUMENT_OPENED' &&
    event.instrumentId === state.instrumentId
  )
    return atStep(state, 5);
  if (
    state.step === 6 &&
    event.type === 'WATCHLIST_UPDATED' &&
    event.instrumentId === state.instrumentId &&
    event.watched
  )
    return atStep({ ...state, watchlistComplete: true }, 7);
  if (
    state.step === 7 &&
    event.type === 'SIDE_SELECTED' &&
    event.side === 'buy'
  )
    return atStep(state, 8, 'quantity');
  if (
    state.step === 8 &&
    event.type === 'QUANTITY_SET' &&
    event.quantity === state.buyQuantity
  )
    return { ...state, substep: 'confirm' };
  if (
    state.step === 8 &&
    event.type === 'TRADE_SUCCEEDED' &&
    event.instrumentId === state.instrumentId &&
    event.side === 'buy' &&
    event.quantity === state.buyQuantity
  )
    return atStep({ ...state, buyTransactionId: event.transactionId }, 9);
  if (
    state.step === 9 &&
    event.type === 'NAVIGATED' &&
    event.route === 'portfolio'
  )
    return atStep(state, 10);
  if (
    state.step === 11 &&
    event.type === 'NAVIGATED' &&
    event.route === 'transactions'
  )
    return { ...state, routeExpectation: 'transactions', substep: 'verify' };
  if (
    state.step === 12 &&
    state.substep === 'open-portfolio' &&
    event.type === 'NAVIGATED' &&
    event.route === 'portfolio'
  )
    return {
      ...state,
      routeExpectation: 'portfolio',
      substep: 'open-position',
    };
  if (
    state.step === 12 &&
    event.type === 'INSTRUMENT_OPENED' &&
    event.instrumentId === state.instrumentId
  )
    return { ...state, routeExpectation: 'stock', substep: 'select-sell' };
  if (
    state.step === 12 &&
    event.type === 'SIDE_SELECTED' &&
    event.side === 'sell'
  )
    return { ...state, substep: 'sell-quantity' };
  if (
    state.step === 12 &&
    event.type === 'QUANTITY_SET' &&
    event.quantity === state.sellQuantity
  )
    return { ...state, substep: 'sell-confirm' };
  if (
    state.step === 12 &&
    event.type === 'TRADE_SUCCEEDED' &&
    event.instrumentId === state.instrumentId &&
    event.side === 'sell' &&
    event.quantity === state.sellQuantity
  )
    return atStep({ ...state, sellTransactionId: event.transactionId }, 13);
  if (
    state.step === 13 &&
    event.type === 'NAVIGATED' &&
    event.route === 'watchlist'
  )
    return { ...state, routeExpectation: 'watchlist', substep: 'verify' };
  if (
    state.step === 14 &&
    event.type === 'NAVIGATED' &&
    event.route === 'community'
  )
    return { ...state, routeExpectation: 'community', substep: 'react' };
  if (
    state.step === 14 &&
    event.type === 'COMMUNITY_REACTED' &&
    event.postId === 'social-1' &&
    event.liked
  )
    return atStep({ ...state, communityComplete: true }, 15);
  if (
    state.step === 15 &&
    event.type === 'NAVIGATED' &&
    event.route === 'profile'
  )
    return { ...state, routeExpectation: 'profile', substep: 'orientation' };
  if (
    state.step === 15 &&
    state.substep === 'orientation' &&
    event.type === 'FINISH'
  )
    return { ...state, status: 'completed' };
  return state;
}
