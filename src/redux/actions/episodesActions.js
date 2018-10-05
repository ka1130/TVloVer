import {
  FETCH_EPISODES_BEGIN,
  FETCH_EPISODES_SUCCESS,
  FETCH_EPISODES_FAILURE
} from 'redux/actions/types';

import * as api from 'constants/apiQueries';

export function fetchEpisodes() {
  return dispatch => {
    dispatch(fetchEpisodesBegin());
    return fetch(api.API_BASE + api.DATE_BASE + api.today + api.COUNTRY_BASE + api.DEFAULT_COUNTRY)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchEpisodesSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchEpisodesFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

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
