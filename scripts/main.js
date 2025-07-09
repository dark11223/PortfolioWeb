const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.right-section');
hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
  hamburger.classList.toggle('active');
  // Accessibility: update aria-expanded
  const expanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', !expanded);
});