import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { v4 } from 'node-uuid';
import { removeFromFavShows, clearFavShows } from 'redux/actions/favShowsActions';

import styles from './FavoriteShows.module.scss';

class FavoriteShows extends Component {
  render() {
    if (!this.props.favShows.favShows.length) {
      //refactor! maybe 'state' instead of initial favShows?
      return <p>Your watchlist is empty</p>;
    }

    return (
      <aside className={styles.favWrapper}>
        <h4>Your favorite shows</h4>
        <ul>
          {this.props.favShows.favShows.map(show => (
            <li key={v4()}>
              <span>{show.name}</span>
              <button onClick={() => this.props.removeFromFavShows(show)}>Remove from watchlist</button>
            </li>
          ))}
        </ul>
        <button onClick={() => this.props.clearFavShows()}>Clear watchlist</button>
      </aside>
    );
  }
}

const mapStateToProps = state => ({
  favShows: state.favShows
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ removeFromFavShows, clearFavShows }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteShows);
