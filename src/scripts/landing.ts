document.documentElement.classList.add('js');

const header = document.querySelector<HTMLElement>('[data-site-header]');
const menuToggle =
  document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const primaryNav = document.querySelector<HTMLElement>('[data-navigation]');
const menuLabel = document.querySelector<HTMLElement>('[data-menu-label]');
const mobileQuery = window.matchMedia('(max-width: 47.99rem)');
let menuOpen = false;

const focusableSelector =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

function setMenu(open: boolean, restoreFocus = false) {
  if (!header || !menuToggle || !primaryNav) return;
  menuOpen = open && mobileQuery.matches;
  header.classList.toggle('menu-open', menuOpen);
  menuToggle.setAttribute('aria-expanded', String(menuOpen));
  document.body.classList.toggle('menu-lock', menuOpen);
  if (menuLabel) menuLabel.textContent = menuOpen ? 'Close' : 'Menu';

  if (menuOpen) {
    primaryNav.querySelector<HTMLElement>(focusableSelector)?.focus();
  } else if (restoreFocus) {
    menuToggle.focus();
  }
}

menuToggle?.addEventListener('click', () => setMenu(!menuOpen, menuOpen));
primaryNav?.querySelectorAll<HTMLAnchorElement>('a').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

window.addEventListener('keydown', (event) => {
  if (!menuOpen || !header || !menuToggle || !primaryNav) return;
  if (event.key === 'Escape') {
    event.preventDefault();
    setMenu(false, true);
    return;
  }
  if (event.key !== 'Tab') return;

  const focusable = Array.from(
    header.querySelectorAll<HTMLElement>(focusableSelector),
  ).filter((element) => !element.hasAttribute('hidden'));
  const first = focusable[0];
  const last = focusable.at(-1);
  if (!first || !last) return;
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

mobileQuery.addEventListener('change', () => setMenu(false));

const updateHeader = () =>
  header?.classList.toggle('is-scrolled', scrollY > 20);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

const experience = document.querySelector<HTMLElement>(
  '[data-product-experience]',
);
if (experience) {
  const tabs = Array.from(
    experience.querySelectorAll<HTMLButtonElement>('[role="tab"]'),
  );
  const panels = Array.from(
    experience.querySelectorAll<HTMLElement>('[role="tabpanel"]'),
  );
  experience.classList.add('is-enhanced');

  const selectTab = (tab: HTMLButtonElement, focus = false) => {
    const target = tab.dataset.productTab;
    tabs.forEach((item) => {
      const selected = item === tab;
      item.setAttribute('aria-selected', String(selected));
      item.tabIndex = selected ? 0 : -1;
    });
    panels.forEach((panel) => {
      const selected = panel.dataset.productPanel === target;
      panel.hidden = !selected;
      panel.classList.toggle('is-active', selected);
    });
    if (focus) tab.focus();
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectTab(tab));
    tab.addEventListener('keydown', (event) => {
      let nextIndex: number | undefined;
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        nextIndex = (index + 1) % tabs.length;
      } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        nextIndex = (index - 1 + tabs.length) % tabs.length;
      } else if (event.key === 'Home') {
        nextIndex = 0;
      } else if (event.key === 'End') {
        nextIndex = tabs.length - 1;
      }
      if (nextIndex === undefined) return;
      event.preventDefault();
      const nextTab = tabs[nextIndex];
      if (nextTab) selectTab(nextTab, true);
    });
  });
  if (tabs[0]) selectTab(tabs[0]);
}
