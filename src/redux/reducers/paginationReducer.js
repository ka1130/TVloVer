import { GET_CURRENT_PAGE } from 'redux/actions/types';

const initialState = {
  currentPage: 1,
  episodesPerPage: 12
};

export default function getCurrentPage(state = initialState, action) {
  switch(action.type) {
    case GET_CURRENT_PAGE:
      return {
        currentPage: action.payload,
        episodesPerPage: 12
      };
    default:
      return state;
  }
}
