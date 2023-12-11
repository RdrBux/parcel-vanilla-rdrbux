import gsap from 'gsap';
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// LOAD ANIMATION
window.addEventListener('load', fristInit);

export function init() {
  const header = document.querySelector('.header-home');
  const heroText = document.querySelector('.hero-text');
  const nav = document.querySelector('.nav-home');
  const projects = document.querySelectorAll('.project');

  const tl = gsap.timeline();
  tl.from([header, heroText, nav, projects], {
    autoAlpha: 0,
  });
}

const sectionHeight = 40;
export function fristInit() {
  const header = document.querySelector('.header-home');
  const heroText = document.querySelector('.hero-text');
  const nav = document.querySelector('.nav-home');
  const navItems = document.querySelectorAll('nav li');
  const letters = document.querySelectorAll('.letter');
  const projects = document.querySelectorAll('.project');

  const startOrder = [
    [letters[2], letters[3]],
    [letters[1], letters[4]],
    [letters[0], letters[5]],
  ];

  const tl = gsap.timeline({
    defaults: {
      ease: 'power4.out',
    },
  });

  tl.from(header, {
    autoAlpha: 0,
  })
    .from(startOrder[0], {
      y: '120%',
      duration: 1,
    })
    .from(
      startOrder[1],
      {
        y: '120%',
        duration: 1,
      },
      '<0.1'
    )
    .from(
      startOrder[2],
      {
        y: '120%',
        duration: 1,
      },
      '<0.2'
    )
    .from(
      heroText,
      {
        autoAlpha: 0,
      },
      1
    )
    .from(
      nav,
      {
        autoAlpha: 0,
        scaleX: 0,
        duration: 0.5,
      },
      1.2
    )
    .from(
      navItems,
      {
        opacity: 0,
        duration: 2,
        stagger: 0.2,
      },
      1.4
    )
    .from(
      projects,
      {
        autoAlpha: 0,
        duration: 3,
      },
      2
    );
}

// SCROLL ANIMATION
export function scrollAnim() {
  const letters = document.querySelectorAll('.letter');
  const smallLetters = document.querySelectorAll('.smletter');
  const header = document.querySelector('header');
  const smallLetterContainer = document.querySelector('.small-container');

  const scrollY = window.scrollY;

  const orderPairs = [
    [2, 3],
    [1, 4],
    [0, 5],
  ];

  if (scrollY > 350) {
    header.style.position = 'absolute';
  } else {
    header.style.position = 'fixed';
  }

  orderPairs.forEach((pair, orderIndex) => {
    const startScroll = sectionHeight * orderIndex;

    if (scrollY > startScroll) {
      const moveFactor = Math.min(1, (scrollY - startScroll) / sectionHeight);
      const moveFactorSmall = Math.min(
        1,
        (scrollY - startScroll - 60) / sectionHeight
      );

      const translateY = -moveFactor * header.offsetHeight - 4;
      const translateYsmall =
        -moveFactorSmall * smallLetterContainer.offsetHeight + 37;

      pair.forEach((idx) => {
        const letter = letters[idx];
        gsap.to(letter, {
          y: translateY,
        });

        const smallLetter = smallLetters[idx];
        gsap.to(smallLetter, {
          y: translateYsmall,
        });
      });
    } else {
      pair.forEach((idx) => {
        const letter = letters[idx];
        gsap.to(letter, {
          y: 0,
        });

        const smallLetter = smallLetters[idx];
        gsap.to(smallLetter, {
          y: '150%',
        });
      });
    }
  });
}

// NAVBAR BUTTONS
export function navButtons() {
  const buttons = document.querySelectorAll('nav button');

  const ids = ['#home', '#work', '#about', '#contact'];

  buttons.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      const id = ids[idx];
      gsap.to(window, { duration: 1, scrollTo: { y: id } });
    });
  });
}

// PROJECTS
export function projectsAnim() {
  gsap.to('#dulcinea', {
    scrollTrigger: {
      trigger: '#dulcinea',
      start: '-=1%',
      endTrigger: '#about',
      end: 'top bottom',
      scrub: true,
      pin: true,
    },
    scale: 0.85,
    filter: 'blur(4px)',
  });

  gsap.to('#cv-design', {
    scrollTrigger: {
      trigger: '#cv-design',
      start: '-=3%',
      endTrigger: '#about',
      end: 'top bottom',
      scrub: true,
      pin: true,
    },
    scale: 0.9,
    filter: 'blur(2px)',
  });
}
