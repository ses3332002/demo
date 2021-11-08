import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

render(<App />, document.querySelector('#app'));

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./sw.js')
    .then(registration => {
      console.log('Service worker successfully registered', registration);
    })
    .catch(error => {
      console.log('Service worker registration failed', error);
    });
}
