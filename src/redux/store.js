import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'redux/reducers';
import { logger } from 'redux-logger';
import throttle from 'lodash/throttle';

import { loadState, saveState } from 'redux/localStorage';

const persistedState = loadState();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, logger),
);

const store = createStore(rootReducer, persistedState, enhancer);

store.subscribe(throttle(() => {
  saveState({
    watchlist: store.getState().watchlist
  });
}, 1000));

export default store;
