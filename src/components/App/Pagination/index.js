import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { currentPage } from 'redux/actions/currentPageActions';

import styles from './Pagination.module.scss';

class Pagination extends Component {
  renderPageNumbers = () => {
    const { episodes, episodesPerPage, currentPage } = this.props;
    let pageNumbers = [];
    for (let i = 1; i <= Math.ceil(episodes.length / episodesPerPage); i++) {
      pageNumbers.push(i);
    }

    return pageNumbers.map(
      number => <li 
                  key={number}
                  id={number}
                  onClick={e => currentPage(Number(e.target.id))}>
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

const mapStateToProps = state => ({
  episodes: state.data.episodes,
  currentPage: state.currentPage
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ currentPage }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
