import { CURRENT_PAGE } from 'redux/actions/types';

export const currentPage = page => {
  console.log('current page', page);
  return {
    type: CURRENT_PAGE,
    payload: page
  }
}
