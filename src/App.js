import { useEffect } from 'react';

import { ReactComponent as Logo } from './chicago.svg';
import { animateTyping, darkenText, lightenText, makeElmVisible, moveCone, traceSkyline } from './AnimationService';

import './App.css';

function App() {
  const isMobile = window.innerWidth < 850;

  useEffect(() => {
    const $cone = document.querySelector('.cone');
    const newHeight = window.innerHeight + 300;

    $cone.style.borderTop = `${newHeight}px solid rgba(255,255,0, 0.7)`;
    $cone.style.borderLeft = `${Math.floor(newHeight / 3)}px solid transparent`;
    $cone.style.borderRight = `${Math.floor(newHeight / 3)}px solid transparent`;

    traceSkyline();
    animateTyping('.anim-typewriter', 4, 2);

    setTimeout(() => {
      animateTyping('.anim-typewriter-2', -1, 3.5, '85%');
    }, 2300);

    setTimeout(() => {
      makeElmVisible('.App-link-wrapper span');
    }, 6100);

    setTimeout(() => {
      makeElmVisible('.cone');
      darkenText('.App-companies');

      if (isMobile) {
        darkenText('.App-clients');
        darkenText('.App-code');
      }
    }, 6500);
  }, []);

  function leanLeft() {
    darkenText('.App-clients');
    lightenText('.App-companies');
    lightenText('.App-code');
    !isMobile && moveCone(-38, 'left');
  }

  function leanRight() {
    darkenText('.App-code');
    lightenText('.App-companies');
    lightenText('.App-clients');
    !isMobile && moveCone(38, 'right');
  }

  function leanCenter() {
    darkenText('.App-companies');
    lightenText('.App-code');
    lightenText('.App-clients');
    !isMobile && moveCone(0);
  }

  function openGithub() {
    window.open('https://github.com/stuartpearlman', '_blank');
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-name-wrapper">
          <h1 className="line-1 anim-typewriter">Stu Pearlman</h1>
          <h3 className="line-2 anim-typewriter-2">Software Architect</h3>
        </div>
        <div className="App-link-wrapper">
          <span className="App-clients" onMouseOver={leanLeft}>Clients</span>
          <span className="App-companies" onMouseOver={leanCenter}>Companies</span>
          <span className="App-code" onMouseOver={leanRight} onClick={openGithub}>Code</span>
        </div>
        <div className="cone"/>
        <Logo className="App-skyline"/>
      </header>
    </div>
  );
}

export default App;
