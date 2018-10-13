import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import cx from 'classnames';

import styles from './ActiveEpisodeModal.module.scss';

class ActiveEpisodeModal extends Component {
  state = {
    activeEpisode: null,
  }

  componentDidUpdate(prevProps) {
    if (this.props.activeEpisode !== prevProps.activeEpisode) {
      this.setState({ activeEpisode: this.props.activeEpisode })
    }
  }

  render() {
    const { isVisible, activeEpisode, hideDetails } = this.props;

    if (!activeEpisode) return null
  
    const { id } = activeEpisode.show;
    const summary = activeEpisode.summary ? activeEpisode.summary.replace(/(<([^>]+)>)/ig,"") : 'No summary available'
    {/* the above RegExp strips summary from HTML tags parsed as plain text */}
    
    return (
      <div className={cx(styles.modalWrapper, isVisible && styles.visible)} onClick={hideDetails} id="modalBg">
        <div className={styles.modalContent}>
          <button className={styles.close} onClick={hideDetails} id="closeModal">
            &times;
          </button>
          <figure>
            <img src={activeEpisode.show.image.medium} alt={activeEpisode.name} />
            <figcaption>
              <h5 className={styles.showTitle}>{activeEpisode.name}</h5>
              <p className={styles.emissionTime}>
                <span className={styles.date}>{format(activeEpisode.airdate,'MMMM Do, YYYY')}</span>
                <span className={styles.time}>{activeEpisode.airtime}</span>
              </p>
              <p className={styles.summary}>{summary}</p>
              <Link to={`/shows/${id}`} className={styles.link}>Go to the show’s page</Link>
            </figcaption>
          </figure>
        </div>
      </div>
    );
  }
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
