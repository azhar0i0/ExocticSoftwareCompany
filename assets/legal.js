/* Shared behaviour for the legal pages (privacy.html, terms.html) */
(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  $('#year').textContent = new Date().getFullYear();

  const toc = $('.toc');
  if (!toc) return;
  const btn = $('.toc-btn', toc), current = $('.toc-current', toc), links = $$('.toc a', toc);
  const desktop = window.matchMedia('(min-width: 1024px)');

  /* Collapsible on small screens */
  const setOpen = (open) => { toc.classList.toggle('open', open); btn.setAttribute('aria-expanded', String(open)); };
  btn.addEventListener('click', () => !desktop.matches && setOpen(!toc.classList.contains('open')));
  links.forEach(a => a.addEventListener('click', () => !desktop.matches && setOpen(false)));
  document.addEventListener('click', (e) => { if (!toc.contains(e.target)) setOpen(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && toc.classList.contains('open')) { setOpen(false); btn.focus(); } });
  desktop.addEventListener('change', () => setOpen(false));

  /* Scrollspy: highlight the section nearest the top of the viewport */
  const sections = links.map(a => $(a.getAttribute('href'))).filter(Boolean);
  let ticking = false;
  const spy = () => {
    ticking = false;
    const line = window.innerHeight * 0.3;
    let active = sections[0];
    for (const s of sections) { if (s.getBoundingClientRect().top <= line) active = s; else break; }
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) active = sections[sections.length - 1];
    links.forEach(a => {
      const on = a.getAttribute('href') === `#${active.id}`;
      a.classList.toggle('on', on);
      if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
      if (on && current) current.textContent = a.textContent;
    });
  };
  window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(spy); } }, { passive: true });
  window.addEventListener('resize', spy);
  spy();
})();
