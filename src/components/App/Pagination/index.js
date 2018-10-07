import React, {Component} from 'react';

import styles from './Pagination.module.scss';

const sampleNumbers = [1, 2, 3, 4, 5];

class Pagination extends Component {
  renderPageNumbers = () => sampleNumbers.map(number => <li key={number} id={number} onClick={this.props.handlePageChange}>{number}</li>);

  render() {
    return (
      <ul className={styles.paginationWrapper}>
        {this.renderPageNumbers()}
      </ul>
    );
  }
}

export default Pagination;
