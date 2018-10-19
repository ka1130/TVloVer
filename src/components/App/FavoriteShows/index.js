import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './FavoriteShows.module.scss';

class FavoriteShows extends Component {
  render() {
    if (!this.props.favShows.length) {
      return <p>Your watchlist is empty</p>;
    }

    return (
      <aside className={styles.favWrapper}>
        <h4>Your favorite shows</h4>
        <ul>
          {this.props.favShows.map(show => <li key={show.id}>{show.name}</li>)}
        </ul>
      </aside>
    ) 
  }
}

const mapStateToProps = state => ({
  favShows: state.favShows
})

export default connect(mapStateToProps)(FavoriteShows);
