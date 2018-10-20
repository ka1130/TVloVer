import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'redux/reducers';
import { logger } from 'redux-logger';

import { loadState, saveState } from 'redux/localStorage';

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(thunk, logger)
);

store.subscribe(() => {
  saveState({
    favs: store.getState()
  });
})

export default store;
