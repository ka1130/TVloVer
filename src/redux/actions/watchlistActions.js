import {
  ADD_TO_WATCHLIST,
  REMOVE_FROM_WATCHLIST,
  CLEAR_WATCHLIST
} from 'redux/actions/types';

export const addToWatchlist = show => {
  return {
    type: ADD_TO_WATCHLIST,
    payload: show
  }
};

export const removeFromWatchlist = show => ({
  type: REMOVE_FROM_WATCHLIST,
  payload: show
});

export const clearWatchlist = showList => ({
  type: CLEAR_WATCHLIST,
  payload: showList
});
