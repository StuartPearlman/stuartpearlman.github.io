import { useEffect } from 'react';
import { gsap, SteppedEase, TimelineMax } from 'gsap';

import { ReactComponent as Logo } from './chicago.svg';

import './App.css';

function App() {
  useEffect(() => {
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
  }, []);


  // Stu Pearlman
  useEffect(() => {
    var tl = new TimelineMax({
      paused: true
    });
// letter animation
    tl.fromTo(".anim-typewriter", 2, {
      width: "0",
    }, {
      width: "100%", /* same as CSS .line-1 width */
      ease: SteppedEase.config(37)
    }, 0);
// text cursor animation
    tl.fromTo(".anim-typewriter", 0.5, {
      "border-right-color": "rgba(255,255,255,1)"
    }, {
      "border-right-color": "rgba(255,255,255,0)",
      repeat: 4,
      ease: SteppedEase.config(37)
    }, 0);

    tl.play();
  }, []);

  // Software Architect
  useEffect(() => {
    setTimeout(() => {
      var tl = new TimelineMax({
        paused: true
      });
  // letter animation
      tl.fromTo(".anim-typewriter-2", 3.5, {
        width: "0",
      }, {
        width: "85%", /* same as CSS .line-1 width */
        ease: SteppedEase.config(37)
      }, 0);
  // text cursor animation
      tl.fromTo(".anim-typewriter-2", 0.5, {
        "border-right-color": "rgba(255,255,255,1)"
      }, {
        "border-right-color": "rgba(255,255,255,0)",
        repeat: -1,
        ease: SteppedEase.config(37)
      }, 0);

      tl.play();
    }, 2300)
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-name-wrapper">
          <h1 className="line-1 anim-typewriter">Stu Pearlman</h1>
          <h3 className="line-2 anim-typewriter-2">Software Architect</h3>
        </div>
        <Logo className="App-skyline"/>
      </header>
    </div>
  );
}

export default App;
