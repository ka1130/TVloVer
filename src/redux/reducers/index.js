import { combineReducers } from 'redux';
import fetchEpisodes from 'redux/reducers/episodesReducer';

const rootReducer = combineReducers({
  data: fetchEpisodes,
});

export default rootReducer;
