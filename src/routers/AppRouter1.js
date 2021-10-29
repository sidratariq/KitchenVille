import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import RecipieDashboardPage from '../components/RecipieDashboardPage';
import AddRecipiePage from '../components/AddRecipiePage';
import { createBrowserHistory } from 'history'
import EditRecipiePage from '../components/EditRecipiePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import LoginPage  from '../components/LoginPage';
import {PrivateRoute} from './PrivateRoute'
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      {/* <Header /> */}
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={RecipieDashboardPage}/>
        <PrivateRoute path="/create" component={AddRecipiePage} />
        <PrivateRoute path="/edit/:id" component={EditRecipiePage} />
        <PublicRoute path="/help" component={HelpPage} />
        <PublicRoute component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
