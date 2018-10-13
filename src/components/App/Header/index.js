import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.appHeader}>
      <Link to="/1" className={styles.appTitle}>TVloVe</Link>
      <p>Your TV guide for today</p>
    </header>
  );
}

export default Header;
