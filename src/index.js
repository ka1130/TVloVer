import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';

import Root from 'Root';
import App from 'components/App';
import Watchlist from 'components/App/Watchlist';
import Header from 'components/App/Header';
import Show from 'components/App/Show';

import './index.css';

ReactDOM.render(
  <Root>
    <HashRouter>
      <>
        <Header />
        <Switch>
          <Route path="/shows/:id" component={Show} />
          <Route path="/page/:page" component={App} />
          <Route path="/watchlist" component={Watchlist} />
          <Redirect exact path='/' to='/page/1'/>
        </Switch>
      </>
    </HashRouter>
  </Root>,
  document.getElementById('root'));

