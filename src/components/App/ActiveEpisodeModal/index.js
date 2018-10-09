import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import imgMissing from 'images/img_missing.png';

import styles from './ActiveEpisodeModal.module.scss';

const ActiveEpisodeModal = props => {
  const { isVisible, activeEpisode, hideDetails } = props;
  console.log(activeEpisode);
  return (
    <div className={`${isVisible ? styles.visible : ''} ${styles.modalWrapper}`} onClick={hideDetails} id="modalBg">
      <div className={styles.modalContent}>
        <button
          className={styles.close}
          onClick={hideDetails}
          id="closeModal"
        >
          &times;
        </button>
        <figure>
          <img
            src={activeEpisode && activeEpisode.show.image ? activeEpisode.show.image.medium : imgMissing}
            alt={activeEpisode ? activeEpisode.name : ''} />
          <figcaption>
            <h5 className={styles.showTitle}>
              {activeEpisode ? activeEpisode.name : ''}
            </h5>
            <p className={styles.emissionTime}>
              <span className={styles.date}>{activeEpisode ? format(activeEpisode.airdate,'MMMM Do, YYYY') : ''}</span>
              <span className={styles.time}>{activeEpisode ? activeEpisode.airtime : ''}</span>
            </p>
            <p className={styles.summary}>
              {
                activeEpisode && activeEpisode.summary
                  ? activeEpisode.summary.replace('<p>','').replace('</p>','').replace('<b>','').replace('</b>','')
                  : 'No summary available'
              }
            </p>
            <a className={styles.link} href="#">Go to the show’s page</a>              
          </figcaption>
        </figure>
      </div>
    </div>
  )
}

ActiveEpisodeModal.defaultProps = {
  activeEpisode: null,
}

ActiveEpisodeModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  activeEpisode: PropTypes.object,
  hideDetails: PropTypes.func.isRequired,
}

export default ActiveEpisodeModal;
