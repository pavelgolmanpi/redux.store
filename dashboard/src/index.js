import React from 'react';
import ReactDOM from "react-dom"
import { Provider } from 'react-redux';
import { BrowserRouter, browserHistory, Route, IndexRoute, Switch } from 'react-router-dom';
import configureStore from './store/configureStore.js';

import MainPage from './pages/MainPage';
import ProductsPage from './pages/ProductsIndexPage';
import ProductEditPage from './pages/ProductEditPage';
import CategoriesPage from './pages/CategoriesIndexPage';

const store = configureStore();


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/products" component={ProductsPage} />
        <Route path="/products/:id" component={ProductEditPage} />
        <Route exact path="/categories" component={CategoriesPage} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('body'));
