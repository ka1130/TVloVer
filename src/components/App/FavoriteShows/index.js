import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './FavoriteShows.module.scss';

class FavoriteShows extends Component {
  render() {
    console.log(this.props.favShows.favShows.length);
    if (!this.props.favShows.favShows.length) {
      return <p>Your watchlist is empty</p>;
    }

    return (
      <aside className={styles.favWrapper}>
        <h4>Your favorite shows</h4>
        <ul>
          {this.props.favShows.favShows.map((show, i) => <li key={`${show.id}_${i}`}>{show.name}</li>)}
        </ul>
      </aside>
    ) 
  }
}

const mapStateToProps = state => ({
  favShows: state.favShows
})

export default connect(mapStateToProps)(FavoriteShows);
