import { SHOW_SELECTED, NO_SHOW_SELECTED } from 'redux/actions/types';

export const showDetails = show => {
  // console.log('show details', show);
  return {
    type: SHOW_SELECTED,
    payload: show
  }
}

export const hideDetails = () => {
  return {
    type: NO_SHOW_SELECTED,
    payload: null
  }
}

// this returned object is an action
// action has to have type property and other data that desrcibes it
// usually it has type and payload

// action creator is a function that returns an action
// action is an object that flows thorugh all our reducers
// reducers can then use an action to produce a different value for a particular piece of state