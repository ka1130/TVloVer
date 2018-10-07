import { format } from 'date-fns';

export const API_BASE = 'https://api.tvmaze.com'

export const COUNTRY_BASE = '/schedule?country=';
export const DEFAULT_COUNTRY = 'US';

export const DATE_BASE = '&date=';
export const today = format(new Date(), 'YYYY-MM-DD');
