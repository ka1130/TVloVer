export const getCurrentEpisodes = (currentPage, episodesPerPage, episodes) => {
  const indexOfLastEpisode = parseInt(currentPage, 10) * episodesPerPage;
  const indexOfFirstEpisode = indexOfLastEpisode - episodesPerPage;
  const currentEpisodes = episodes.slice(indexOfFirstEpisode, indexOfLastEpisode);
  return currentEpisodes;
};
