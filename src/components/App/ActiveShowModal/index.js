import React from 'react';

import styles from './ActiveShowModal.module.scss';

const ActiveShowModal = () => {
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modalContent}>
        <button
          className={styles.close}
          onClick={() => {}}
        >
          &times;
        </button>
         <p>Modal Content here</p>
      </div>
    </div>
  )
}

export default ActiveShowModal;