import React, { Component } from 'react';
import { render } from 'react-dom';

import App from './Components/App';

// TO AVOID CORS ERROR
export const BASE_URL =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:4000/'
    : 'https://backend-form-submit.herokuapp.com/';

class Index extends Component {
  componentDidMount = () => {
    setTimeout(() => {
      document.body.style.background = 'transparent';
    }, 850);
  };

  render() {
    return (
      <div className="index">
        <App />
      </div>
    );
  }
}

render(<Index />, document.querySelector('#root'));
