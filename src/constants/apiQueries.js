import { format } from 'date-fns';

export const today = format(new Date(), 'YYYY-MM-DD');
export const API_BASE = 'https://api.tvmaze.com'
export const DATE_BASE = '/schedule?date=';
export const COUNTRY_BASE = '&country=';
export const DEFAULT_COUNTRY = 'US';
export const SHOWS_BASE = '/shows/';
