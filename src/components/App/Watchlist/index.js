import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { v4 } from 'node-uuid';
import { removeFromWatchlist, clearWatchlist } from 'redux/actions/watchlistActions';

import styles from './Watchlist.module.scss';

class Watchlist extends Component {
  render() {
    if (!this.props.watchlist.watchlist.length) {
      return <p className={styles.watchlistEmpty}>Your watchlist is empty</p>;
    }

    return (
      <article className={styles.watchlistWrapper}>
        <h4>Your watchlist</h4>
        <ul className={styles.watchlist}>
          {this.props.watchlist.watchlist.map(show => (
            <li key={v4()}>
              <figure className={styles.watchlistItem}>
                <img src={show.image.medium} alt={show.name} className={styles.watchlistImage}/>
                <figcaption className={styles.watchlistCaption}>
                  <Link to={`shows/${show.id}`} className={styles.title}>{show.name}</Link> 
                  <button
                    className={styles.removeFromWatchlist}
                    onClick={() => this.props.removeFromWatchlist(show)}
                  >
                    Remove
                  </button>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
        <button
          className={styles.clearWatchlist}
          onClick={() => this.props.clearWatchlist()}
        >
          Clear watchlist
        </button>
      </article>
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
