import Lenis from '@studio-freight/lenis';
import barba from '@barba/core';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/all';
import { init, navButtons, projectsAnim, scrollAnim } from './app';
gsap.registerPlugin(ScrollToPlugin);

// Lenis
const lenis = new Lenis({
  lerp: 0.05,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Barba
function delay(n = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, n);
  });
}

function pageTransition() {
  const tl = gsap.timeline({
    defaults: {
      ease: 'power4.inOut',
    },
  });
  tl.to('.curtain', {
    scaleY: 1,
    duration: 0.5,
    transformOrigin: 'bottom',
    stagger: 0.1,
  }).to('.curtain', {
    scaleY: 0,
    duration: 0.5,
    transformOrigin: 'top',
    stagger: 0.1,
    delay: 0.2,
  });
}

function contentAnimation() {}

barba.init({
  sync: true,
  transitions: [
    {
      async leave(data) {
        lenis.stop();
        const done = this.async();
        pageTransition();
        await delay(1000);
        done();
      },
      async enter(data) {
        lenis.start();
        contentAnimation();
        if (data.next.namespace === 'home') init();
      },
      async once(data) {
        contentAnimation();
      },
    },
  ],
});

barba.hooks.enter((data) => {
  if (data.next.namespace === 'home') return;
  window.scrollTo(0, 0);
});

barba.hooks.afterEnter((data) => {
  if (data.next.namespace === 'home') {
    navButtons();
    projectsAnim();
    window.addEventListener('scroll', scrollAnim);
  } else {
    window.removeEventListener('scroll', scrollAnim);
  }
});
