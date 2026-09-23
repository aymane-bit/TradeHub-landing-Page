import {
  communityPeople,
  initialState,
  stocks,
  type DemoState,
  type DemoStock,
} from '../demo/data';

const storageKey = 'tradehub:isolated-demo:v2';
const app = document.querySelector<HTMLElement>('[data-demo-app]');

if (app) {
  let state = loadState();
  let selectedStock = stocks[1];
  let tradeSide: 'buy' | 'sell' = 'buy';
  let socialFilter = 'All';

  function emit(name: string, detail: Record<string, unknown> = {}) {
    window.dispatchEvent(new CustomEvent(`tradehub:${name}`, { detail }));
  }

  function loadState(): DemoState {
    try {
      const saved = localStorage.getItem(storageKey);
      if (!saved) return initialState();
      const parsed = JSON.parse(saved) as DemoState;
      if (
        parsed.version !== 2 ||
        !Array.isArray(parsed.holdings) ||
        !Array.isArray(parsed.socialPosts)
      )
        return initialState();
      return parsed;
    } catch {
      return initialState();
    }
  }

  function saveState(next: DemoState) {
    state = next;
    try {
      localStorage.setItem(storageKey, JSON.stringify(next));
    } catch {
      // Memory state keeps the demo usable when browser storage is unavailable.
    }
    emit('state-changed', {
      sessionId: next.sessionId,
      cash: next.cash,
      watchlist: next.watchlist,
      holdings: next.holdings,
      transactions: next.transactions,
      likedPosts: next.likedPosts,
    });
  }

  function money(value: number) {
    return `${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} MAD`;
  }

  function signed(value: number) {
    return `${value >= 0 ? '+' : ''}${value.toFixed(2)}%`;
  }

  function escapeHtml(value: string) {
    return value.replace(
      /[&<>'"]/g,
      (character) =>
        ({
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          "'": '&#39;',
          '"': '&quot;',
        })[character] ?? character,
    );
  }

  function relativeTime(value: string) {
    const elapsed = Math.max(0, Date.now() - new Date(value).getTime());
    const minutes = Math.floor(elapsed / 60000);
    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes} min ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hr${hours === 1 ? '' : 's'} ago`;
    const days = Math.floor(hours / 24);
    return `${days} day${days === 1 ? '' : 's'} ago`;
  }

  function byId(id: string) {
    return stocks.find((stock) => stock.id === id);
  }

  function portfolio() {
    const positions = state.holdings.flatMap((holding) => {
      const stock = byId(holding.stockId);
      if (!stock) return [];
      const value = stock.price * holding.quantity;
      const cost = holding.averageCost * holding.quantity;
      return [{ ...holding, stock, value, cost, pnl: value - cost }];
    });
    const holdingsValue = positions.reduce(
      (sum, position) => sum + position.value,
      0,
    );
    const cost = positions.reduce((sum, position) => sum + position.cost, 0);
    return {
      positions,
      holdingsValue,
      cost,
      pnl: holdingsValue - cost,
      total: state.cash + holdingsValue,
    };
  }

  function setText(selector: string, value: string) {
    app?.querySelectorAll<HTMLElement>(selector).forEach((element) => {
      element.textContent = value;
    });
  }

  function tone(element: HTMLElement | null, value: number) {
    if (!element) return;
    element.classList.toggle('is-positive', value >= 0);
    element.classList.toggle('is-negative', value < 0);
  }

  function showView(view: string, updateHash = true) {
    const valid = [
      'dashboard',
      'market',
      'stock',
      'portfolio',
      'transactions',
      'watchlist',
      'community',
      'profile',
    ];
    const next = valid.includes(view) ? view : 'dashboard';
    app?.querySelectorAll<HTMLElement>('[data-demo-panel]').forEach((panel) => {
      panel.hidden = panel.dataset.demoPanel !== next;
    });
    app
      ?.querySelectorAll<HTMLButtonElement>('[data-demo-view]')
      .forEach((button) => {
        button.classList.toggle('is-active', button.dataset.demoView === next);
        button.setAttribute(
          'aria-current',
          button.dataset.demoView === next ? 'page' : 'false',
        );
      });
    if (updateHash)
      history.replaceState(
        null,
        '',
        next === 'dashboard' ? '/demo' : `/demo#${next}`,
      );
    app?.querySelector('.demo-scroll')?.scrollTo({ top: 0, behavior: 'auto' });
    emit('view-changed', { view: next });
  }

  function chartPoints(values: number[]) {
    const min = Math.min(...values);
    const max = Math.max(...values);
    const span = Math.max(1, max - min);
    return values
      .map(
        (value, index) =>
          `${(index / Math.max(1, values.length - 1)) * 620},${200 - ((value - min) / span) * 170}`,
      )
      .join(' ');
  }

  function renderStock(stock: DemoStock, activate = true) {
    selectedStock = stock;
    const held =
      state.holdings.find((holding) => holding.stockId === stock.id)
        ?.quantity ?? 0;
    setText('[data-stock-symbol]', stock.symbol);
    setText('[data-stock-name]', stock.name);
    setText('[data-stock-sector]', stock.sector);
    setText('[data-stock-price], [data-trade-price]', money(stock.price));
    setText('[data-stock-change]', signed(stock.change));
    setText('[data-stock-open]', money(stock.open));
    setText('[data-stock-high]', money(stock.high));
    setText('[data-stock-low]', money(stock.low));
    setText('[data-stock-volume]', stock.volume.toLocaleString());
    setText('[data-held]', String(held));
    const change =
      app?.querySelector<HTMLElement>('[data-stock-change]') ?? null;
    tone(change, stock.change);
    const line = app?.querySelector<SVGPolylineElement>('[data-stock-line]');
    line?.setAttribute('points', chartPoints(stock.history));
    line?.classList.toggle('is-negative-line', stock.change < 0);
    const quantity = app?.querySelector<HTMLInputElement>(
      '[data-trade-quantity]',
    );
    if (quantity) quantity.value = '1';
    setText('[data-estimate]', money(stock.price));
    const watch = app?.querySelector<HTMLButtonElement>('[data-watch-toggle]');
    const watched = state.watchlist.includes(stock.id);
    if (watch) {
      watch.textContent = watched ? '★' : '☆';
      watch.classList.toggle('is-watched', watched);
      watch.setAttribute(
        'aria-label',
        `${watched ? 'Remove' : 'Add'} ${stock.symbol} ${watched ? 'from' : 'to'} watchlist`,
      );
    }
    setText('[data-trade-message]', '');
    if (activate) {
      showView('stock');
      emit('stock-opened', { instrumentId: stock.id });
    }
  }

  function renderPortfolio() {
    const summary = portfolio();
    const returnPercent = summary.cost ? (summary.pnl / summary.cost) * 100 : 0;
    setText(
      '[data-total-value], [data-portfolio-total], [data-profile-total]',
      money(summary.total),
    );
    setText('[data-cash], [data-portfolio-cash]', money(state.cash));
    setText(
      '[data-holdings-value], [data-portfolio-holdings]',
      money(summary.holdingsValue),
    );
    setText(
      '[data-pnl], [data-portfolio-pnl], [data-profile-pnl]',
      money(summary.pnl),
    );
    setText('[data-return]', signed(returnPercent));
    setText('[data-position-count]', `${summary.positions.length} positions`);
    setText('[data-profile-orders]', String(state.transactions.length));
    setText('[data-session-id]', state.sessionId.slice(0, 13));
    app
      ?.querySelectorAll<HTMLElement>(
        '[data-pnl], [data-portfolio-pnl], [data-profile-pnl], [data-return]',
      )
      .forEach((element) => tone(element, summary.pnl));

    const body = app?.querySelector<HTMLTableSectionElement>(
      '[data-holdings-body]',
    );
    if (body) {
      body.innerHTML = summary.positions
        .map(
          (position) =>
            `<tr><td><strong>${position.stock.symbol}</strong><small>${position.stock.name}</small></td><td>${position.quantity}</td><td>${money(position.averageCost)}</td><td>${money(position.value)}</td><td class="${position.pnl >= 0 ? 'is-positive' : 'is-negative'}">${money(position.pnl)}</td><td><button type="button" data-stock-id="${position.stockId}" ${position.stockId === 'dyt' ? 'data-tour-id="portfolio-position-dyt"' : ''}>Open</button></td></tr>`,
        )
        .join('');
    }
  }

  function renderTransactions() {
    const body = app?.querySelector<HTMLTableSectionElement>(
      '[data-transactions-body]',
    );
    if (!body) return;
    body.innerHTML = state.transactions
      .map((transaction) => {
        const stock = byId(transaction.stockId);
        const date = new Date(transaction.createdAt).toLocaleString('en-GB', {
          day: '2-digit',
          month: 'short',
          hour: '2-digit',
          minute: '2-digit',
        });
        return `<tr ${transaction.stockId === 'dyt' ? `data-tour-id="transaction-dyt-${transaction.side}"` : ''}><td>${date}</td><td class="${transaction.side === 'buy' ? 'is-positive' : 'is-negative'}">${transaction.side.toUpperCase()}</td><td><strong>${stock?.symbol ?? transaction.stockId}</strong></td><td>${transaction.quantity}</td><td>${money(transaction.price)}</td><td>${money(transaction.price * transaction.quantity)}</td></tr>`;
      })
      .join('');
  }

  function renderWatchlist() {
    const grid = app?.querySelector<HTMLElement>('[data-watch-grid]');
    const empty = app?.querySelector<HTMLElement>('[data-watch-empty]');
    if (!grid || !empty) return;
    const watched = state.watchlist.flatMap((id) => {
      const stock = byId(id);
      return stock ? [stock] : [];
    });
    empty.hidden = watched.length > 0;
    grid.innerHTML = watched
      .map(
        (stock) =>
          `<article class="demo-card demo-watch-card" ${stock.id === 'dyt' ? 'data-tour-id="watchlist-dyt"' : ''}><div><span><strong>${stock.symbol}</strong><small>${stock.name}</small></span><button type="button" data-watch-remove="${stock.id}" aria-label="Remove ${stock.symbol} from watchlist">★</button></div><svg viewBox="0 0 100 42" role="img" aria-label="Illustrative ${stock.symbol} price trend"><polyline class="${stock.change < 0 ? 'is-negative-line' : ''}" points="${chartPoints(
            stock.history,
          )
            .split(' ')
            .map((point) => {
              const [x, y] = point.split(',').map(Number);
              return `${x / 6.2},${y / 5}`;
            })
            .join(
              ' ',
            )}" fill="none" stroke="currentColor" stroke-width="2"></polyline></svg><div><span><strong>${money(stock.price)}</strong><small class="${stock.change >= 0 ? 'is-positive' : 'is-negative'}">${signed(stock.change)}</small></span><button type="button" data-stock-id="${stock.id}">Open</button></div></article>`,
      )
      .join('');
  }

  function renderSocial() {
    const feed = app?.querySelector<HTMLElement>('[data-social-feed]');
    const people = app?.querySelector<HTMLElement>('[data-social-people]');
    const empty = app?.querySelector<HTMLElement>('[data-social-empty]');
    if (!feed || !people || !empty) return;

    const posts = state.socialPosts.filter(
      (post) => socialFilter === 'All' || post.topic === socialFilter,
    );
    empty.hidden = posts.length > 0;
    feed.innerHTML = posts
      .map((post) => {
        const person = communityPeople.find(
          (candidate) => candidate.id === post.authorId,
        );
        const isVisitor = post.authorId === 'visitor';
        const name = isVisitor
          ? 'Demo Visitor'
          : (person?.name ?? 'Demo member');
        const initials = isVisitor ? 'DV' : (person?.initials ?? 'DM');
        const handle = isVisitor
          ? '@demo.visitor'
          : (person?.handle ?? '@demo.member');
        const accent = person?.accent ?? '#c7b69d';
        const stock = post.stockId ? byId(post.stockId) : undefined;
        const liked = state.likedPosts.includes(post.id);
        return `<article class="demo-card demo-social-post" ${post.id === 'social-1' ? 'data-tour-id="community-post-social-1"' : ''}><header class="demo-post-header"><div class="demo-author"><span class="demo-person-avatar" style="--avatar-accent:${accent}">${initials}</span><div><strong>${escapeHtml(name)}</strong><small>${escapeHtml(handle)} · ${relativeTime(post.createdAt)}</small></div></div><button type="button" aria-label="More options for this fictional post" data-social-more>•••</button></header><p>${escapeHtml(post.body)}</p><div class="demo-post-context"><em>${post.topic}</em>${stock ? `<button type="button" data-stock-id="${stock.id}">$${stock.symbol} <span class="${stock.change >= 0 ? 'is-positive' : 'is-negative'}">${signed(stock.change)}</span></button>` : ''}</div><footer class="demo-post-actions"><button class="${liked ? 'is-liked' : ''}" type="button" data-social-like="${post.id}" ${post.id === 'social-1' ? 'data-tour-id="community-like-social-1"' : ''} aria-pressed="${liked}"><span aria-hidden="true">${liked ? '♥' : '♡'}</span> ${post.reactions + (liked ? 1 : 0)}</button><button type="button" data-social-comment="${post.id}"><span aria-hidden="true">◇</span> ${post.comments}</button><button type="button" data-social-share="${post.id}"><span aria-hidden="true">↗</span> Share</button></footer></article>`;
      })
      .join('');

    people.innerHTML = communityPeople
      .slice(0, 4)
      .map((person) => {
        const followed = state.followedPeople.includes(person.id);
        return `<article class="demo-person-row"><span class="demo-person-avatar" style="--avatar-accent:${person.accent}">${person.initials}</span><div><strong>${person.name}</strong><small>${person.role}</small></div><button class="${followed ? 'is-followed' : ''}" type="button" data-social-follow="${person.id}" aria-pressed="${followed}">${followed ? 'Following' : 'Follow'}</button></article>`;
      })
      .join('');

    app
      ?.querySelectorAll<HTMLButtonElement>('[data-social-filter]')
      .forEach((button) => {
        button.classList.toggle(
          'is-active',
          button.dataset.socialFilter === socialFilter,
        );
      });
  }

  function renderAll() {
    renderPortfolio();
    renderTransactions();
    renderWatchlist();
    renderSocial();
    renderStock(selectedStock, false);
  }

  function notify(message: string) {
    const toast = app?.querySelector<HTMLElement>('[data-demo-toast]');
    if (!toast) return;
    toast.textContent = message;
    toast.hidden = false;
    window.setTimeout(() => {
      toast.hidden = true;
    }, 2600);
  }

  function executeTrade() {
    const quantityInput = app?.querySelector<HTMLInputElement>(
      '[data-trade-quantity]',
    );
    const quantity = Math.max(1, Math.floor(Number(quantityInput?.value)) || 1);
    const current = state.holdings.find(
      (holding) => holding.stockId === selectedStock.id,
    );
    const total = selectedStock.price * quantity;
    let holdings = [...state.holdings];

    if (tradeSide === 'buy' && total > state.cash) {
      setText(
        '[data-trade-message]',
        'Your virtual cash balance is too low for this order.',
      );
      return;
    }
    if (tradeSide === 'sell' && (!current || current.quantity < quantity)) {
      setText(
        '[data-trade-message]',
        'You do not hold enough virtual shares for this order.',
      );
      return;
    }

    if (tradeSide === 'buy') {
      if (current) {
        const nextQuantity = current.quantity + quantity;
        const averageCost =
          (current.quantity * current.averageCost + total) / nextQuantity;
        holdings = holdings.map((holding) =>
          holding.stockId === selectedStock.id
            ? { ...holding, quantity: nextQuantity, averageCost }
            : holding,
        );
      } else {
        holdings.push({
          stockId: selectedStock.id,
          quantity,
          averageCost: selectedStock.price,
        });
      }
    } else if (current) {
      const nextQuantity = current.quantity - quantity;
      holdings =
        nextQuantity === 0
          ? holdings.filter((holding) => holding.stockId !== selectedStock.id)
          : holdings.map((holding) =>
              holding.stockId === selectedStock.id
                ? { ...holding, quantity: nextQuantity }
                : holding,
            );
    }

    const transactionId = `demo-${Date.now()}`;
    saveState({
      ...state,
      cash: state.cash + (tradeSide === 'buy' ? -total : total),
      holdings,
      transactions: [
        {
          id: transactionId,
          stockId: selectedStock.id,
          side: tradeSide,
          quantity,
          price: selectedStock.price,
          createdAt: new Date().toISOString(),
        },
        ...state.transactions,
      ],
    });
    const message = `${tradeSide === 'buy' ? 'Bought' : 'Sold'} ${quantity} virtual share${quantity === 1 ? '' : 's'} of ${selectedStock.symbol}.`;
    renderAll();
    setText('[data-trade-message]', message);
    notify(message);
    emit('trade-succeeded', {
      instrumentId: selectedStock.id,
      side: tradeSide,
      quantity,
      transactionId,
    });
  }

  function resetDemo() {
    saveState(initialState());
    tradeSide = 'buy';
    socialFilter = 'All';
    renderAll();
    showView('dashboard');
    notify('Demo data reset to its starting state.');
    emit('reset-complete');
  }

  app.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const viewButton = target.closest<HTMLButtonElement>('[data-demo-view]');
    const stockButton = target.closest<HTMLButtonElement>('[data-stock-id]');
    const removeButton = target.closest<HTMLButtonElement>(
      '[data-watch-remove]',
    );
    if (viewButton?.dataset.demoView) showView(viewButton.dataset.demoView);
    if (stockButton?.dataset.stockId) {
      const stock = byId(stockButton.dataset.stockId);
      if (stock) renderStock(stock);
    }
    if (removeButton?.dataset.watchRemove) {
      saveState({
        ...state,
        watchlist: state.watchlist.filter(
          (id) => id !== removeButton.dataset.watchRemove,
        ),
      });
      renderWatchlist();
      emit('watchlist-changed', {
        instrumentId: removeButton.dataset.watchRemove,
        watched: false,
      });
    }
    const filterButton = target.closest<HTMLButtonElement>(
      '[data-social-filter]',
    );
    if (filterButton?.dataset.socialFilter) {
      socialFilter = filterButton.dataset.socialFilter;
      renderSocial();
    }
    const likeButton = target.closest<HTMLButtonElement>('[data-social-like]');
    if (likeButton?.dataset.socialLike) {
      const postId = likeButton.dataset.socialLike;
      const liked = state.likedPosts.includes(postId);
      saveState({
        ...state,
        likedPosts: liked
          ? state.likedPosts.filter((id) => id !== postId)
          : [postId, ...state.likedPosts],
      });
      renderSocial();
      emit('community-reacted', { postId, liked: !liked });
    }
    const followButton = target.closest<HTMLButtonElement>(
      '[data-social-follow]',
    );
    if (followButton?.dataset.socialFollow) {
      const personId = followButton.dataset.socialFollow;
      const followed = state.followedPeople.includes(personId);
      saveState({
        ...state,
        followedPeople: followed
          ? state.followedPeople.filter((id) => id !== personId)
          : [personId, ...state.followedPeople],
      });
      renderSocial();
    }
    if (target.closest('[data-social-comment]')) {
      notify(
        'Comments are represented as fictional counts in this quick demo.',
      );
    }
    if (target.closest('[data-social-share]')) {
      notify(
        'Demo post copied conceptually — no link or data left this browser.',
      );
    }
    if (target.closest('[data-social-more]')) {
      notify('This fictional post has no additional account actions.');
    }
    if (target.closest('[data-demo-reset]')) {
      resetDemo();
    }
    const sideButton = target.closest<HTMLButtonElement>('[data-trade-side]');
    if (
      sideButton?.dataset.tradeSide === 'buy' ||
      sideButton?.dataset.tradeSide === 'sell'
    ) {
      tradeSide = sideButton.dataset.tradeSide;
      app
        .querySelectorAll('[data-trade-side]')
        .forEach((button) =>
          button.classList.toggle('is-active', button === sideButton),
        );
      setText('[data-trade-confirm]', `Confirm virtual ${tradeSide}`);
      emit('side-selected', { side: tradeSide });
    }
    if (target.closest('[data-trade-confirm]')) executeTrade();
    if (target.closest('[data-watch-toggle]')) {
      const watched = state.watchlist.includes(selectedStock.id);
      saveState({
        ...state,
        watchlist: watched
          ? state.watchlist.filter((id) => id !== selectedStock.id)
          : [selectedStock.id, ...state.watchlist],
      });
      renderStock(selectedStock);
      renderWatchlist();
      emit('watchlist-changed', {
        instrumentId: selectedStock.id,
        watched: !watched,
      });
    }
  });

  app
    .querySelector<HTMLInputElement>('[data-market-search]')
    ?.addEventListener('input', (event) => {
      const query = (event.target as HTMLInputElement).value
        .trim()
        .toLowerCase();
      let visible = 0;
      app
        .querySelectorAll<HTMLTableRowElement>('[data-market-row]')
        .forEach((row) => {
          row.hidden = !(row.dataset.search ?? '').includes(query);
          if (!row.hidden) visible += 1;
        });
      const empty = app.querySelector<HTMLElement>('[data-market-empty]');
      if (empty) empty.hidden = visible > 0;
    });

  app
    .querySelector<HTMLInputElement>('[data-trade-quantity]')
    ?.addEventListener('input', (event) => {
      const quantity = Math.max(
        1,
        Math.floor(Number((event.target as HTMLInputElement).value)) || 1,
      );
      setText('[data-estimate]', money(selectedStock.price * quantity));
      emit('quantity-set', { quantity });
    });

  window.addEventListener('tradehub:tour-reset-requested', () => resetDemo());
  window.addEventListener('tradehub:tour-open-instrument', () => {
    const instrument = byId('dyt');
    if (instrument) renderStock(instrument);
  });

  app
    .querySelector<HTMLTextAreaElement>('[data-social-input]')
    ?.addEventListener('input', (event) => {
      setText(
        '[data-social-count]',
        String((event.target as HTMLTextAreaElement).value.length),
      );
    });

  app
    .querySelector<HTMLFormElement>('[data-social-composer]')
    ?.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = app.querySelector<HTMLTextAreaElement>(
        '[data-social-input]',
      );
      const topic = app.querySelector<HTMLSelectElement>('[data-social-topic]');
      const body = input?.value.trim() ?? '';
      if (body.length < 8) {
        setText(
          '[data-social-message]',
          'Write at least 8 characters for the demo post.',
        );
        input?.focus();
        return;
      }
      const nextTopic =
        topic?.value === 'Strategy' || topic?.value === 'Learning'
          ? topic.value
          : 'Market';
      saveState({
        ...state,
        socialPosts: [
          {
            id: `visitor-post-${Date.now()}`,
            authorId: 'visitor',
            createdAt: new Date().toISOString(),
            body,
            topic: nextTopic,
            reactions: 0,
            comments: 0,
          },
          ...state.socialPosts,
        ],
      });
      socialFilter = 'All';
      if (input) input.value = '';
      setText('[data-social-count]', '0');
      setText(
        '[data-social-message]',
        'Your fictional post is now in the feed.',
      );
      renderSocial();
      notify('Demo post published locally.');
    });

  renderAll();
  const initialView = location.hash.replace('#', '');
  showView(initialView || 'dashboard', false);
  emit('demo-ready', { view: initialView || 'dashboard' });
}
