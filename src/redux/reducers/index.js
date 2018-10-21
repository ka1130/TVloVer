import { combineReducers } from 'redux';
import data from 'redux/reducers/episodesReducer';
import show from 'redux/reducers/showsReducer';
import watchlist from 'redux/reducers/watchlistReducer';

const rootReducer = combineReducers({
  data,
  show,
  watchlist
});

export default rootReducer;
