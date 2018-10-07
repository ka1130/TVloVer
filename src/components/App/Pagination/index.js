import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { currentPage } from 'redux/actions/currentPageActions';

import styles from './Pagination.module.scss';

const sampleNumbers = [1, 2, 3, 4, 5];

class Pagination extends Component {
  renderPageNumbers = () => (
    sampleNumbers.map(
      number => <li 
                  key={number}
                  id={number}
                  onClick={e => this.props.currentPage(Number(e.target.id))}>
                    {number}
                  </li>
                  )
                );
  render() {
    return (
      <ul className={styles.paginationWrapper}>
        {this.renderPageNumbers()}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  currentPage: state.currentPage
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ currentPage }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
