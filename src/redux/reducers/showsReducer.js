import {
  FETCH_SHOW_BEGIN,
  FETCH_SHOW_SUCCESS,
  FETCH_SHOW_FAILURE
} from 'redux/actions/types';

const initialState = {
  show: {},
  loading: false,
  error: null,
};

export default function show(state = initialState, action) {
  switch (action.type) {
    case FETCH_SHOW_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_SHOW_SUCCESS:
      return {
        ...state,
        loading: false,
        show: action.payload.show,
      };

    case FETCH_SHOW_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
}
