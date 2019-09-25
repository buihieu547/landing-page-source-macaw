import './assets/css/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import App from './app/App.jsx';

// redux-logger is a middleware that lets you log every state change
import logger from 'redux-logger';
// redux-thunk is a middleware that lets you dispatch async actions
import thunk from 'redux-thunk';

import {
	createStore,
	applyMiddleware
} from 'redux';

const middleware = applyMiddleware(thunk, logger);
const store = createStore(rootReducer, middleware);

ReactDOM.render(
  	<Provider store={store}>
    	<App />
  	</Provider>,
  	document.getElementById('root')
);

serviceWorker.unregister();
