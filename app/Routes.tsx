import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import CustomePage from './containers/CustomePage';

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route path={routes.COUNTER} component={CounterPage} />
        <Route path={routes.CUSTOME} component={CustomePage} />
        <Route path={routes.HOME} component={HomePage} />
      </Switch>
    </App>
  );
}
