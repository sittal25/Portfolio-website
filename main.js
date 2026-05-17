// Theme — remembers across pages
(function () {
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light');
    const btn = document.getElementById('themeBtn');
    if (btn) btn.textContent = '🌙';
  }
})();

function toggleTheme() {
  const isLight = document.body.classList.toggle('light');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  const btn = document.getElementById('themeBtn');
  if (btn) btn.textContent = isLight ? '🌙' : '☀️';
}

// Mobile menu
function openMobile()  { document.getElementById('mobileMenu').classList.add('open'); }
function closeMobile() { document.getElementById('mobileMenu').classList.remove('open'); }
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMobile(); });

// Scroll reveal
document.querySelectorAll('.reveal').forEach(el => {
  new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  }, { threshold: 0.12 }).observe(el);
});

// Contact form → opens email client
function sendMsg(e) {
  e.preventDefault();
  const name    = document.getElementById('cname')?.value    || '';
  const email   = document.getElementById('cemail')?.value   || '';
  const subject = document.getElementById('csubject')?.value || 'Portfolio Enquiry';
  const msg     = document.getElementById('cmsg')?.value     || '';
  window.location.href = `mailto:sittalkarki05@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Name: '+name+'\nEmail: '+email+'\n\n'+msg)}`;
  const el = document.getElementById('formMsg');
  if (el) { el.textContent = '✓ Opening your email client...'; setTimeout(() => el.textContent = '', 3000); }
}