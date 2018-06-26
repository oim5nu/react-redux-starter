import React from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Routes from './routes';
import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <Helmet
      titleTemplate="%s - React.js Boilerplate"
      defaultTitle="React.js Boilerplate"
    >
      <meta name="description" content="A React.js Boilerplate application" />
    </Helmet>
    <Header />
    <Router>
      <Routes />
    </Router>
    <Footer />
  </div>
);

export default App;