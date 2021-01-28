import { gsap, SteppedEase, TimelineMax, TweenLite, TweenMax } from 'gsap';
import { ExpoScaleEase } from 'gsap/EasePack';

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

export function expandLine(selector) {
  TweenMax.to(selector, 0.5, {
    height: '80vh',
    ease: SteppedEase.config(37),
    yoyo: true
  });
}

export function selectCompanies() {
  const isMobile = window.innerWidth < 850;

  TweenLite.to('.App-clients', 1.5,
    { y: (-window.innerHeight / 2) - 100, opacity: 0 }
  );

  TweenLite.to('.App-code', 1.5,
    { y: (-window.innerHeight / 2) - 100, opacity: 0 }
  );

  TweenLite.to('.App-companies', 1,
    { y: isMobile ? (-window.innerHeight / 2) - 100 : 30 }
  );

  let mobileOpts = {};

  if (isMobile) {
    mobileOpts = {
      height: '100vh',
      position: 'fixed',
      top: 0,
    };
  }

  TweenMax.to('.vertical-line', 0.5, {
    height: '80vh',
    ease: SteppedEase.config(37),
    yoyo: true,
    ...mobileOpts
  });

  setTimeout(() => {
    TweenMax.to('.vertical-line', 0.5, {
      width: isMobile ? '100vw' : '80vw',
      ease: SteppedEase.config(37),
      yoyo: true
    });
  }, 800);

  setTimeout(() => {
    TweenMax.to('.App-close-modal', 0.5, {
      display: 'inline',
      ease: SteppedEase.config(37),
      yoyo: true
    });

    TweenMax.to('.App-card-wrapper', 0.5, {
      display: 'block',
      ease: SteppedEase.config(37),
      yoyo: true
    });
  }, 1000);
}

export function closeCompanies() {
  TweenMax.to('.App-card-wrapper', 0.5, {
    display: 'none',
    ease: SteppedEase.config(37),
    yoyo: true
  });

  TweenMax.to('.App-close-modal', 0.5, {
    display: 'none',
    ease: SteppedEase.config(37),
    yoyo: true
  });

  TweenMax.to('.vertical-line', 0.5, {
    width: 0,
    ease: SteppedEase.config(37),
    yoyo: true
  });

  setTimeout(() => {
    TweenMax.to('.vertical-line', 0.5, {
      height: 0,
      ease: SteppedEase.config(37),
      yoyo: true
    });

    TweenLite.to('.App-clients', 0.75,
      { y: 0, opacity: 1 }
    );

    TweenLite.to('.App-code', 0.75,
      { y: 0, opacity: 1 }
    );

    TweenLite.to('.App-companies', 1,
      { y: 0 }
    );
  }, 800);
}

export function selectClients() {
  const isMobile = window.innerWidth < 850;

  if (isMobile) {
    selectClientsMobile();
    return;
  }

  TweenLite.to('.App-companies', 1.2,
    { x: (window.innerWidth / 2), opacity: 0, pointerEvents: 'none', }
  );

  TweenLite.to('.App-code', 1.2,
    { x: (window.innerWidth / 2), opacity: 0, pointerEvents: 'none', }
  );

  TweenLite.to('.App-clients', 0.7,
    {
      x: 0,
      left: "50%",
      position: 'absolute',
      pointerEvents: 'none',
      ease: SteppedEase.config(100),
      marginLeft: -document.querySelector('.App-clients').offsetWidth / 2,
    }
  );

  setTimeout(() => {
    TweenLite.to('.App-clients', 1,
      { y: isMobile ? (-window.innerHeight / 2) - 100 : 30 }
    );

    let mobileOpts = {};

    if (isMobile) {
      mobileOpts = {
        height: '100vh',
        position: 'fixed',
        top: 0,
      };
    }

    TweenMax.to('.vertical-line', 0.5, {
      height: '80vh',
      ease: SteppedEase.config(37),
      yoyo: true,
      ...mobileOpts
    });

    setTimeout(() => {
      TweenMax.to('.vertical-line', 0.5, {
        x: 0,
        width: isMobile ? '100vw' : '80vw',
        ease: SteppedEase.config(37),
        yoyo: true
      });
    }, 800);

    setTimeout(() => {
      TweenMax.to('.App-close-modal', 0.5, {
        display: 'inline',
        ease: SteppedEase.config(37),
        yoyo: true
      });

      TweenMax.to('.App-card-wrapper', 0.5, {
        display: 'block',
        ease: SteppedEase.config(37),
        yoyo: true
      });
    }, 1000);
  }, 1300);
}

