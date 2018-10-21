import {
  ADD_TO_FAVSHOWS,
  REMOVE_FROM_FAVSHOWS,
  CLEAR_FAVSHOWS
} from 'redux/actions/types';

export const addToFavShows = show => {
  return {
    type: ADD_TO_FAVSHOWS,
    payload: show
  }
};

export const removeFromFavShows = show => ({
  type: REMOVE_FROM_FAVSHOWS,
  payload: show
});

export const clearFavShows = showList => ({
  type: CLEAR_FAVSHOWS,
  payload: showList
});
