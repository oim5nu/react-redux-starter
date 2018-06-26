import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFoundPage from '../NotFoundPage';
import HomePage from '../HomePage';

/**
 *  Defines components to routes mapping
 * 
 * Everytime a new page is created, entry is required here to 
 * map the component/container to a specific route
 * 
 * [IMPORTANT]
 * All route entries are required to be done before the notFound component
 *
 * @returns {XML}
 */

const Routes = () => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='*' component={NotFoundPage} />
  </Switch>  
);

export default Routes;