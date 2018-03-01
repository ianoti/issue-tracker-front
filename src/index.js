import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import watchAllSagas from "./sagas";

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { reducer } from './redux';

// create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// we will need some help with the devtools setup
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  reducer,
  compose(applyMiddleware(sagaMiddleware), reduxDevTools)
);

// boot up the saga
sagaMiddleware.run(watchAllSagas);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
