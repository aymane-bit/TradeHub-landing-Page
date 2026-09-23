import {
  TOUR_BUY_QUANTITY,
  TOUR_INSTRUMENT_ID,
  TOUR_SELL_QUANTITY,
  TOUR_VERSION,
  initialTourState,
  tourSteps,
  transitionTour,
  type TourEvent,
  type TourRoute,
  type TourState,
  type TourTargetId,
} from '../demo/tour';

const tourRoot = document.querySelector<HTMLElement>('[data-demo-app]');

if (tourRoot) {
  const root = tourRoot;
  const sessionKey = `tradehub:guided-tour:v${TOUR_VERSION}`;
  const demoKey = 'tradehub:isolated-demo:v2';
  const coachmark = root.querySelector<HTMLElement>('[data-tour-coachmark]');
  const overlay = root.querySelector<HTMLElement>('[data-tour-overlay]');
  const modalLayer = root.querySelector<HTMLElement>('[data-tour-modal-layer]');
  const modal = modalLayer?.querySelector<HTMLElement>('[role="dialog"]');
  const live = root.querySelector<HTMLElement>('[data-tour-live]');
  let state = loadTourState();
  let modalMode: 'welcome' | 'reset' | 'paused' | 'complete' | null = null;
  let returnFocus: HTMLElement | null = null;
  let renderToken = 0;
  let demoModifiedInMemory = false;

  function loadTourState(): TourState {
    try {
      const value = sessionStorage.getItem(sessionKey);
      if (!value) return initialTourState();
      const parsed = JSON.parse(value) as TourState;
      if (parsed.version !== TOUR_VERSION) return initialTourState();
      if (parsed.status !== 'active') return parsed;
      if (parsed.step === 4 && parsed.substep === 'result')
        return { ...parsed, substep: 'search' };
      if (parsed.step === 8)
        return { ...parsed, substep: 'quantity', routeExpectation: 'stock' };
      if (
        parsed.step === 12 &&
        ['select-sell', 'sell-quantity', 'sell-confirm'].includes(
          parsed.substep,
        )
      )
        return {
          ...parsed,
          substep: 'select-sell',
          routeExpectation: 'stock',
        };
      return parsed;
    } catch {
      return initialTourState();
    }
  }

  function saveTourState(next: TourState) {
    state = next;
    try {
      sessionStorage.setItem(sessionKey, JSON.stringify(next));
    } catch {
      // The active in-memory state keeps the tour usable without storage.
    }
  }

  function demoIsSeeded() {
    try {
      const demo = JSON.parse(localStorage.getItem(demoKey) ?? 'null') as {
        transactions?: Array<{ id: string }>;
        holdings?: Array<{ stockId: string }>;
        watchlist?: string[];
        socialPosts?: unknown[];
        likedPosts?: string[];
        followedPeople?: string[];
      } | null;
      if (!demo) return true;
      return (
        demo.transactions?.length === 4 &&
        demo.transactions.every((transaction) =>
          transaction.id.startsWith('seed-'),
        ) &&
        !demo.holdings?.some(
          (holding) => holding.stockId === TOUR_INSTRUMENT_ID,
        ) &&
        !demo.watchlist?.includes(TOUR_INSTRUMENT_ID) &&
        demo.socialPosts?.length === 5 &&
        demo.likedPosts?.join(',') === 'social-3' &&
        demo.followedPeople?.join(',') === 'nadia'
      );
    } catch {
      return !demoModifiedInMemory;
    }
  }

  function setText(selector: string, value: string) {
    const element = tourRoot?.querySelector<HTMLElement>(selector);
    if (element) element.textContent = value;
  }

  function visibleTarget(id: TourTargetId) {
    return [
      ...root.querySelectorAll<HTMLElement>(`[data-tour-id="${id}"]`),
    ].find((element) => !element.hidden && element.offsetParent !== null);
  }

  function clearTarget() {
    root
      .querySelectorAll<HTMLElement>('.tour-target-active')
      .forEach((target) => {
        target.classList.remove('tour-target-active');
        target.removeAttribute('aria-describedby');
        if (target.dataset.tourTemporaryTabindex === 'true') {
          target.removeAttribute('tabindex');
          delete target.dataset.tourTemporaryTabindex;
        }
      });
  }

  function routeTo(route: TourRoute) {
    if (route === 'stock') {
      window.dispatchEvent(new CustomEvent('tradehub:tour-open-instrument'));
      return;
    }
    const control = [
      ...root.querySelectorAll<HTMLButtonElement>(
        `[data-demo-view="${route}"]`,
      ),
    ].find((element) => element.offsetParent !== null);
    control?.click();
  }

  function currentPresentation() {
    const step = tourSteps[state.step];
    let target = step.target;
    const title = step.title;
    let body = step.body;
    let informational = Boolean(step.informational);

    if (state.step === 4 && state.substep === 'result') {
      target = 'market-result-dyt';
      body =
        'DYT is the configured synthetic tour instrument. Open its Details page.';
    }
    if (state.step === 8 && state.substep === 'confirm') {
      target = 'trade-confirm';
      body = `Review the estimate, then confirm the virtual purchase of ${TOUR_BUY_QUANTITY} DYT shares.`;
    }
    if (state.step === 11 && state.substep === 'verify') {
      target = 'transaction-dyt-buy';
      body =
        'The new DYT buy transaction is visible with its quantity, fixed demo price, and total.';
      informational = true;
    }
    if (state.step === 12) {
      if (state.substep === 'open-position') {
        target = 'portfolio-position-dyt';
        body = 'Open the DYT position to continue with a partial virtual sell.';
      } else if (state.substep === 'select-sell') {
        target = 'trade-sell';
        body = 'Choose Sell for the same DYT position.';
      } else if (state.substep === 'sell-quantity') {
        target = 'trade-quantity';
        body = `Enter ${TOUR_SELL_QUANTITY}. The remaining five virtual shares will stay in the portfolio.`;
      } else if (state.substep === 'sell-confirm') {
        target = 'trade-confirm';
        body = `Confirm the virtual sale of ${TOUR_SELL_QUANTITY} DYT shares.`;
      }
    }
    if (state.step === 13 && state.substep === 'verify') {
      target = 'watchlist-dyt';
      body =
        'DYT remains in your watchlist, connecting discovery with the activity you just completed.';
      informational = true;
    }
    if (state.step === 14 && state.substep === 'react') {
      target = 'community-like-social-1';
      body =
        'React to this fictional market discussion. The change remains isolated to this browser.';
    }
    if (state.step === 15 && state.substep === 'orientation') {
      target = 'social-tools';
      body =
        'Leaderboard, notifications, friends, and messages belong to the wider social experience. They remain orientation-only in this public demo.';
      informational = true;
    }
    return { ...step, target, title, body, informational };
  }

  function positionCoachmark(target: HTMLElement) {
    if (!coachmark) return;
    if (window.innerWidth <= 768) {
      coachmark.style.removeProperty('left');
      coachmark.style.removeProperty('top');
      return;
    }
    const rect = target.getBoundingClientRect();
    const box = coachmark.getBoundingClientRect();
    const gap = 16;
    let left = rect.right + gap;
    let top = rect.top;
    const presentation = currentPresentation();
    if (presentation.placement === 'left') left = rect.left - box.width - gap;
    if (presentation.placement === 'bottom') {
      left = rect.left + rect.width / 2 - box.width / 2;
      top = rect.bottom + gap;
    }
    if (presentation.placement === 'top') {
      left = rect.left + rect.width / 2 - box.width / 2;
      top = rect.top - box.height - gap;
    }
    coachmark.style.left = `${Math.max(12, Math.min(left, innerWidth - box.width - 12))}px`;
    coachmark.style.top = `${Math.max(12, Math.min(top, innerHeight - box.height - 12))}px`;
  }

  async function resolveTarget(id: TourTargetId, token: number) {
    for (let attempt = 0; attempt < 16; attempt += 1) {
      if (token !== renderToken) return null;
      const target = visibleTarget(id);
      if (target) return target;
      await new Promise((resolve) => window.setTimeout(resolve, 100));
    }
    return null;
  }

  async function renderCoachmark() {
    const token = ++renderToken;
    clearTarget();
    closeModal(false);
    if (state.status !== 'active' || !coachmark || !overlay) {
      if (coachmark) coachmark.hidden = true;
      if (overlay) overlay.hidden = true;
      return;
    }
    const presentation = currentPresentation();
    const target = await resolveTarget(presentation.target, token);
    if (!target || token !== renderToken) {
      send({
        type: 'ERROR',
        message:
          'This tour target is not available yet. Retry after the demo view finishes loading, or skip the tour and explore freely.',
      });
      return;
    }
    const mobileTarget = window.innerWidth <= 768;
    const scroller = root.querySelector<HTMLElement>('.demo-scroll');
    const horizontalScroller = target.closest<HTMLElement>(
      '.demo-table-card, .demo-feed-toolbar',
    );
    if (horizontalScroller) {
      horizontalScroller.scrollLeft +=
        target.getBoundingClientRect().left -
        horizontalScroller.getBoundingClientRect().left -
        16;
    }
    if (scroller?.contains(target) && !target.closest('.demo-mobile-nav')) {
      const targetRect = target.getBoundingClientRect();
      const scrollerRect = scroller.getBoundingClientRect();
      const targetTop =
        scroller.scrollTop +
        targetRect.top -
        scrollerRect.top -
        (mobileTarget ? 72 : Math.max(40, scroller.clientHeight / 3));
      scroller.scrollTo({
        top: Math.max(0, targetTop),
        behavior: matchMedia('(prefers-reduced-motion: reduce)').matches
          ? 'auto'
          : 'smooth',
      });
    }
    root.scrollTop = 0;
    root.scrollLeft = 0;
    target.classList.add('tour-target-active');
    target.setAttribute('aria-describedby', 'tradehub-tour-instruction');
    if (!target.matches('button, a, input, select, textarea, [tabindex]')) {
      target.tabIndex = -1;
      target.dataset.tourTemporaryTabindex = 'true';
    }
    const body = root.querySelector<HTMLElement>('[data-tour-body]');
    if (body) body.id = 'tradehub-tour-instruction';
    setText('[data-tour-chapter]', presentation.chapter);
    setText('[data-tour-progress]', `Step ${state.step} of 15`);
    setText('[data-tour-title]', presentation.title);
    setText('[data-tour-body]', presentation.body);
    const next = root.querySelector<HTMLButtonElement>('[data-tour-next]');
    const back = root.querySelector<HTMLButtonElement>('[data-tour-back]');
    const retry = root.querySelector<HTMLButtonElement>('[data-tour-retry]');
    const error = root.querySelector<HTMLElement>('[data-tour-error]');
    if (next) {
      next.hidden = !presentation.informational;
      next.textContent = state.step === 15 ? 'Finish tour' : 'Next';
    }
    if (back) back.disabled = state.step === 2;
    if (retry) retry.hidden = true;
    if (error) error.hidden = true;
    overlay.hidden = false;
    coachmark.hidden = false;
    requestAnimationFrame(() => positionCoachmark(target));
    window.setTimeout(() => {
      target.focus({ preventScroll: true });
    }, 180);
    if (live) {
      live.textContent = `${presentation.chapter}. Step ${state.step} of 15. ${presentation.title}. ${presentation.body}`;
    }
  }

  function showError() {
    if (!coachmark || !overlay) return;
    clearTarget();
    setText('[data-tour-chapter]', 'Tour paused');
    setText('[data-tour-progress]', `Step ${state.step} of 15`);
    setText('[data-tour-title]', 'We could not find this feature');
    setText(
      '[data-tour-body]',
      'The demo remains fully available. You can retry this step or skip the tour.',
    );
    setText('[data-tour-error]', state.error ?? 'The target is unavailable.');
    const error = root.querySelector<HTMLElement>('[data-tour-error]');
    const retry = root.querySelector<HTMLButtonElement>('[data-tour-retry]');
    const next = root.querySelector<HTMLButtonElement>('[data-tour-next]');
    if (error) error.hidden = false;
    if (retry) retry.hidden = false;
    if (next) next.hidden = true;
    overlay.hidden = false;
    coachmark.hidden = false;
    coachmark.style.removeProperty('left');
    coachmark.style.removeProperty('top');
  }

  function send(event: TourEvent) {
    const previous = state;
    const next = transitionTour(state, event);
    if (next === previous) return;
    saveTourState(next);
    if (next.status === 'completed') {
      clearTarget();
      if (coachmark) coachmark.hidden = true;
      if (overlay) overlay.hidden = true;
      showModal('complete');
      return;
    }
    if (next.status === 'skipped') {
      clearTarget();
      if (coachmark) coachmark.hidden = true;
      if (overlay) overlay.hidden = true;
      return;
    }
    if (next.status === 'paused') {
      showModal('paused');
      return;
    }
    if (next.status === 'error') {
      showError();
      return;
    }
    if (event.type === 'BACK') routeTo(next.routeExpectation);
    void renderCoachmark();
  }

  function closeModal(restore = true) {
    if (!modalLayer || modalLayer.hidden) return;
    modalLayer.hidden = true;
    root
      .querySelectorAll<HTMLElement>(
        '.demo-sidebar, .demo-workspace, .demo-mobile-nav',
      )
      .forEach((element) => element.removeAttribute('inert'));
    modalMode = null;
    if (restore) returnFocus?.focus();
  }

  function showModal(mode: NonNullable<typeof modalMode>) {
    if (!modalLayer || !modal) return;
    returnFocus = document.activeElement as HTMLElement | null;
    modalMode = mode;
    const primary = root.querySelector<HTMLButtonElement>(
      '[data-tour-modal-primary]',
    );
    const secondary = root.querySelector<HTMLButtonElement>(
      '[data-tour-modal-secondary]',
    );
    const siteLink = root.querySelector<HTMLAnchorElement>(
      '[data-tour-site-link]',
    );
    const summary = root.querySelector<HTMLElement>('[data-tour-summary]');
    const duration = root.querySelector<HTMLElement>('[data-tour-duration]');
    if (!primary || !secondary || !siteLink || !summary || !duration) return;
    siteLink.hidden = true;
    summary.hidden = true;
    duration.hidden = mode !== 'welcome';
    if (mode === 'welcome') {
      setText('[data-tour-modal-title]', 'Discover TradeHub in a few minutes');
      setText(
        '[data-tour-modal-body]',
        'Follow a guided tour through market discovery, a simulated buy and sell, portfolio tracking, and the investor community.',
      );
      setText(
        '[data-tour-modal-note]',
        'All balances, positions, and transactions in this demo are simulated. No real money is used.',
      );
      primary.textContent = 'Start guided tour';
      secondary.textContent = 'Explore on my own';
    } else if (mode === 'reset') {
      setText('[data-tour-modal-title]', 'Reset this demo session?');
      setText(
        '[data-tour-modal-body]',
        'Restarting the guided tour will reset this demo session to its starting data.',
      );
      setText(
        '[data-tour-modal-note]',
        'Only browser-local simulated data will be reset.',
      );
      primary.textContent = 'Reset and start';
      secondary.textContent = 'Cancel';
    } else if (mode === 'paused') {
      setText('[data-tour-modal-title]', 'Guided tour paused');
      setText(
        '[data-tour-modal-body]',
        'Resume the current step or exit the tour and keep every demo action already completed.',
      );
      setText(
        '[data-tour-modal-note]',
        'Exiting does not reset your demo session.',
      );
      primary.textContent = 'Resume tour';
      secondary.textContent = 'Exit tour';
    } else {
      setText('[data-tour-modal-title]', 'You’re ready to explore TradeHub');
      setText(
        '[data-tour-modal-body]',
        'You discovered the market, completed simulated buy and sell actions, followed the portfolio impact, reviewed transactions, built a watchlist, and explored the community.',
      );
      setText(
        '[data-tour-modal-note]',
        'Everything in this demo remains virtual and isolated. No real-money trades were executed.',
      );
      primary.textContent = 'Explore freely';
      secondary.textContent = 'Restart tour';
      siteLink.hidden = false;
      summary.hidden = false;
    }
    modalLayer.hidden = false;
    root
      .querySelectorAll<HTMLElement>(
        '.demo-sidebar, .demo-workspace, .demo-mobile-nav',
      )
      .forEach((element) => element.setAttribute('inert', ''));
    window.setTimeout(() => modal.focus(), 0);
  }

  function startRequested() {
    if (demoIsSeeded()) {
      closeModal(false);
      routeTo('dashboard');
      send({ type: 'START' });
    } else {
      showModal('reset');
    }
  }

  root.addEventListener(
    'click',
    (event) => {
      if (state.status !== 'active') return;
      const target = event.target as HTMLElement;
      const activeTarget = root.querySelector<HTMLElement>(
        '.tour-target-active',
      );
      if (
        target.closest('[data-tour-coachmark]') ||
        (activeTarget && activeTarget.contains(target))
      )
        return;
      event.preventDefault();
      event.stopPropagation();
    },
    true,
  );

  root.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    if (target.closest('[data-tour-restart]')) startRequested();
    if (target.closest('[data-tour-next]'))
      send(state.step === 15 ? { type: 'FINISH' } : { type: 'NEXT' });
    if (target.closest('[data-tour-back]')) send({ type: 'BACK' });
    if (target.closest('[data-tour-skip]')) send({ type: 'SKIP' });
    if (target.closest('[data-tour-retry]')) {
      send({ type: 'RETRY' });
      routeTo(state.routeExpectation);
    }
    if (target.closest('[data-tour-modal-primary]')) {
      if (modalMode === 'welcome') startRequested();
      else if (modalMode === 'reset') {
        closeModal(false);
        window.dispatchEvent(new CustomEvent('tradehub:tour-reset-requested'));
      } else if (modalMode === 'paused') {
        closeModal(false);
        send({ type: 'RESUME' });
      } else if (modalMode === 'complete') closeModal(false);
    }
    if (target.closest('[data-tour-modal-secondary]')) {
      if (modalMode === 'welcome' || modalMode === 'paused') {
        closeModal(false);
        send({ type: 'SKIP' });
      } else if (modalMode === 'reset') closeModal();
      else if (modalMode === 'complete') showModal('reset');
    }
  });

  tourRoot
    .querySelector<HTMLInputElement>('[data-market-search]')
    ?.addEventListener('input', (event) => {
      const query = (event.target as HTMLInputElement).value.toLowerCase();
      if (query.includes('dyt') || query.includes('disty'))
        send({ type: 'SEARCH_MATCH' });
    });

  window.addEventListener('tradehub:view-changed', (event) => {
    const route = (event as CustomEvent<{ view: TourRoute }>).detail.view;
    send({ type: 'NAVIGATED', route });
  });
  window.addEventListener('tradehub:stock-opened', (event) => {
    const instrumentId = (event as CustomEvent<{ instrumentId: string }>).detail
      .instrumentId;
    send({ type: 'INSTRUMENT_OPENED', instrumentId });
  });
  window.addEventListener('tradehub:watchlist-changed', (event) => {
    const detail = (
      event as CustomEvent<{ instrumentId: string; watched: boolean }>
    ).detail;
    send({ type: 'WATCHLIST_UPDATED', ...detail });
  });
  window.addEventListener('tradehub:side-selected', (event) => {
    const side = (event as CustomEvent<{ side: 'buy' | 'sell' }>).detail.side;
    send({ type: 'SIDE_SELECTED', side });
  });
  window.addEventListener('tradehub:quantity-set', (event) => {
    const quantity = (event as CustomEvent<{ quantity: number }>).detail
      .quantity;
    send({ type: 'QUANTITY_SET', quantity });
  });
  window.addEventListener('tradehub:trade-succeeded', (event) => {
    const detail = (
      event as CustomEvent<{
        instrumentId: string;
        side: 'buy' | 'sell';
        quantity: number;
        transactionId: string;
      }>
    ).detail;
    send({ type: 'TRADE_SUCCEEDED', ...detail });
  });
  window.addEventListener('tradehub:community-reacted', (event) => {
    const detail = (event as CustomEvent<{ postId: string; liked: boolean }>)
      .detail;
    send({ type: 'COMMUNITY_REACTED', ...detail });
  });
  window.addEventListener('tradehub:state-changed', () => {
    demoModifiedInMemory = true;
  });
  window.addEventListener('tradehub:reset-complete', () => {
    demoModifiedInMemory = false;
    saveTourState(initialTourState());
    send({ type: 'START' });
  });
  window.addEventListener('resize', () => {
    const target = root.querySelector<HTMLElement>('.tour-target-active');
    if (target && state.status === 'active') positionCoachmark(target);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && state.status === 'active') {
      event.preventDefault();
      send({ type: 'PAUSE' });
    }
    if (event.key === 'Tab' && modalLayer && !modalLayer.hidden && modal) {
      const focusable = [
        ...modal.querySelectorAll<HTMLElement>('button, a[href]'),
      ].filter((element) => !element.hidden);
      const first = focusable[0];
      const last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }
  });

  if (state.status === 'not-started') showModal('welcome');
  else if (state.status === 'active' || state.status === 'error') {
    routeTo(state.routeExpectation);
    if (state.status === 'error') showError();
    else void renderCoachmark();
  }
}
