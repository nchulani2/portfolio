import React from 'react';
import scrollIntoView from 'smooth-scroll-into-view-if-needed';
// import bodyImage from '../Images/full_body.png';
import '../Styles/About.css';

const goToContact = e => {
  e.preventDefault();
  const contactPage = document.querySelector('.contact');

  scrollIntoView(contactPage, {
    scrollMode: 'always',
    block: 'start',
    inline: 'nearest',
    duration: window.innerWidth > 499 ? 100 : 2500,
    // EaseInOutQuint Algo
    ease: t => (t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t)
  });
};

const About = () => {
  return (
    <div className="aboutEle">
      <div className="ui stackable two column grid" id="gridEle">
        <div
          className="ten wide column wow slideInUp"
          data-wow-delay="0.5s"
          data-wow-duration="0.5s">
          <div className="myImage" data-wow-delay="0.4s">
            {/* <img alt="myFace" src={bodyImage} /> */}
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
          </div>
          <div className="infoCont">
            I am an aspiring Full Stack developer with a degree in Electrical
            Engineering. I have a driven mindset towards learning new
            technologies as well as building applications with regards to REST
            architecture. I am currently building with React in hopes of
            developing applications that revolve around the <strong>M</strong>
            <em>(MongoDB)</em> <strong>E</strong>
            <em>(Express)</em> <strong>R</strong>
            <em>(React)</em> <strong>N</strong>
            <em>(Node.js)</em> stack. <br />
            <a className="infoContact" onClick={goToContact} href="#contact">
              Got an idea? Shoot me a message!
            </a>
            <i style={{ color: '#4183c4' }} className="smile outline icon" />
          </div>
        </div>
        <div
          className="six wide column wow slideInUp"
          data-wow-delay="0.5s"
          data-wow-duration="0.5s">
          <h2 id="resumeCapt">Resume</h2>
          <div className="iframeWrapper">
            <iframe
              className="iframer"
              title="resume"
              type="application/pdf"
              src="https://docs.google.com/file/d/18EtoOOjYYi9-pznvPa7pDjmcafzjzV8E0h1rnnv0xW0/preview?usp=drivesdk"
            />
          </div>
          <div className="previewResCont">
            Or preview it{' '}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://docs.google.com/document/d/18EtoOOjYYi9-pznvPa7pDjmcafzjzV8E0h1rnnv0xW0/preview">
              here
            </a>
          </div>
        </div>
      </div>
      <div
        className="appgoalsEle wow fadeIn"
        data-wow-delay="0.3s"
        data-wow-duration="0.7s">
        My Desirable App Features
      </div>
      <div className="ui stackable two column grid">
        <div
          className="eight wide column wow bounceInLeft"
          data-wow-delay="0.2s"
          data-wow-duration="0.5s">
          <div className="ui grid container margDaContainer">
            <div className="eight wide column">
              <div className="appBox">
                <i className="ui mobile alternate icon" />
              </div>
              <div className="textBoxEle">
                <div>Responsive</div>
                <p>Designs should work on all devices, desktop and mobile</p>
              </div>
            </div>
            <div className="eight wide column">
              <div className="appBox">
                <i className="space shuttle icon" />
              </div>
              <div className="textBoxEle">
                <div>Fast</div>
                <p>Website load speed and performance tested via GTmetrix</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="eight wide column wow bounceInRight"
          data-wow-delay="0.2s"
          data-wow-duration="0.5s">
          <div className="ui grid container margDaContainer">
            <div className="eight wide column">
              <div className="appBox">
                <i className="mouse pointer icon" />
              </div>
              <div className="textBoxEle">
                <div>Interactive</div>
                <p>Animations = A User-Friendly application</p>
              </div>
            </div>
            <div className="eight wide column">
              <div className="appBox">
                <i className="random icon" />
              </div>
              <div className="textBoxEle">
                <div>CRUD</div>
                <p>Most of my applications will follow REST architecture</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
