import React, {Component} from 'react';
import Header from './Header';

import styles from './App.module.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.appWrapper}>
        <Header/>
      </div>
    );
  }
}

export default App;
