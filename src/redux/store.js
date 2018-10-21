import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'redux/reducers';
import { logger } from 'redux-logger';
import throttle from 'lodash/throttle';

import { loadState, saveState } from 'redux/localStorage';

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(thunk, logger)
);

store.subscribe(throttle(() => {
  saveState({
    watchlist: store.getState().watchlist
  });
}, 1000));

export default store;
