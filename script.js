// ---- header: sombra sutil al scrollear + botón "EMPIEZA AHORA" que aparece cuando el del hero sale de vista ----
const topbar = document.getElementById('topbar');
const heroCta = document.getElementById('heroCta');

function updateHeaderState() {
  if (window.scrollY > 20) topbar.classList.add('is-scrolled');
  else topbar.classList.remove('is-scrolled');

  if (heroCta) {
    const rect = heroCta.getBoundingClientRect();
    // el botón del header aparece recién cuando el botón del hero quedó
    // realmente tapado por el header (arriba de su borde inferior)
    const heroCtaHidden = rect.bottom < 76;
    if (heroCtaHidden) topbar.classList.add('show-cta');
    else topbar.classList.remove('show-cta');
  }
}

window.addEventListener('scroll', updateHeaderState, { passive: true });
window.addEventListener('resize', updateHeaderState);
updateHeaderState();

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
