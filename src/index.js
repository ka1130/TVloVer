import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from 'redux/store'

// import promise from 'redux-promise'; => will I need it?

import App from './components/App';
import Header from './components/App/Header';
import Show from './components/App/Show';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/shows/:id" component={Show} />
          <Route exact path="/" component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));

