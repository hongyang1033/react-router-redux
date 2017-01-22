import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Data from './containers/Data';
import Search from './containers/Search';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Data} />
    <Route path="/search" component={Search} />
  </Route>
);
