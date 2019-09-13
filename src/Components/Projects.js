import React from 'react';
import '../Styles/Projects.css';

export default class Projects extends React.Component {
  componentDidMount = () => {
    window.addEventListener('load', this.run);
    window.addEventListener('resize', this.run);
    window.addEventListener('scroll', this.run);
  };

  run = () => {
    const items = document.querySelectorAll('#projectsEle li');
    items.forEach(item => {
      if (this.isInView(item)) {
        item.classList.add('show');
      }
    });
  };

  isInView = item => {
    const rect = item.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  render() {
    return (
      <div id="projectsEle">
        <ul
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-easing="ease"
          data-aos-delay="250">
          <li>
            <div className="boxEle">
              <h3>Yelpcamp</h3>
              <p>
                A Full-stack web application that features basic CRUD
                implementation
              </p>
              <div>
                <img
                  alt="yelpcamp"
                  className="ui image"
                  src="https://media.giphy.com/media/h7d3OQZ6lAgMo13YVr/giphy.gif"
                />
              </div>
              <div className="toolCont">
                <span>HTML | CSS | JS</span>
                <span>MongoDB</span>
                <span>Express</span>
                <span>Node</span>
              </div>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://yelpcamp-port.herokuapp.com/">
                <button className="projButton">Demo</button>
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/nchulani2/yelpcamp">
                <button className="projButton">Source</button>
              </a>
            </div>
          </li>

          <li>
            <div className="boxEle">
              <h3>Navsearch</h3>
              <p className="backendImp">
                An Image search engine that uses to Unsplash API to retrieve
                images based on the user's input
              </p>
              <div
                style={{
                  color: 'rgba(233, 75, 75, 1)'
                }}>
                <em>Backend in development</em>
              </div>
              <div>
                <img
                  alt="navsearch"
                  className="ui image"
                  src="https://media.giphy.com/media/dXKK1j6O3lpyjiNJTu/giphy.gif"
                />
              </div>
              <div className="toolCont">
                <span>HTML | CSS | JS</span>
                <span>REACT</span>
                <span>REDUX</span>
              </div>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://navsearch.netlify.com">
                <button className="projButton">Demo</button>
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/nchulani2/navsearch">
                <button className="projButton">Source</button>
              </a>
            </div>
          </li>

          <li>
            <div className="boxEle">
              <h3>Haisky</h3>
              <p>
                A Weather app that was built using Google's Geocoder and Places
                API, also features geo-suggest implementation
              </p>
              <div>
                <img
                  alt="haisky"
                  className="ui image"
                  src="https://media.giphy.com/media/SXIx3qGfiQ5Dq5O2j4/giphy.gif"
                />
              </div>
              <div className="toolCont">
                <span>HTML | CSS | JS</span>
                <span>REACT</span>
              </div>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://haisky.netlify.com">
                <button className="projButton">Demo</button>
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/nchulani2/haisky">
                <button className="projButton">Source</button>
              </a>
            </div>
          </li>

          <li>
            <div className="boxEle">
              <h3>Chuvids</h3>
              <p className="backendImp">
                A Video web platform built with the Youtube API
              </p>
              <div
                style={{
                  color: 'rgba(233, 75, 75, 1)'
                }}>
                <em>Backend in development</em>
              </div>
              <div>
                <img
                  alt="chuvids"
                  className="ui image"
                  src="https://media.giphy.com/media/McsxM8thbRBSJEbNTz/giphy.gif"
                />
              </div>
              <div className="toolCont">
                <span>HTML | CSS | JS</span>
                <span>REACT</span>
              </div>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://chuvids.netlify.com">
                <button className="projButton">Demo</button>
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/nchulani2/chuvids">
                <button className="projButton">Source</button>
              </a>
            </div>
          </li>
          <li>
            <div className="boxEle">
              <h3>MHWU</h3>
              <p>
                A React and Redux built application that acts as a database for
                Monster Hunter World
              </p>
              <div>
                <img
                  alt="haisky"
                  className="ui image"
                  src="https://media.giphy.com/media/YNDeAaA6eg568ruKVi/giphy.gif"
                />
              </div>
              <div className="toolCont">
                <span>HTML | CSS | JS</span>
                <span>REACT</span>
                <span>REDUX</span>
              </div>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://mhwu.netlify.com">
                <button className="projButton">Demo</button>
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/nchulani2/mhwmonsties">
                <button className="projButton">Source</button>
              </a>
            </div>
          </li>
        </ul>
        <div
          className="moreSoon"
          data-aos="fade"
          data-aos-duration="500"
          data-aos-easing="ease"
          data-aos-delay="150"
          data-aos-offset="150">
          <div />
          <div />
          <div />
          <h1>Other projects in development</h1>
        </div>
      </div>
    );
  }
}
