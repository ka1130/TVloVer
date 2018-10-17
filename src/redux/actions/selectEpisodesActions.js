import {
    SELECT_EPISODES_BEGIN,
    SELECT_EPISODES_SUCCESS,
    SELECT_EPISODES_FAILURE
  } from 'redux/actions/types';
  
import * as api from 'constants/apiQueries';

export function selectEpisodes(selectedCountry) {
  return dispatch => {
    dispatch(selectEpisodesBegin());
    return fetch(api.API_BASE + api.DATE_BASE + api.today + api.COUNTRY_BASE + selectedCountry)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(selectEpisodesSuccess(json));
        return json;
      })
      .catch(error => dispatch(selectEpisodesFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const selectEpisodesBegin = () => ({
  type: SELECT_EPISODES_BEGIN
});

export const selectEpisodesSuccess = episodes => ({
  type: SELECT_EPISODES_SUCCESS,
  payload: { episodes }
});

export const selectEpisodesFailure = error => ({
  type: SELECT_EPISODES_FAILURE,
  payload: { error }
});
