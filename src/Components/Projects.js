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
    console.log(rect.bottom);
    console.log(window.innerWidth, window.innerHeight);
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
          className="wow fadeIn"
          data-wow-delay="0.1s"
          data-wow-duration="0.3s">
          <li>
            <div className="boxEle">
              <h3>Yelpcamp</h3>
              <p>A CRUD based web application</p>
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
              <p className="backendImp">An Image search web application</p>
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
                  src="https://media.giphy.com/media/UqHIt3qzO9vvg0H6wo/giphy.gif"
                />
              </div>
              <div className="toolCont">
                <span>HTML | CSS | JS</span>
                <span>REACT</span>
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
              <p>A Weather app with geo-suggest implementation</p>
              <div>
                <img
                  alt="haisky"
                  className="ui image"
                  src="https://media.giphy.com/media/RioD3hJddx5AlZhsMD/giphy.gif"
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
              <p className="backendImp">A Youtube look-alike web application</p>
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
        </ul>
        <div
          className="moreSoon wow fadeInDown"
          data-wow-delay="0.2s"
          data-wow-duration="0.5s">
          <div />
          <div />
          <div />
          <h1>Other projects in development</h1>
        </div>
      </div>
    );
  }
}
