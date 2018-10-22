import React from 'react';
import { Link } from 'react-router-dom';

import styles from './UserMenu.module.scss';

const UserMenu = props => {
  return (
    <nav role="navigation" className={styles.userMenuWrapper}>
      <ul className={styles.menuList}>
        <li>
          <span className={styles.myAccount}>
            <span>My account</span>
          </span>
          <ul className={styles.dropdown}>
            <li><Link to="/watchlist">Watchlist</Link></li>
            <li><a href="#">Sign out</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default UserMenu;
