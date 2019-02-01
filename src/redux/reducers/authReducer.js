import { CHANGE_AUTH } from 'redux/actions/types';

export default function changeAuth(state = false, action) {
  switch (action.type) {
    case CHANGE_AUTH:
      return action.payload;
    default:
      return state;
  }
}