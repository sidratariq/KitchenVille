import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import RecipieDashboardPage from '../components/RecipieDashboardPage';
import AddRecipiePage from '../components/AddRecipiePage';
import EditRecipiePage from '../components/EditRecipiePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={RecipieDashboardPage} exact={true} />
        <Route path="/create" component={AddRecipiePage} />
        <Route path="/edit/:id" component={EditRecipiePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
