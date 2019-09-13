import React from 'react';
import { render } from 'react-dom';

import App from './Components/App';

// TO AVOID CORS ERROR
export const BASE_URL =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:4000/'
    : 'https://backend-form-submit.herokuapp.com/';

setTimeout(() => {
  render(<App />, document.querySelector('#root'));
}, 200);
