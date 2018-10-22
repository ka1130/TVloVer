import { createSelector } from 'reselect';
import uniqBy from 'lodash/uniqBy';
import difference from 'lodash/difference';

const watchlistSelector = state => state.watchlist;
const removedShows = state => state.removedShows;

const getWatchlistedShows = (watchlist, removedShows) => {
  const watchlistedShows = difference(uniqBy(watchlist, e => e.id), removedShows);
  return watchlistedShows;
};

export default createSelector(
  watchlistSelector,
  removedShows,
  getWatchlistedShows
);
