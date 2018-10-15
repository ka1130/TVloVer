import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { HashRouter } from 'react-router-dom'

import store from 'redux/store'

import App from './components/App';
import Header from './components/App/Header';
import Show from './components/App/Show';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <>
        <Header />
        <Switch>
          <Route path="/shows/:id" component={Show} />
          <Route path="/page/:page" component={App} />
          <Redirect exact path='/' to='/page/1'/>
        </Switch>
      </>
    </HashRouter>
  </Provider>,
  document.getElementById('root'));

