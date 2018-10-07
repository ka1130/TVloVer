import { format } from 'date-fns';

export const API_BASE = 'https://api.tvmaze.com/shows'
export const PAGE_BASE = '?page=';
export const DEFAULT_PAGE = 1;
// this number will be converted to string but it's easier to deal with numbers
// if the user is to back and forth on paginated results

export const COUNTRY_BASE = '/schedule?country=';
export const DEFAULT_COUNTRY = 'US';

export const DATE_BASE = '&date=';
export const today = format(new Date(), 'YYYY-MM-DD');
