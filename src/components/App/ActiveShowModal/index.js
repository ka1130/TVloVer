import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { hideDetails } from 'redux/actions/detailsActions';

import styles from './ActiveShowModal.module.scss';

class ActiveShowModal extends Component {
  render() {
    const { isVisible, activeShow } = this.props;
    return (
      <div className={`${isVisible ? styles.visible : ''} ${styles.modalWrapper}`}>
        <div className={styles.modalContent}>
          <button
            className={styles.close}
            onClick={() => this.props.hideDetails()}
          >
            &times;
          </button>
          <h5 className={styles.showTitle}>
            {activeShow ? activeShow.activeShow.name : ''}
          </h5>
          <p className={styles.summary}>
            {activeShow ? activeShow.activeShow.summary : 'No summary available'}
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activeShow: state.activeShow
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ hideDetails }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ActiveShowModal);
