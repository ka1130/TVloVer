export default (state = {}, action) => {
  switch (action.type) {
   case 'FETCH_EPISODES':
    return {
     result: action.payload
    }
   default:
    return state
  }
 }