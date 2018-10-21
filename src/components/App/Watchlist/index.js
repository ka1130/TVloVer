import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { v4 } from 'node-uuid';
import { removeFromWatchlist, clearWatchlist } from 'redux/actions/watchlistActions';

import styles from './Watchlist.module.scss';

class Watchlist extends Component {
  render() {
    if (!this.props.watchlist.watchlist.length) {
      return <p>Your watchlist is empty</p>;
    }

    return (
      <aside className={styles.favWrapper}>
        <h4>Your favorite shows</h4>
        <ul>
          {this.props.watchlist.watchlist.map(show => (
            <li key={v4()}>
              <span>{show.name}</span>
              <button onClick={() => this.props.removeFromWatchlist(show)}>Remove from watchlist</button>
            </li>
          ))}
        </ul>
        <button onClick={() => this.props.clearWatchlist()}>Clear watchlist</button>
      </aside>
    );
  }
}

const mapStateToProps = state => ({
  watchlist: state.watchlist
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ removeFromWatchlist, clearWatchlist }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Watchlist);
