// ---- header: cambia de "idioma de la página" a "banderas + empieza ahora" al scrollear ----
const topbar = document.getElementById('topbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 80) topbar.classList.add('is-scrolled');
  else topbar.classList.remove('is-scrolled');
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
