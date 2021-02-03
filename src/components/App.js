import { useEffect, useState } from 'react';

import { ReactComponent as Logo } from '../assets/chicago.svg';
import {
  animateText,
  animateTextCars,
  animateTextNext,
  animateTyping,
  closeClients,
  closeCompanies,
  darkenText,
  lightenText,
  makeElmVisible,
  moveCone,
  selectClients,
  selectCompanies,
  traceSkyline
} from '../services/AnimationService';
import { companies } from '../copy/companies';
import { clients } from '../copy/clients';

import './App.css';

function App() {
  const isMobile = window.innerWidth < 850;
  const [ isCompaniesSelected, setIsCompaniesSelected ] = useState(true);

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

    animateText();
    animateTextCars();
    animateTextNext();
    // eslint-disable-next-line
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

  function openCompanies() {
    setIsCompaniesSelected(true);
    selectCompanies();
  }

  function openClients() {
    setIsCompaniesSelected(false);
    selectClients();
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-name-wrapper">
          <h1 className="line-1 anim-typewriter">Stu Pearlman</h1>
          <h3 className="line-2 anim-typewriter-2">Software Architect</h3>
        </div>

        <div className="App-link-wrapper">
          <span className="App-clients" onMouseOver={leanLeft} onClick={openClients}>Clients</span>
          <span className="App-companies" onMouseOver={leanCenter} onClick={openCompanies}>Companies</span>
          <span className="App-code" onMouseOver={leanRight} onClick={openGithub}>Code</span>
        </div>

        <div className="cone"/>

        <div className="vertical-line">
          <span className="App-close-modal" onClick={isCompaniesSelected ? closeCompanies : closeClients}>X</span>
          <div className="App-card-wrapper">
            {
              companies.map(company => (
                <div className="App-card">
                  <a id={company.id} href={company.href} target="_blank" rel="noreferrer">
                    <h3 className="App-company-name">{company.heading}</h3>
                  </a>
                  {
                    company.blocks.map(block => (
                      <>
                        <p>
                          <b><i>{block.heading}</i></b>
                        </p>
                        <ul>
                          {
                            block.lines.map(line => (
                              <>
                                <li>{line}</li>
                                <br/>
                              </>
                            ))
                          }
                        </ul>
                      </>
                    ))
                  }
                </div>
              ))
            }
          </div>

          <div className="App-card-wrapper-clients">
            {
              clients.map(client => (
                <div className="App-card">
                  <h3 className="App-company-name">{client.heading}</h3>
                  <p>{client.body}</p>
                </div>
              ))
            }
          </div>
        </div>
        <Logo className="App-skyline"/>
      </header>
    </div>
  );
}

export default App;
