const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const setMenu = (open) => {
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  navigation.classList.toggle('is-open', open);
};
menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
navigation.addEventListener('click', (event) => { if (event.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') { setMenu(false); menuButton.focus(); }
});
document.addEventListener('click', (event) => { if (!event.target.closest('.site-header')) setMenu(false); });
window.matchMedia('(min-width: 761px)').addEventListener('change', () => setMenu(false));
document.querySelector('#year').textContent = new Date().getFullYear();
