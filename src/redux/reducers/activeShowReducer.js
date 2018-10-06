import { SHOW_SELECTED } from 'redux/actions/types';

export default function(state = null, action) {
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