import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import cx from 'classnames';

import imgMissing from 'images/img_missing.png';

import styles from './ActiveEpisodeModal.module.scss';

const episodeImage = episode => episode.show.image ? episode.show.image.medium : imgMissing;
const episodeName = episode => episode.name ? episode.name : '';
const episodeDate = episode => episode.airdate ? format(episode.airdate,'MMMM Do, YYYY') : '';
const episodeTime = episode => episode.airtime ? episode.airtime : '';
const episodeSummary = episode => episode.summary
                      ? episode.summary.replace('<p>','').replace('</p>','').replace('<b>','').replace('</b>','')
                      : 'No summary available';


const ActiveEpisodeModal = props => {
  const { isVisible, activeEpisode, hideDetails } = props;
  const id = 6;

  if (!activeEpisode) return null

  return (
    <div className={cx(styles.modalWrapper, isVisible && styles.visible)} onClick={hideDetails} id="modalBg">
      <div className={styles.modalContent}>
        <button className={styles.close} onClick={hideDetails} id="closeModal">
          &times;
        </button>
        <figure>
          <img src={episodeImage(activeEpisode)} alt={episodeName(activeEpisode)} />
          <figcaption>
            <h5 className={styles.showTitle}>{episodeName(activeEpisode)}</h5>
            <p className={styles.emissionTime}>
              <span className={styles.date}>{episodeDate(activeEpisode)}</span>
              <span className={styles.time}>{episodeTime(activeEpisode)}</span>
            </p>
            <p className={styles.summary}>{episodeSummary(activeEpisode)}</p>
            <Link to={`/shows/${id}`} className={styles.link}>Go to the show’s page</Link>
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
