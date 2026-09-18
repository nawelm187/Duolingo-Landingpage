// ---- header: sombra sutil al scrollear + botón "EMPIEZA AHORA" que aparece cuando el del hero sale de vista ----
const topbar = document.getElementById('topbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) topbar.classList.add('is-scrolled');
  else topbar.classList.remove('is-scrolled');
});

const heroCta = document.getElementById('heroCta');
if (heroCta) {
  const heroCtaObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) topbar.classList.remove('show-cta');
      else topbar.classList.add('show-cta');
    });
  }, { rootMargin: `-${76}px 0px 0px 0px`, threshold: 0 });
  heroCtaObserver.observe(heroCta);
}

// ---- dropdown de "idioma de la página": click para abrir/cerrar (el hover ya lo maneja el CSS en desktop) ----
const langDropdown = document.getElementById('langDropdown');
const langBtn = document.getElementById('langBtn');
langBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  const isOpen = langDropdown.classList.toggle('open');
  langBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});
document.addEventListener('click', () => {
  langDropdown.classList.remove('open');
  langBtn.setAttribute('aria-expanded', 'false');
});

// ---- revelado de secciones e imágenes al entrar en pantalla ----
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal, .reveal-img').forEach(el => revealObserver.observe(el));

// ---- flechas ‹ › : scrollean la fila de banderas horizontalmente ----
document.querySelectorAll('.lang-chip-row').forEach(row => {
  const prevArrow = row.previousElementSibling;
  const nextArrow = row.nextElementSibling;
  if (prevArrow && prevArrow.classList.contains('arrow')) {
    prevArrow.addEventListener('click', () => row.scrollBy({ left: -220, behavior: 'smooth' }));
  }
  if (nextArrow && nextArrow.classList.contains('arrow')) {
    nextArrow.addEventListener('click', () => row.scrollBy({ left: 220, behavior: 'smooth' }));
  }
});
