import { SHOW_SELECTED } from 'redux/actions/types';

const initialState = {
  activeShow: null,
};

export default function(state = initialState, action) {
  switch(action.type) {
    case SHOW_SELECTED:
      return {
        ...state,
        activeShow: action.payload
      };
    default:
      return state;
  }
}