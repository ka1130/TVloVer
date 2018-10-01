import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.appHeader}>
      <h1 className={styles.appTitle}>TVloVe</h1>
      <p>Your TV guide for today</p>
    </header>
  );
}

export default Header;
