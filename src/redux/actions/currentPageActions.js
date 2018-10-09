import { CURRENT_PAGE } from 'redux/actions/types';

export const currentPage = (page = 1) => {
  return {
    type: CURRENT_PAGE,
    payload: page
  }
}
