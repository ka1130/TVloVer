import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getCurrentPage } from 'redux/actions/paginationActions';

import styles from './Pagination.module.scss';

class Pagination extends Component {
  renderPageNumbers = () => {
    const { episodes, getCurrentPage, episodesPerPage } = this.props;

    let pageNumbers = [];
    let i = 1;
    while(i <= Math.ceil(episodes.length / episodesPerPage)) pageNumbers.push(i++);

    return pageNumbers.map(
      number => <li key={number}
                    id={number}
                    onClick={e => getCurrentPage(Number(e.target.id))}
                    // why isn't the below working?
                    className={getCurrentPage === number ? `${styles.active}` : ''}
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
  currentPage: state.getCurrentPage.currentPage,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ getCurrentPage }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
