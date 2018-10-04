import {
  FETCH_EPISODES_BEGIN,
  FETCH_EPISODES_SUCCESS,
  FETCH_EPISODES_FAILURE
} from 'redux/actions/types';

const initialState = {
  episodes: [],
  loading: false,
  error: null
};

export default function fetchEpisodes(state = initialState, action) {
  switch(action.type) {
    case FETCH_EPISODES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_EPISODES_SUCCESS:
      return {
        ...state,
        loading: false,
        episodes: action.payload.episodes
      };

    case FETCH_EPISODES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        episodes: []
      };

    default:
      return state;
  }
}
