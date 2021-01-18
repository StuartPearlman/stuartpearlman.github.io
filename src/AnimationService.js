import { gsap, SteppedEase, TimelineMax, TweenLite, TweenMax } from 'gsap';

export function traceSkyline() {
  const orig = document.querySelector('path');

  const obj = {
    length: 0,
    pathLength: orig.getTotalLength()
  };

  orig.style.stroke = '#f60';
  orig.style.strokeWidth = '3';

  gsap.to(obj, { duration: 8, length: obj.pathLength, onUpdate: drawLine, ease: 'none' });

  function drawLine() {
    orig.style.strokeDasharray = [ obj.length, obj.pathLength ].join(' ');
  }
}

export function animateTyping(selector, repeat, duration, width) {
  const tl = new TimelineMax({
    paused: true
  });

  tl.fromTo(selector, duration, {
    width: '0',
  }, {
    width: width || '100%',
    ease: SteppedEase.config(37)
  }, 0);

  tl.fromTo(selector, 0.5, {
    'border-right-color': 'rgba(255,255,255,1)'
  }, {
    repeat: repeat,
    ease: SteppedEase.config(37),
    'border-right-color': 'rgba(255,255,255,0)',
  }, 0);

  tl.play();
}

export function makeElmVisible(selector) {
  TweenMax.to(selector, 0.5, {
    opacity: 1,
    ease: SteppedEase.config(37),
    yoyo: true
  });
}

export function darkenText(selector) {
  TweenMax.to(selector, 0.5, {
    color: 'rgba(255,255,255, 1)',
    ease: SteppedEase.config(37),
    yoyo: true
  });
}

export function lightenText(selector) {
  TweenMax.to(selector, 0.5, {
    color: 'rgba(255,255,255, 0.5)',
    ease: SteppedEase.config(37),
    yoyo: true
  });
}

export function moveCone(rotation, position) {
  TweenLite.to('.cone', 0.5, {
    rotation,
    transformOrigin: `bottom`,
    bottom: '-25px',
  });
}