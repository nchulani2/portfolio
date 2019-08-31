import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import App from './Components/App';

const loader = document.body.querySelector('.loader');

// TO AVOID CORS ERROR
export const BASE_URL =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:4000/portfolio/email'
    : process.env.PRODUCTION_URL;

class Index extends Component {
  hideLoader = () => {
    loader.classList.add('loader--remove');
  };

  componentDidMount = () => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      this.hideLoader();
    }, 1000);
    setTimeout(() => {
      document.body.style.background = 'transparent';
    }, 1000);
  };

  render() {
    return (
      <div className="index">
        <App />
      </div>
    );
  }
}

setTimeout(() => {
  ReactDOM.render(<Index />, document.querySelector('#root'));
}, 0);
