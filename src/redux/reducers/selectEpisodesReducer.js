import {
    SELECT_EPISODES_BEGIN,
    SELECT_EPISODES_FAILURE,
    SELECT_EPISODES_SUCCESS
  } from 'redux/actions/types';
  
  const initialState = {
    episodes: [],
    loading: false,
    error: null,
  };
  
  export default function selectedEpisodes(state = initialState, action) {
    switch (action.type) {
      case SELECT_EPISODES_BEGIN:
        return {
          ...state,
          loading: true,
          error: null,
        };
  
      case SELECT_EPISODES_SUCCESS:
        return {
          ...state,
          loading: false,
          episodes: action.payload.episodes,
        };
  
      case SELECT_EPISODES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
        };
  
      default:
        return state;
    }
  }
