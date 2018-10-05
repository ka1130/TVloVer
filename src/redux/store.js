import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'redux/reducers'
import { logger } from 'redux-logger'

const store = createStore(
  rootReducer,
  {},
  applyMiddleware(thunk, logger)
);

export default store;
