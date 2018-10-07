import React, { Component } from 'react';

import styles from './Pagination.module.scss';

class Pagination extends Component {
  renderPageNumbers = () => {
    const { episodes, episodesPerPage } = this.props;

    let pageNumbers = [];
    for (let i = 1; i <= Math.ceil(episodes.length / episodesPerPage); i++) {
      pageNumbers.push(i);
    }

    return pageNumbers.map(
    number => <li 
                key={number}
                id={number}
                onClick={this.props.handlePageChange}>
                  {number}
                </li>
                )
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
