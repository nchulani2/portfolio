import React, { Component } from 'react';

// For typewriter
import Typist from 'react-typist';
import Cursor from 'react-typist';
import Particles from 'react-particles-js';

import scrollIntoView from 'smooth-scroll-into-view-if-needed';

import '../Styles/Home.css';

export default class Home extends Component {
  state = { typeDelay: 40 };
  speedUpTyper = () => {
    this.setState({ typeDelay: 0 });
  };
  typingDone = () => {
    const homeButton = document.querySelector('.homebuttonEle');
    homeButton.classList.remove('hideIt');
    homeButton.classList.add('animated', 'flipInX', 'delay-0s');
  };

  goToAbout = e => {
    e.preventDefault();
    const about = document.querySelector('.about');

    scrollIntoView(about, {
      scrollMode: 'if-needed',
      block: 'start',
      inline: 'nearest',
      duration: window.innerWidth > 499 ? 100 : 1500,
      ease: t =>
        t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
    });
  };
  render() {
    return (
      <div className="homeEle" onClick={this.speedUpTyper}>
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
            onTypingDone={this.typingDone}
            className="typewriterEle"
            avgTypingDelay={this.state.typeDelay}
            avgTypingSpeed={70}>
            Hello, I'm <span className="mynameEle">Naveen Chulani</span>.
            <br />
            Full-stack Developer & Electrical Engineer
            <Cursor show={true} element="|" />
          </Typist>

          <div className="homeButton">
            <button className="homebuttonEle hideIt" onClick={this.goToAbout}>
              <span>Take a look </span>
              <i className="long arrow alternate right icon" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
