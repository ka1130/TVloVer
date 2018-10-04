import { combineReducers } from 'redux';
import fetchEpisodes from 'redux/reducers/episodesReducer';

const rootReducer = combineReducers({
  episodes: fetchEpisodes,
});

export default rootReducer;
