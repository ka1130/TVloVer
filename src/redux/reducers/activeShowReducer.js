import { SHOW_SELECTED, NO_SHOW_SELECTED} from 'redux/actions/types';

export default function(state = null, action) {
  switch(action.type) {
    case SHOW_SELECTED:
      return {
        ...state,
        activeShow: action.payload
      };
    case NO_SHOW_SELECTED:
      return null;
    default:
      return state;
  }
}
