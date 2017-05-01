'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import store from './store'
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, onEnter } from 'react-router';

import Navbar from './Components/Navbar'
import InstaFoodContainer from './Containers/instagramPhotosContainer'
import {getAllPhotos, getFoodPhotos} from './action-creators/istagramActionCreators'

const fetchInitialData = function(nextRouterState) {
  // store.dispatch(getAllPhotos())
  store.dispatch(getFoodPhotos())
}

ReactDOM.render(
  <div className="container flexbox-container">
    <div className="jumbotron">
      <Navbar/>
      <Provider store = {store}>
        <Router history={browserHistory}>
          <Route path="/" component={InstaFoodContainer} onEnter={fetchInitialData}>
            <IndexRoute component={InstaFoodContainer} />
          </Route>
        </Router>
      </Provider>
    </div>
  </div>,
  document.getElementById('app')
);
