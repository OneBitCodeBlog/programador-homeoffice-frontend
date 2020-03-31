import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Jobs from './pages/Jobs';
import About from './pages/About';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Jobs} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}
