import  {
  ADD_TO_WATCHLIST,
  REMOVE_FROM_WATCHLIST,
  CLEAR_WATCHLIST
} from 'redux/actions/types';

const initialState = {
  watchlist: [],
  removedShows: []
};

export default function watchlist(state = initialState, action) {
  switch(action.type) {
    case ADD_TO_WATCHLIST:
      return {
        ...state,
        watchlist: [...state.watchlist, action.payload]
      };
    case REMOVE_FROM_WATCHLIST:
      return {
        ...state,
        removedShows: [...state.removedShows, action.payload]
      };
    case CLEAR_WATCHLIST:
      return {
        watchlist: []
      };
    default:
      return state;
  }
}
