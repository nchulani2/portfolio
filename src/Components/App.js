import React from 'react';
import Navbar from './Navbar';
import Page from './Page';
import Cont from './Cont';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import '../Styles/App.css';
import WOW from 'wow.js';

export default class App extends React.Component {
  state = { atAbout: false };

  componentDidMount = e => {
    window.addEventListener('scroll', this.showNavBar);
    var wow = new WOW({
      boxClass: 'wow', // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: true, // trigger animations on mobile devices (default is true)
      live: true, // act on asynchronously loaded content (default is true)
      scrollContainer: null // optional scroll container selector, otherwise use window
    });
    wow.init();
  };

  showNavBar = e => {
    const navbutton = document.querySelector('#cn-button');
    const navwrapper = document.querySelector('#cn-wrapper');
    const topOfAbout = document.querySelector('.about').offsetTop - 50;
    const currentPos = window.pageYOffset;

    if (currentPos > topOfAbout) {
      navbutton.classList.remove('cn-hideIt');
      navwrapper.classList.remove('cn-hideIt');
    } else {
      navbutton.classList.add('cn-hideIt');
      navwrapper.classList.add('cn-hideIt');
    }
  };

  render() {
    return (
      <div>
        <div className="app animated fadeInRightBig delay-0s">
          {/* The classnames are to aid with selection through DOM and navbar*/}
          <Page className="home" height="100vh">
            <Home />
          </Page>

          <Page className="about" height="100%">
            <Cont
              padding="150px 0 100px 0 "
              caption="ABOUT"
              background="white"
              captionCol="#444649"
              captionBorder="#444649"
              captionMargin="20px auto 100px auto">
              <About />
            </Cont>
          </Page>

          <Page className="skills" height="100%">
            <Cont
              padding="180px 0 180px 0 "
              caption="SKILLS"
              background="#f6f6f6"
              captionCol="#444649"
              captionBorder="#444649"
              captionMargin="20px auto 100px auto">
              <Skills />
            </Cont>
          </Page>
          <Page className="projects" height="100%">
            <Cont
              padding="150px 0 200px 0 "
              caption="PROJECTS"
              background="transparent"
              captionCol="#444649"
              captionBorder="#444649"
              captionMargin="20px auto 0px auto">
              <Projects />
            </Cont>
          </Page>
          <Page className="contact" height="100%">
            <Cont
              padding="150px 0 150px 0 "
              caption="CONTACT"
              background="#252934"
              captionCol="white"
              captionBorder="white"
              captionMargin="20px auto 100px auto">
              <Contact />
            </Cont>
          </Page>
          <Footer />
        </div>
        <Navbar />
      </div>
    );
  }
}
