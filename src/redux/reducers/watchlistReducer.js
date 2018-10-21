import  {
  ADD_TO_WATCHLIST,
  REMOVE_FROM_WATCHLIST,
  CLEAR_WATCHLIST
} from 'redux/actions/types';

const initialState = {
  watchlist: []
}

export default function watchlist(state = initialState, action) {
  switch(action.type) {
    case ADD_TO_WATCHLIST:
      console.log(action.payload);
      console.log(state);
      // return [...state, action.payload];
      return {
        watchlist: [...state.watchlist, action.payload]
      };
    case REMOVE_FROM_WATCHLIST:
      return {
        watchlist: [...state.watchlist].filter(element => element.id !== action.payload.id)
      };
    case CLEAR_WATCHLIST:
      return {
        watchlist: []
      };
    default:
      return state;
  }
}