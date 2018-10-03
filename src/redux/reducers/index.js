import { combineReducers } from 'redux';
import fetchEpisodes from 'redux/reducers/fetchEpisodes';

const rootReducer = combineReducers({
  fetchEpisodes,
});

export default rootReducer;
