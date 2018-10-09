import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { currentPage } from 'redux/actions/currentPageActions';

import styles from './Pagination.module.scss';

class Pagination extends Component {
  renderPageNumbers = () => {
    const { episodes, currentPage, episodesPerPage } = this.props;

    let pageNumbers = [];
    let i = 1;
    while(i <= Math.ceil(episodes.length / episodesPerPage)) pageNumbers.push(i++);

    console.log(currentPage);

    return pageNumbers.map(
      number => <li key={number}
                    id={number}
                    onClick={e => currentPage(Number(e.target.id))}
                    // why isn't the below working?
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
  // episodes: state.data.episodes,
  // // currentPage is unfortunate as name of action/reducer => change it
  currentPage: state.currentPage,
  // episodesPerPage: state.currentPage.episodesPerPage,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ currentPage }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
