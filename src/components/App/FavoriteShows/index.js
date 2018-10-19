import React, { Component } from 'react';
import styles from './FavoriteShows.module.scss';

class FavoriteShows extends Component {
  render() {
     return (
       <aside className={styles.favWrapper}>
         <h4>Your favorite shows</h4>
       </aside>
     ) 
  }
}

export default FavoriteShows;
