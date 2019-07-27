import React from 'react';

// For typewriter
import Typist from 'react-typist';
import Cursor from 'react-typist';
import Particles from 'react-particles-js';

import '../Styles/Home.css';

const typingDone = () => {
  const homeButton = document.querySelector('.homebuttonEle');
  homeButton.classList.remove('hideIt');
  homeButton.classList.add('animated', 'flipInX', 'delay-0s');
};

const goToAbout = e => {
  e.preventDefault();
  const about = document.querySelector('.about');

  about.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
  });
};

const Home = () => {
  return (
    <div className="homeEle">
      <Particles
        className="particleCanv"
        params={{
          particles: {
            number: {
              value: 250,
              density: {
                enable: false
              }
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3
              }
            },
            line_linked: {
              enable: false
            },
            move: {
              random: true,
              speed: 2,
              direction: 'top',
              out_mode: 'out'
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'repulse'
              },
              onclick: {
                enable: false,
                mode: 'repulse'
              }
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.1
              }
            }
          }
        }}
      />

      <div className="flexContainer">
        <Typist
          startDelay={1500}
          onTypingDone={typingDone}
          className="typewriterEle"
          avgTypingDelay={30}
          avgTypingSpeed={70}>
          Hello, I'm <span className="mynameEle">Naveen Chulani</span>.
          <br />
          Full-stack Developer & Electrical Engineer
          <Cursor show={true} element="|" />
        </Typist>

        <div className="homeButton">
          <a onClick={goToAbout} href="#about">
            <button className="homebuttonEle hideIt">
              <span>Take a look </span>
              <i className="long arrow alternate right icon" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
