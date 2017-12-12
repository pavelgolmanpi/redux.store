import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, browserHistory, Route, IndexRoute, Switch } from 'react-router-dom';
import configureStore from './store/configureStore.js';

import MainPage from './pages/MainPage';
import ProductsPage from './pages/ProductsIndexPage';

const store = configureStore();


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/products" component={ProductsPage} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('body'));
