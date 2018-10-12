import { SET_CURRENT_PAGE } from 'redux/actions/types';

export const setCurrentPage = (page = 1) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: page
  }
}
