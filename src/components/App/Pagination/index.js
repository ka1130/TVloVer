import React, { Component } from 'react';
// import classNames from 'classnames/bind';

import styles from './Pagination.module.scss';

class Pagination extends Component {
  renderPageNumbers = () => {
    const { episodes, episodesPerPage, handlePageChange, currentPage } = this.props;
    // let cx = classNames.bind(styles);

    // let pageClassName = cx({
    //   active: props.isActive,
    // });

    // var euros = [29.76, 41.85, 46.5];
    // // const sum = euros.reduce((total, amount) => total + amount); 
    // var sum = euros.reduce( function(total, amount){
    //   return total + amount
    // });
    // sum // 118.11

    let pageNumbers = [];
    for (let i = 1; i <= Math.ceil(episodes.length / episodesPerPage); i++) {
      pageNumbers.push(i);
    }

    return pageNumbers.map(
      number => <li key={number}
                    id={number}
                    onClick={handlePageChange}
                    // isActive={currentPage == number}
                    className={currentPage == number ? `${styles.active}` : ''}
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
