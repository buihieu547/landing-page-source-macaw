import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './assets/scss/styles.scss';
import React from 'react';
import { render } from 'react-dom';
import App from './app/App';
import * as serviceWorker from './serviceWorker';

render(<App />, document.getElementById('root'));
serviceWorker.unregister();
