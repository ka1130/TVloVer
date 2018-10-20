import  { ADD_TO_FAVSHOWS } from 'redux/actions/types';

const initialState = {
  favShows: []
}

export default function favShows(state = initialState, action) {
  switch(action.type) {
    case ADD_TO_FAVSHOWS:
      return {
        favShows: [...state.favShows, action.payload]
      };
    default:
      return state;
  }
}