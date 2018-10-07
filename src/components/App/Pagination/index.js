import React, {Component} from 'react';

import styles from './Pagination.module.scss';

class Pagination extends Component {
  render() {
    return (
      <ul className={styles.paginationWrapper}>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    );
  }
}

export default Pagination;
