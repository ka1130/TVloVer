import { combineReducers } from 'redux';
import data from 'redux/reducers/episodesReducer';

const rootReducer = combineReducers({
  data,
  // the value of imported reducer will be assigned to the data key on the App state
  // data key added to the global application's state
  // any key added here ands up as a key on the app's globa state
});

export default rootReducer;
