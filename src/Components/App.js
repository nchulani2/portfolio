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
import AOS from 'aos';
import { toast } from 'react-toastify';

export default class App extends React.Component {
  componentDidMount = e => {
    setTimeout(() => {
      document.body.style.background = 'transparent';
    }, 850);
    window.scrollTo(0, 0);
    window.addEventListener('scroll', this.showNavBar, { passive: true });
    AOS.init();

    toast.configure({
      pauseOnHover: false
    });
  };

  showNavBar = e => {
    AOS.refresh();
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
        <div className="app animated fadeIn faster delay-0s">
          {/* The classnames are to aid with selection through DOM and navbar*/}
          <Page className="home" height="100vh" id="home">
            <Home />
          </Page>

          <Page className="about" height="100%" id="about">
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

          <Page className="skills" height="100%" id="skills">
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
          <Page className="projects" height="100%" id="projects">
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
          <Page className="contact" height="100%" id="contact">
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
