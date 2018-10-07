import {
  FETCH_EPISODES_BEGIN,
  FETCH_EPISODES_SUCCESS,
  FETCH_EPISODES_FAILURE
} from 'redux/actions/types';

import * as api from 'constants/apiQueries';

export function fetchEpisodes() {
  return dispatch => {
    dispatch(fetchEpisodesBegin());
    return fetch(api.API_BASE + api.COUNTRY_BASE + api.DEFAULT_COUNTRY + api.DATE_BASE + api.today)
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

// changing the global App's state is what actions are for, reducers always return the same value under given conditions
// to chose another switch case from reducer we need actions
// actions creators return actions (objects - they always have a type that describes the type of action just triggered); 
// apart from type actions can have other data that further describes the action, like selected show etc.
// these objects are the automatically sent to all of the different reducers, no matter how many reducers we have
// all of these actions will flow through all of the reducers; reducers can choose, depending on the action, to return a different piece of state
// these pieces of state are then piped into the global App (all of the containers) state which will rerender if any pieces of state differs from the previous one
