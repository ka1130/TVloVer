import { combineReducers } from 'redux';
import data from 'redux/reducers/episodesReducer';
import show from 'redux/reducers/showsReducer';
import favShows from 'redux/reducers/favShowsReducer';

const rootReducer = combineReducers({
  data,
  show,
  favShows
});

export default rootReducer;
