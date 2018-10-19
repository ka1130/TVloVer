import  { ADD_TO_WATCHLIST, REMOVE_FROM_WATCHLIST } from 'redux/actions/types';

export const addToWatchList = show => ({
  type: ADD_TO_WATCHLIST,
  payload: show
});

export const removeFromWatchList = show => ({
  type: REMOVE_FROM_WATCHLIST,
  payload: show
});
