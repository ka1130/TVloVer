import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hideDetails } from 'redux/actions/detailsActions';

import imgMissing from 'images/img_missing.png';

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
          <figure>
            <img
              src={activeShow && activeShow.activeShow.show.image.medium ? activeShow.activeShow.show.image.medium : imgMissing}
              alt="" />
            <figcaption>
              <h5 className={styles.showTitle}>
                {activeShow ? activeShow.activeShow.name : ''}
              </h5>
              <p className={styles.summary}>
                {activeShow && activeShow.activeShow.summary ? activeShow.activeShow.summary : 'No summary available'}
              </p>
              <a className={styles.link} href="#">Go to the show's page</a>              
            </figcaption>
          </figure>
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
