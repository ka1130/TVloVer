import  { ADD_TO_WATCHLIST } from 'redux/actions/types';

export default function watchListedShows(state = [], action) {
  switch(action.type) {
    case ADD_TO_WATCHLIST:
      console.log(state, action.payload);
      // return {
      //   watchListedShows: [...state.watchListedShows, action.payload]
      // };
    default:
      return state;
  }
}