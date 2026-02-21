// /js/navigation.js
export function showNav() {
  const nav = document.getElementById('bottomNav');
  nav.classList.remove('opacity-0', 'pointer-events-none');
  nav.classList.add('opacity-100');
}

export function goTo(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(p => p.classList.add('hidden'));

  const target = document.getElementById(pageId);
  target.classList.remove('hidden');

  // Animasi masuk elemen
  gsap.set(`#${pageId} .animate`, { y: 40, opacity: 0 });
  gsap.to(`#${pageId} .animate`, {
    y: 0,
    opacity: 1,
    duration: 0.6,
    stagger: 0.12,
    ease: "power2.out"
  });

  // Floating Buttons
  const float = document.getElementById('floatingButtons');
  if (pageId === 'event' || pageId === 'rundown') {
    float.classList.remove('opacity-0', 'pointer-events-none');
    float.classList.add('opacity-100');
  } else {
    float.classList.add('opacity-0', 'pointer-events-none');
    float.classList.remove('opacity-100');
  }

  // Nav state
  document.getElementById('nav-event')?.classList.toggle('opacity-50', pageId !== 'event');
  document.getElementById('nav-rundown')?.classList.toggle('opacity-50', pageId !== 'rundown');
}