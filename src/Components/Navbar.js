import React from 'react';
import scrollIntoView from 'smooth-scroll-into-view-if-needed';
import '../Styles/Navbar.css';

export default class Navbar extends React.Component {
  state = {
    notOpen: true
  };
  handleOpen = e => {
    e.preventDefault();

    const buttonEle = document.getElementById('cn-button');
    const wrapper = document.getElementById('cn-wrapper');
    const overlay = document.getElementById('cn-overlay');
    if (this.state.notOpen) {
      buttonEle.innerHTML = '-';
      wrapper.classList.add('opened-nav');
      overlay.classList.add('on-overlay');
      this.setState({ notOpen: false });
    } else {
      buttonEle.innerHTML = '+';
      wrapper.classList.remove('opened-nav');
      overlay.classList.remove('on-overlay');
      this.setState({ notOpen: true });
    }
  };

  getTag = e => {
    e.preventDefault();

    const wrapper = document.getElementById('cn-wrapper');
    const overlay = document.getElementById('cn-overlay');
    const buttonEle = document.getElementById('cn-button');

    // get anchor href from DOM event
    const anchor = e.target.closest('a').getAttribute('href');

    // get pages
    const home = document.querySelector('.home');
    const about = document.querySelector('.about');
    const skills = document.querySelector('.skills');
    const projects = document.querySelector('.projects');
    const contact = document.querySelector('.contact');

    switch (anchor) {
      case '#about':
        this.goIntoView(about, wrapper, overlay, buttonEle);
        break;
      case '#skills':
        this.goIntoView(skills, wrapper, overlay, buttonEle);
        break;
      case '#home':
        this.goIntoView(home, wrapper, overlay, buttonEle);
        break;
      case '#projects':
        this.goIntoView(projects, wrapper, overlay, buttonEle);
        break;
      case '#contact':
        this.goIntoView(contact, wrapper, overlay, buttonEle);
        break;
      default:
        this.goIntoView(home, wrapper, overlay, buttonEle);
        break;
    }
  };

  goIntoView = (element, wrapper, overlay, buttonEle) => {
    scrollIntoView(element, {
      scrollMode: 'always',
      block: 'start',
      inline: 'nearest',
      duration: window.innerWidth > 499 ? 100 : 2500,
      ease: t =>
        t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
    });

    buttonEle.innerHTML = '+';
    wrapper.classList.remove('opened-nav');
    overlay.classList.remove('on-overlay');
    this.setState({ notOpen: true });
  };

  render() {
    return (
      <div className="navbar">
        <button
          onClick={this.handleOpen}
          className="cn-button cn-hideIt animated bounceInDown delay-0s"
          id="cn-button">
          +
        </button>
        <div className="cn-wrapper cn-hideIt" id="cn-wrapper">
          <ul>
            <li>
              <a href="#about" onClick={this.getTag}>
                <span className="icon-something">
                  <p>About</p>
                  <i className="info icon" />
                </span>
              </a>
            </li>
            <li>
              <a href="#skills" onClick={this.getTag}>
                <span className="icon-skills">
                  <p>Skills</p>
                  <i className="code icon" />
                </span>
              </a>
            </li>
            <li>
              <a href="#home" onClick={this.getTag}>
                <span className="icon-home">
                  <p>Home</p>
                  <i className="home icon" />
                </span>
              </a>
            </li>
            <li>
              <a href="#projects" onClick={this.getTag}>
                <span className="icon-projects">
                  <p>Projects</p>
                  <i className="folder open icon link" />
                </span>
              </a>
            </li>
            <li>
              <a href="#contact" onClick={this.getTag}>
                <span className="icon-envelope-alt">
                  <p>Contact</p>
                  <i className="envelope outline icon" />
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div onClick={this.handleOpen} id="cn-overlay" className="cn-overlay" />
      </div>
    );
  }
}
