import assert from 'node:assert/strict';
import {
  TOUR_BUY_QUANTITY,
  TOUR_INSTRUMENT_ID,
  TOUR_SELL_QUANTITY,
  initialTourState,
  transitionTour,
} from '../src/demo/tour.ts';

let state = initialTourState();
assert.equal(state.status, 'not-started');
state = transitionTour(state, { type: 'START' });
assert.equal(state.step, 2);
assert.equal(state.chapter, 'Discover');

const unchanged = transitionTour(state, {
  type: 'TRADE_SUCCEEDED',
  instrumentId: TOUR_INSTRUMENT_ID,
  side: 'buy',
  quantity: TOUR_BUY_QUANTITY,
  transactionId: 'invalid-early-event',
});
assert.equal(unchanged, state, 'invalid events must not advance the machine');

state = transitionTour(state, { type: 'NEXT' });
state = transitionTour(state, { type: 'NAVIGATED', route: 'market' });
state = transitionTour(state, { type: 'SEARCH_MATCH' });
state = transitionTour(state, {
  type: 'INSTRUMENT_OPENED',
  instrumentId: TOUR_INSTRUMENT_ID,
});
state = transitionTour(state, { type: 'NEXT' });
state = transitionTour(state, {
  type: 'WATCHLIST_UPDATED',
  instrumentId: TOUR_INSTRUMENT_ID,
  watched: true,
});
state = transitionTour(state, { type: 'SIDE_SELECTED', side: 'buy' });
state = transitionTour(state, {
  type: 'QUANTITY_SET',
  quantity: TOUR_BUY_QUANTITY,
});
state = transitionTour(state, {
  type: 'TRADE_SUCCEEDED',
  instrumentId: TOUR_INSTRUMENT_ID,
  side: 'buy',
  quantity: TOUR_BUY_QUANTITY,
  transactionId: 'buy-1',
});
assert.equal(state.step, 9);
assert.equal(state.buyTransactionId, 'buy-1');

state = transitionTour(state, { type: 'NAVIGATED', route: 'portfolio' });
state = transitionTour(state, { type: 'NEXT' });
state = transitionTour(state, { type: 'NAVIGATED', route: 'transactions' });
assert.equal(state.substep, 'verify');
state = transitionTour(state, { type: 'NEXT' });
state = transitionTour(state, { type: 'NAVIGATED', route: 'portfolio' });
state = transitionTour(state, {
  type: 'INSTRUMENT_OPENED',
  instrumentId: TOUR_INSTRUMENT_ID,
});
state = transitionTour(state, { type: 'SIDE_SELECTED', side: 'sell' });
state = transitionTour(state, {
  type: 'QUANTITY_SET',
  quantity: TOUR_SELL_QUANTITY,
});
state = transitionTour(state, {
  type: 'TRADE_SUCCEEDED',
  instrumentId: TOUR_INSTRUMENT_ID,
  side: 'sell',
  quantity: TOUR_SELL_QUANTITY,
  transactionId: 'sell-1',
});
assert.equal(state.step, 13);
assert.equal(state.sellTransactionId, 'sell-1');

state = transitionTour(state, { type: 'NAVIGATED', route: 'watchlist' });
state = transitionTour(state, { type: 'NEXT' });
state = transitionTour(state, { type: 'NAVIGATED', route: 'community' });
state = transitionTour(state, {
  type: 'COMMUNITY_REACTED',
  postId: 'social-1',
  liked: true,
});
state = transitionTour(state, { type: 'NAVIGATED', route: 'profile' });
state = transitionTour(state, { type: 'FINISH' });
assert.equal(state.status, 'completed');
assert.equal(state.communityComplete, true);

const skipped = transitionTour(initialTourState(), { type: 'SKIP' });
assert.equal(skipped.status, 'skipped');
const errored = transitionTour(
  transitionTour(initialTourState(), { type: 'START' }),
  { type: 'ERROR', message: 'missing target' },
);
assert.equal(errored.status, 'error');
assert.equal(transitionTour(errored, { type: 'RETRY' }).status, 'active');
