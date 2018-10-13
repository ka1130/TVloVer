import {
  FETCH_SHOW_BEGIN,
  FETCH_SHOW_SUCCESS,
  FETCH_SHOW_FAILURE
} from 'redux/actions/types';

import * as api from 'constants/apiQueries';

export function fetchShow(id) {
  return dispatch => {
    dispatch(fetchShowBegin());
    return fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchShowSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchShowFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const fetchShowBegin = () => ({
  type: FETCH_SHOW_BEGIN
});

export const fetchShowSuccess = show => ({
  type: FETCH_SHOW_SUCCESS,
  payload: { show }
});

export const fetchShowFailure = error => ({
  type: FETCH_SHOW_FAILURE,
  payload: { error }
});
