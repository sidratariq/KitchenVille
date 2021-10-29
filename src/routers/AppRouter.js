import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import RecipieDashboardPage from '../components/RecipieDashboardPage';
import AddRecipiePage from '../components/AddRecipiePage';
import EditRecipiePage from '../components/EditRecipiePage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={RecipieDashboardPage} />
        <PrivateRoute path="/create" component={AddRecipiePage} />
        <PrivateRoute path="/edit/:id" component={EditRecipiePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
