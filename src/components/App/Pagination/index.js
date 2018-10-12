import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setCurrentPage } from 'redux/actions/paginationActions';

import styles from './Pagination.module.scss';

class Pagination extends Component {
  renderPageNumbers = () => {
    const { episodes, currentPage, setCurrentPage, episodesPerPage } = this.props;

    let pageNumbers = [];
    let i = 1;
    while(i <= Math.ceil(episodes.length / episodesPerPage)) pageNumbers.push(i++);

    return pageNumbers.map(
      number => <li key={number}
                    id={number}
                    onClick={e => setCurrentPage(Number(e.target.id))}
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

const mapStateToProps = state => ({
  episodes: state.data.episodes,
  currentPage: state.setCurrentPage.currentPage,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ setCurrentPage }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
