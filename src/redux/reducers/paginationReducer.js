import { SET_CURRENT_PAGE } from 'redux/actions/types';

const initialState = {
  currentPage: 1,
};

export default function setCurrentPage(state = initialState, action) {
  switch(action.type) {
    case SET_CURRENT_PAGE:
      return {
        currentPage: action.payload,
      };
    default:
      return state;
  }
}
