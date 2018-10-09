import React, { Component } from 'react';

import styles from './Pagination.module.scss';

class Pagination extends Component {
  renderPageNumbers = () => {
    const { episodes, episodesPerPage, handlePageChange, currentPage } = this.props;

    let pageNumbers = [];
    let i = 1;
    while(i <= Math.ceil(episodes.length / episodesPerPage)) pageNumbers.push(i++);

    return pageNumbers.map(
      number => <li key={number}
                    id={number}
                    onClick={handlePageChange}
                    className={currentPage === number ? `${styles.active}` : ''}
                    >
                      {number}
                    </li>
                  );
    }

    render() {
      return (
        <ul className={styles.paginationWrapper}>
          {this.renderPageNumbers()}
        </ul>
      );
  }
}

export default Pagination;
