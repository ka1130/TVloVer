import { combineReducers } from 'redux';
import data from 'redux/reducers/episodesReducer';
import selectedEpisodes from 'redux/reducers/selectEpisodesReducer';
import show from 'redux/reducers/showsReducer';

const rootReducer = combineReducers({
  data,
  selectedEpisodes,
  show
  // the value of imported reducer will be assigned to the data key on the App state
  // data key added to the global application's state
  // any key added here ands up as a key on the app's global state
});

export default rootReducer;