function selectClientsMobile() {
  const isMobile = window.innerWidth < 850;

  TweenLite.to('.App-companies', 1.5,
    { y: (-window.innerHeight / 2) - 100, opacity: 0 }
  );

  TweenLite.to('.App-code', 1.5,
    { y: (-window.innerHeight / 2) - 100, opacity: 0 }
  );

  TweenLite.to('.App-clients', 1,
    { y: isMobile ? (-window.innerHeight / 2) - 100 : 30 }
  );

  let mobileOpts = {};

  if (isMobile) {
    mobileOpts = {
      height: '100vh',
      position: 'fixed',
      top: 0,
    };
  }

  TweenMax.to('.vertical-line', 0.5, {
    height: '80vh',
    ease: SteppedEase.config(37),
    yoyo: true,
    ...mobileOpts
  });

  setTimeout(() => {
    TweenMax.to('.vertical-line', 0.5, {
      width: isMobile ? '100vw' : '80vw',
      ease: SteppedEase.config(37),
      yoyo: true
    });
  }, 800);

  setTimeout(() => {
    TweenMax.to('.App-close-modal', 0.5, {
      display: 'inline',
      ease: SteppedEase.config(37),
      yoyo: true
    });

    TweenMax.to('.App-card-wrapper', 0.5, {
      display: 'block',
      ease: SteppedEase.config(37),
      yoyo: true
    });
  }, 1000);
}

export function closeClients() {
  const isMobile = window.innerWidth < 850;

  if (isMobile) {
    closeClientsMobile();
    return;
  }

  TweenMax.to('.App-card-wrapper', 0.5, {
    display: 'none',
    ease: SteppedEase.config(37),
    yoyo: true
  });

  TweenMax.to('.App-close-modal', 0.5, {
    display: 'none',
    ease: SteppedEase.config(37),
    yoyo: true
  });

  TweenMax.to('.vertical-line', 0.5, {
    width: 0,
    ease: SteppedEase.config(37),
    yoyo: true
  });

  setTimeout(() => {
    TweenMax.to('.vertical-line', 0.5, {
      height: 0,
      ease: SteppedEase.config(37),
      yoyo: true
    });

    TweenLite.to('.App-clients', 0.7, { y: 0 });
  }, 800);

  setTimeout(() => {
    TweenLite.to('.App-clients', 0.7,
      {
        x: 0,
        left: 'auto',
        pointerEvents: 'auto',
        marginLeft: 0,
      }
    );

    setTimeout(() => {
      TweenLite.to('.App-clients', 0.2,
        {
          position: 'static',
          x: 0,
          ease: ExpoScaleEase.config(100, 0),
        }
      );

      setTimeout(() => {
        TweenLite.to('.App-companies', 0.4,
          { x: 0, opacity: 1, pointerEvents: 'auto' }
        );

        TweenLite.to('.App-code', 0.4,
          { x: 0, opacity: 1, pointerEvents: 'auto' }
        );
      });
    }, 600);
  }, 1100);
}

function closeClientsMobile() {
  TweenMax.to('.App-card-wrapper', 0.5, {
    display: 'none',
    ease: SteppedEase.config(37),
    yoyo: true
  });

  TweenMax.to('.App-close-modal', 0.5, {
    display: 'none',
    ease: SteppedEase.config(37),
    yoyo: true
  });

  TweenMax.to('.vertical-line', 0.5, {
    width: 0,
    ease: SteppedEase.config(37),
    yoyo: true
  });

  setTimeout(() => {
    TweenMax.to('.vertical-line', 0.5, {
      height: 0,
      ease: SteppedEase.config(37),
      yoyo: true
    });

    TweenLite.to('.App-companies', 0.75,
      { y: 0, opacity: 1 }
    );

    TweenLite.to('.App-code', 0.75,
      { y: 0, opacity: 1 }
    );

    TweenLite.to('.App-clients', 1,
      { y: 0 }
    );
  }, 800);
}