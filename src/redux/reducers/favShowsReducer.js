import  { ADD_TO_FAVSHOWS } from 'redux/actions/types';

export default function favShows(state = [], action) {
  switch(action.type) {
    case ADD_TO_FAVSHOWS:
      return [ ...state, action.payload ];
    default:
      return state;
  }
}