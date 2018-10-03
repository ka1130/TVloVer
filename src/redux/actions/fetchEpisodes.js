// export function fetchEpisodes() {
//   return (dispatch) => {
//     dispatch({ type: '' })
//   }
// }

export const fetchEpisodes = () => dispatch => {
  dispatch({
    type: 'FETCH_EPISODES',
    payload: 'results of FETCH_EPISODES'
  })
}
