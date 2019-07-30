import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import smoothscroll from 'smoothscroll-polyfill';
import App from './Components/App';

const loader = document.body.querySelector('.loader');

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
    }, 1200);

    smoothscroll.polyfill();
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
}, 2500);
