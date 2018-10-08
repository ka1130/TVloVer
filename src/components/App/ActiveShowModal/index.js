import React from 'react';

import imgMissing from 'images/img_missing.png';

import styles from './ActiveShowModal.module.scss';

const ActiveShowModal = props => {
  const { isVisible, activeShow } = props;
  return (
    <div className={`${isVisible ? styles.visible : ''} ${styles.modalWrapper}`}>
      <div className={styles.modalContent}>
        <button
          className={styles.close}
          onClick={() => props.hideDetails()}
        >
          &times;
        </button>
        <figure>
          <img
            src=""
            alt="" />
          <figcaption>
            <h5 className={styles.showTitle}>
              {/* {activeShow ? activeShow.activeShow.name : ''} */}
            </h5>
            <p className={styles.summary}>
              {/* {
                activeShow && activeShow.activeShow.summary
                  ? activeShow.activeShow.summary.replace('<p>','').replace('</p>','').replace('<b>','').replace('</b>','')
                  : 'No summary available'
              } */}
            </p>
            <a className={styles.link} href="#">Go to the show’s page</a>              
          </figcaption>
        </figure>
      </div>
    </div>
  )
}

export default ActiveShowModal;
