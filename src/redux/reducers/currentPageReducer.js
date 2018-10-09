import { CURRENT_PAGE } from 'redux/actions/types';

const initialState = {
  currentPage: 1,
};

export default function currentPage(state = initialState, action) {
  switch(action.type) {
    case CURRENT_PAGE:
      return {
        currentPage: action.payload,
      };
    default:
      return state;
  }
}
