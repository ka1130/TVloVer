import { combineReducers } from 'redux';
import data from 'redux/reducers/episodesReducer';
import show from 'redux/reducers/showsReducer';
import watchlist from 'redux/reducers/watchlistReducer';
import changeAuth from 'redux/reducers/authReducer';

const rootReducer = combineReducers({
  data,
  show,
  watchlist,
  auth: changeAuth
});

export default rootReducer;
