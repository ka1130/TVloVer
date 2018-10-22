import  {
  ADD_TO_WATCHLIST,
  REMOVE_FROM_WATCHLIST,
  CLEAR_WATCHLIST
} from 'redux/actions/types';

// const initialState = {
//   watchlist: []
// }

export default function watchlist(state = [], action) {
  switch(action.type) {
    case ADD_TO_WATCHLIST:
      // if (state.watchlist.find(show => show.id === action.payload.id)) {
      //   // prevent adding the same show twice
      //   return state;
      // }
      console.log(action.payload);
      // return {
      //   watchlist: [...state.watchlist, action.payload]
      // };
      
      return {
        watchlist: [...state.watchlist, action.payload]
      };
    case REMOVE_FROM_WATCHLIST:
      return {
        watchlist: [...state.watchlist].filter(element => element.id !== action.payload.id)
      };
      // return action.payload;
    case CLEAR_WATCHLIST:
      return {
        watchlist: []
      };
    default:
      return state;
  }
}
