import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { hideDetails } from 'redux/actions/detailsActions';

import styles from './ActiveShowModal.module.scss';

class ActiveShowModal extends Component {
  render() {
    const { isVisible } = this.props;
    return (
      <div className={`${isVisible ? styles.visible : ''} ${styles.modalWrapper}`}>
        <div className={styles.modalContent}>
          <button
            className={styles.close}
            onClick={() => this.props.hideDetails()}
          >
            &times;
          </button>
           <p>Modal Content here</p>
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