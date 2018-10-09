import { GET_CURRENT_PAGE } from 'redux/actions/types';

export const getCurrentPage = (page = 1) => {
  return {
    type: GET_CURRENT_PAGE,
    payload: page
  }
}
