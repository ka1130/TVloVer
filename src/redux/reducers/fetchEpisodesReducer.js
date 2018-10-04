// export default (state = {}, action) => {
//   switch (action.type) {
//     case 'FETCH_EPISODES_REQUEST':
//       return {
//         result: action.payload
//       }
//     case 'FETCH_EPISODES_SUCCESS':
//       return {
//         result: action.payload
//       }
//     case 'FETCH_EPISODES_FAILURE':
//       return {
//         result: action.payload
//       }      
//    default:
//     return state
//   }
//  }
export default () => {
  return [
    { title: 'JavScript: The Good Parts' },
    { title: 'Harry Potter' },
    { title: 'The Dark Tower' },
    { title: 'Eloquent Ruby' },
  ];
}
