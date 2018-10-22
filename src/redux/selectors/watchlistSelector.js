import { createSelector } from 'reselect';
import uniqBy from 'lodash/uniqBy';

const watchlistSelector = state => state.watchlist;

const getWatchlistedShows = (watchlist) => {
  const watchlistedShows = uniqBy(watchlist, e => e.id);
  return watchlistedShows;
};

export default createSelector(
  watchlistSelector,
  getWatchlistedShows
)