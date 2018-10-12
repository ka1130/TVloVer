import { createSelector } from 'reselect';

const episodesPerPage = 12;

export default createSelector(
  state => state.data.episodes,
  state => state.setCurrentPage.currentPage,
  (episodesState, currentPageState) => {
    const indexOfLastEpisode = parseInt(currentPageState) * episodesPerPage;
    const indexOfFirstEpisode = indexOfLastEpisode - episodesPerPage;
    const currentEpisodes = episodesState.slice(indexOfFirstEpisode, indexOfLastEpisode);
    return currentEpisodes;
  }
);
