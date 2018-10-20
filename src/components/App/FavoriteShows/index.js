import React, { Component } from 'react';
import { connect } from 'react-redux';
import { v4 } from 'node-uuid';

import styles from './FavoriteShows.module.scss';

class FavoriteShows extends Component {
  render() {
    if (!this.props.favShows.favShows.length) { //refactor!
      return <p>Your watchlist is empty</p>;
    }

    return (
      <aside className={styles.favWrapper}>
        <h4>Your favorite shows</h4>
        <ul>
          {this.props.favShows.favShows.map(show => <li key={v4()}>{show.name}</li>)}
        </ul>
      </aside>
    ) 
  }
}

const mapStateToProps = state => ({
  favShows: state.favShows
})

export default connect(mapStateToProps)(FavoriteShows);
