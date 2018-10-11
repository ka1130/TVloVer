import {
  FETCH_EPISODES_BEGIN,
  FETCH_EPISODES_FAILURE,
  FETCH_EPISODES_SUCCESS
} from 'redux/actions/types';

const initialState = {
  episodes: [],
  loading: false,
  error: null,
};

export default function data(state = initialState, action) {
  switch (action.type) {
    case FETCH_EPISODES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
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

/* State argument is not application state
Only the state this reducer is responsibe for
our application now only has one piece of state: the data, this reducer is responsible
for only this piece of state and all the information returned from reducers will
end up as value to this data

this whole state object returned will end up as value to the data key,
which is the name we gave when importing this file
to the rootReducer: data: data or simpler just data (same key and value name)
so we'll have state.episodes under data.episodes etc.

all reducers get 2 arguments: the current state and the action */
