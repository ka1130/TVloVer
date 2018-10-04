export function episodesActions() {
  return dispatch => {
    dispatch(fetchEpisodesBegin());
    return fetch("http://api.tvmaze.com/search/shows?q=girls")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchEpisodesSuccess(json.episodes));
        return json.episodes;
      })
      .catch(error => dispatch(fetchEpisodesFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const FETCH_EPISODES_BEGIN   = 'FETCH_EPISODES_BEGIN';
export const FETCH_EPISODES_SUCCESS = 'FETCH_EPISODES_SUCCESS';
export const FETCH_EPISODES_FAILURE = 'FETCH_EPISODES_FAILURE';

export const fetchEpisodesBegin = () => ({
  type: FETCH_EPISODES_BEGIN
});

export const fetchEpisodesSuccess = episodes => ({
  type: FETCH_EPISODES_SUCCESS,
  payload: { episodes }
});

export const fetchEpisodesFailure = error => ({
  type: FETCH_EPISODES_FAILURE,
  payload: { error }
});