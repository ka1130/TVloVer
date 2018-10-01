import React, { Component } from 'react';
import styles from './styles.module.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <h1 className={styles.appTitle}>Welcome to React</h1>
        </header>
      </div>
    );
  }
}

export default App;
