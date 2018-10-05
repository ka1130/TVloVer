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

export default function data(state = initialState, action) {
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
        episodes: action.payload.episodes,
      };

    case FETCH_EPISODES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
}

// this whole state object returned will end up as value to the data key, which is the name we gave when importing this file
// to the rootReducer: data: data or simpler just data (same key and value name)
// so we'll have state.episodes under data.episodes etc.