import { combineReducers } from 'redux';
import fetchEpisodes from 'redux/reducers/fetchEpisodesReducer';

const rootReducer = combineReducers({
  episodes: fetchEpisodes,
});

export default rootReducer;
