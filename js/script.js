// ---- Theme toggle (persists via localStorage) ----
(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const stored = localStorage.getItem('portfolio-theme');

  if (stored) {
    root.setAttribute('data-theme', stored);
  }

  toggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('portfolio-theme', next);
  });
})();

// ---- Footer year ----
document.getElementById('year').textContent = new Date().getFullYear();

// ---- Mobile nav toggle ----
(function () {
  const btn = document.getElementById('navToggle');
  const links = document.querySelector('.nav__links');
  if (!btn || !links) return;
  btn.addEventListener('click', () => {
    links.classList.toggle('is-open');
  });
})();
