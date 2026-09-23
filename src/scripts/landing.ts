document.documentElement.classList.add('js');

const contactForm = document.querySelector<HTMLFormElement>(
  '[data-contact-form]',
);
contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const fields = new FormData(contactForm);
  const name = String(fields.get('name') ?? '').trim();
  const email = String(fields.get('email') ?? '').trim();
  const message = String(fields.get('message') ?? '').trim();
  const subject = encodeURIComponent(`TradeHub enquiry from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\n${message}`,
  );
  window.location.href = `${contactForm.action}?subject=${subject}&body=${body}`;
});

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

const carousel = document.querySelector<HTMLElement>('[data-product-carousel]');
if (carousel) {
  const viewport = carousel.querySelector<HTMLElement>(
    '[data-carousel-viewport]',
  );
  const track = carousel.querySelector<HTMLElement>('[data-carousel-track]');
  const originalSlides = Array.from(
    carousel.querySelectorAll<HTMLElement>('[data-carousel-slide]'),
  );
  const selectors = Array.from(
    carousel.querySelectorAll<HTMLButtonElement>('[data-carousel-select]'),
  );
  const dots = Array.from(
    carousel.querySelectorAll<HTMLButtonElement>('[data-carousel-dot]'),
  );
  const previous = carousel.querySelector<HTMLButtonElement>(
    '[data-carousel-previous]',
  );
  const next = carousel.querySelector<HTMLButtonElement>(
    '[data-carousel-next]',
  );
  const status = carousel.querySelector<HTMLElement>('[data-carousel-status]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (viewport && track && previous && next && originalSlides.length > 1) {
    const slideCount = originalSlides.length;
    const prepareClone = (slide: HTMLElement) => {
      const clone = slide.cloneNode(true) as HTMLElement;
      clone.dataset.carouselClone = '';
      clone.setAttribute('aria-hidden', 'true');
      clone.inert = true;
      clone
        .querySelectorAll<HTMLElement>('[id]')
        .forEach((element) => element.removeAttribute('id'));
      return clone;
    };

    track.prepend(prepareClone(originalSlides[slideCount - 1]!));
    track.append(prepareClone(originalSlides[0]!));
    const slides = Array.from(
      track.querySelectorAll<HTMLElement>('[data-carousel-slide]'),
    );

    let physicalIndex = 1;
    let logicalIndex = 0;
    let transitionPending = false;
    let autoplayTimer: number | undefined;
    let pointerStart = 0;
    let dragOffset = 0;
    let dragging = false;
    let dragged = false;
    let hoverPaused = false;
    let focusPaused = false;

    const logicalFromPhysical = (index: number) =>
      (index - 1 + slideCount) % slideCount;

    const offsetFor = (index: number) => {
      const slide = slides[index];
      if (!slide) return 0;
      return (
        viewport.clientWidth / 2 - (slide.offsetLeft + slide.offsetWidth / 2)
      );
    };

    const setTransform = (offset: number) => {
      track.style.transform = `translate3d(${offset}px, 0, 0)`;
    };

    const updateState = (announce = false) => {
      slides.forEach((slide, index) => {
        slide.classList.toggle('is-active', index === physicalIndex);
      });
      originalSlides.forEach((slide, index) => {
        const active = index === logicalIndex;
        slide.setAttribute('aria-hidden', String(!active));
        slide.inert = !active;
      });
      selectors.forEach((button, index) =>
        button.setAttribute('aria-pressed', String(index === logicalIndex)),
      );
      dots.forEach((dot, index) => {
        if (index === logicalIndex) dot.setAttribute('aria-current', 'true');
        else dot.removeAttribute('aria-current');
      });
      if (announce && status) {
        const label = selectors[logicalIndex]?.textContent?.trim() ?? 'Product';
        status.textContent = `${label}, slide ${logicalIndex + 1} of ${slideCount}`;
      }
    };

    const position = (animate = true) => {
      track.classList.toggle('is-resetting', !animate || reducedMotion.matches);
      if (!animate || reducedMotion.matches) void track.offsetWidth;
      setTransform(offsetFor(physicalIndex));
      if (!animate || reducedMotion.matches) {
        requestAnimationFrame(() => track.classList.remove('is-resetting'));
      }
    };

    const autoplayAllowed = () =>
      !reducedMotion.matches &&
      !hoverPaused &&
      !focusPaused &&
      !dragging &&
      !document.hidden;

    const clearAutoplay = () => {
      if (autoplayTimer !== undefined) window.clearTimeout(autoplayTimer);
      autoplayTimer = undefined;
    };

    const scheduleAutoplay = () => {
      clearAutoplay();
      if (!autoplayAllowed()) return;
      autoplayTimer = window.setTimeout(() => moveBy(1, false), 4600);
    };

    const goToPhysical = (index: number, announce = false) => {
      if (transitionPending) return;
      physicalIndex = index;
      logicalIndex = logicalFromPhysical(physicalIndex);
      transitionPending = !reducedMotion.matches;
      updateState(announce);
      position(true);
      clearAutoplay();
      if (!transitionPending) scheduleAutoplay();
    };

    const moveBy = (direction: -1 | 1, announce = true) => {
      goToPhysical(physicalIndex + direction, announce);
    };

    const selectLogical = (index: number, announce = true) => {
      if (index === logicalIndex) {
        scheduleAutoplay();
        return;
      }
      goToPhysical(index + 1, announce);
    };

    track.addEventListener('transitionend', (event) => {
      if (event.propertyName !== 'transform') return;
      transitionPending = false;
      if (physicalIndex === 0) {
        physicalIndex = slideCount;
        position(false);
      } else if (physicalIndex === slideCount + 1) {
        physicalIndex = 1;
        position(false);
      }
      updateState();
      scheduleAutoplay();
    });

    previous.addEventListener('click', () => moveBy(-1));
    next.addEventListener('click', () => moveBy(1));
    dots.forEach((dot, index) =>
      dot.addEventListener('click', () => selectLogical(index)),
    );
    selectors.forEach((button, index) => {
      button.addEventListener('click', () => selectLogical(index));
      button.addEventListener('keydown', (event) => {
        let target: number | undefined;
        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
          target = (index + 1) % slideCount;
        } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
          target = (index - 1 + slideCount) % slideCount;
        } else if (event.key === 'Home') {
          target = 0;
        } else if (event.key === 'End') {
          target = slideCount - 1;
        }
        if (target === undefined) return;
        event.preventDefault();
        selectors[target]?.focus();
        selectLogical(target);
      });
    });

    carousel.addEventListener('pointerenter', () => {
      hoverPaused = true;
      clearAutoplay();
    });
    carousel.addEventListener('pointerleave', () => {
      hoverPaused = false;
      scheduleAutoplay();
    });
    carousel.addEventListener('focusin', () => {
      focusPaused = true;
      clearAutoplay();
    });
    carousel.addEventListener('focusout', (event) => {
      if (carousel.contains(event.relatedTarget as Node | null)) return;
      focusPaused = false;
      scheduleAutoplay();
    });

    viewport.addEventListener('pointerdown', (event) => {
      if (event.button !== 0 || transitionPending) return;
      dragging = true;
      dragged = false;
      pointerStart = event.clientX;
      dragOffset = offsetFor(physicalIndex);
      viewport.classList.add('is-dragging');
      track.classList.add('is-resetting');
      viewport.setPointerCapture(event.pointerId);
      clearAutoplay();
    });
    viewport.addEventListener('pointermove', (event) => {
      if (!dragging) return;
      const delta = event.clientX - pointerStart;
      if (Math.abs(delta) > 6) dragged = true;
      setTransform(dragOffset + delta);
    });
    const finishDrag = (event: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      viewport.classList.remove('is-dragging');
      track.classList.remove('is-resetting');
      const delta = event.clientX - pointerStart;
      const threshold = Math.min(90, viewport.clientWidth * 0.14);
      if (Math.abs(delta) >= threshold) moveBy(delta < 0 ? 1 : -1);
      else {
        position(true);
        scheduleAutoplay();
      }
    };
    viewport.addEventListener('pointerup', finishDrag);
    viewport.addEventListener('pointercancel', finishDrag);
    viewport.addEventListener(
      'click',
      (event) => {
        if (!dragged) return;
        event.preventDefault();
        event.stopPropagation();
        dragged = false;
      },
      true,
    );

    document.addEventListener('visibilitychange', scheduleAutoplay);
    reducedMotion.addEventListener('change', () => {
      position(false);
      scheduleAutoplay();
    });
    new ResizeObserver(() => position(false)).observe(viewport);

    carousel.classList.add('is-carousel');
    updateState();
    requestAnimationFrame(() => {
      position(false);
      scheduleAutoplay();
    });
  }
}
