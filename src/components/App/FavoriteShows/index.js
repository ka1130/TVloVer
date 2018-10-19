import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './FavoriteShows.module.scss';

class FavoriteShows extends Component {
  render() {
     return (
       <aside className={styles.favWrapper}>
         <h4>Your favorite shows</h4>
         <ul>
           {this.props.watchListedShows.map(show => <li key={show.id}>{show.name}</li>)}
         </ul>
       </aside>
     ) 
  }
}

const mapStateToProps = state => ({
  watchListedShows: state.watchListedShows
})

export default connect(mapStateToProps)(FavoriteShows);
