import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './Pagination.module.scss';

class Pagination extends Component {
  renderPageNumbers = () => {
    const { episodes, currentPage, episodesPerPage } = this.props;

    let pageNumbers = [];
    let i = 1;
    while(i <= Math.ceil(episodes.length / episodesPerPage)) pageNumbers.push(i++);

    if (pageNumbers.length < 2) {
      return null;
    }

    return pageNumbers.map(
      number => <li key={number}
                    id={number}
                    onClick={this.setCurrentPage}
                    className={currentPage === number.toString() ? `${styles.active}` : ''}
                    >
                      {number}
                    </li>
                  );
    }

    setCurrentPage = e => {
      const id = (Number(e.target.id));
      this.props.history.push(`${id}`);
    }

    render() {
      return (
        <ul className={styles.paginationWrapper}>
          {this.renderPageNumbers()}
        </ul>
      );
  }
}

const mapStateToProps = state => ({
  episodes: state.data.episodes,
});

export default connect(mapStateToProps)(Pagination);
