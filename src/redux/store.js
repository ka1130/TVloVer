import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'redux/reducers';
import { logger } from 'redux-logger';

const persistedState = localStorage.getItem('favs') ? JSON.parse(localStorage.getItem('favs')) : {};

const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(thunk, logger)
);

store.subscribe(() => {
  localStorage.setItem('favs', JSON.stringify(store.getState()));
})

export default store;
