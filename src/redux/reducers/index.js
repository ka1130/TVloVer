import { combineReducers } from 'redux';
import data from 'redux/reducers/episodesReducer';
import show from 'redux/reducers/showsReducer';
import setCurrentPage from 'redux/reducers/paginationReducer';

const rootReducer = combineReducers({
  data,
  setCurrentPage,
  show
  // the value of imported reducer will be assigned to the data key on the App state
  // data key added to the global application's state
  // any key added here ands up as a key on the app's global state
});

export default rootReducer;
