import  { ADD_TO_FAVSHOWS, REMOVE_FROM_FAVSHOWS } from 'redux/actions/types';

const initialState = {
  favShows: []
}

export default function favShows(state = initialState, action) {
  switch(action.type) {
    case ADD_TO_FAVSHOWS:
      console.log(action.payload);
      console.log(state);
      // return [...state, action.payload];
      return {
        favShows: [...state.favShows, action.payload]
      };
    case REMOVE_FROM_FAVSHOWS:
      return {
        favShows: [...state.favShows].filter(element => element.id !== action.payload.id)
      };
    default:
      return state;
  }
}