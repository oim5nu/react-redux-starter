/**
 * index.js
 * 
 * This is the entry file for the application, only setup and boilerplate
 * code.
 * 
 */
// Needed for redux-saga es6 generator support
//import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
//import { Provider } from 'react-redux';
//import { ConnectedRouter } from 'react-router-redux';

import App from './app';
import './style.scss';

ReactDOM.render(
  <App />, 
  document.getElementById("root")
);