'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Compo from './Component';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, onEnter } from 'react-router';

ReactDOM.render(
  <div className="container flexbox-container">
    <div className="jumbotron">
      {/*<Provider store = {store}>*/}
        <Router history={browserHistory}>
          <Route path="/" component={Compo}>
            <IndexRoute component={Compo} />
          </Route>
        </Router>
      {/*</Provider>*/}
    </div>
  </div>,
  document.getElementById('app')
);