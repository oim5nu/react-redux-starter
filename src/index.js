/**
 *  index.js
 *  Entry point into application
 */

// Needed for redux-saga es6 generator support
import 'babel-polyfill';

/**
 * index.js
 * 
 * This is the entry file for the application, only setup and boilerplate
 * code.
 * 
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore, { history } from './configureStore';
import Root from './containers/Root';
import FontFaceObserver from 'fontfaceobserver';
import 'tachyons';

// Load the favicon
/* eslint-disable import/no-webpack-loader-syntax */
import '!file-loader?name=[name].[ext]!./resources/favicon.ico';
/* eslint-enable import/no-webpack-loader-syntax */

// Import CSS reset and Global Styles
import './styles/theme.scss';

// Observe loading of Open Sans (to remove open sans, remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Open Sans', {});

// When Open Sans is loaded, add a font-family using Open Sans to the body
openSansObserver.load().then(() =>{
  document.body.classList.add('fontLoaded');
}, () => {
  document.body.classList.remove('fontLoaded');
});

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <AppContainer>
      {/* <LanguageProvider messages={messages}> */}
      <Root store={store} history={history} />
      {/* </LanguageProvider>*/}
    </AppContainer>,
    MOUNT_NODE
  );  
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['containers/Root'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

render();

