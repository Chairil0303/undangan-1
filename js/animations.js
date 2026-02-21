// /js/animations.js
import { goTo, showNav } from './nav.js';

export function playEventExit(nextPage) {
  const exitTl = gsap.timeline({
    onComplete: () => goTo(nextPage)
  });

  exitTl.to("#event .animate", {
    y: -40,
    opacity: 0,
    duration: 0.3,
    stagger: 0.05
  });
}

export function initOpeningAnimation(audio) {
  const openingTl = gsap.timeline();

  openingTl
    .to("#bg", { opacity: 1, duration: 1 })
    .fromTo("#patrick", { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8 })
    .fromTo("#sponge", { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8 }, "<")
    .fromTo(".jelly", { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.2 })
    .fromTo("#slime", { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6 }, "-=0.3")
    .fromTo("#titleMain", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
    .fromTo("#titleGuest", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
    .fromTo("#btnOpen", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4 });

  document.getElementById('btnOpen').onclick = () => {
    const exitTl = gsap.timeline({
      onComplete: () => {
        goTo('event');
        showNav();

        if (audio) {
          audio.volume = 0.6;
          audio.play().catch(() => {});
        }
      }
    });

    exitTl
      .to("#patrick", { x: -200, opacity: 0, duration: 0.4 })
      .to("#sponge", { x: 200, opacity: 0, duration: 0.4 }, "<")
      .to(".jelly", { y: -80, opacity: 0, duration: 0.3, stagger: 0.1 })
      .to("#slime", { scale: 0.6, opacity: 0, duration: 0.3 })
      .to("#titleMain", { y: 40, opacity: 0, duration: 0.25 })
      .to("#titleGuest", { y: 40, opacity: 0, duration: 0.25 }, "<")
      .to("#btnOpen", { scale: 0.8, opacity: 0, duration: 0.2 });
  };
}