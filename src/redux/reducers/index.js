import { combineReducers } from 'redux';
import data from 'redux/reducers/episodesReducer';

const rootReducer = combineReducers({
  data
  // the value of imported reducer will be assigned to the data key on the App state
  // this data now has the followng keys: data, episodes, error, loading
});

export default rootReducer;
