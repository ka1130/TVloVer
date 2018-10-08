import React from 'react';
import PropTypes from 'prop-types';

import imgMissing from 'images/img_missing.png';
import Show from 'components/App/EpisodesList/Show';

import styles from './EpisodesList.module.scss';

const renderEpisodesList = (episodes, imgPath) => {
  if (episodes.length) {
    return (
      <ul className={styles.showsList}>
        {episodes.map(
          (element) => <Show
                          key={element.id}
                          name={element.name}
                          summary={element.summary}
                          imgUrl={element.show.image ? element.show.image.medium : imgMissing}/>
        )}
      </ul>
    );
  } else {
    return <p className={styles.nothingFound}>Sorry, there's nothing on TV today. Go read a book for Pete's sake!</p>;
  }
}

const EpisodesList = props => {
  return (
    <div>
      <h6 className={styles.showsHeading}>What’s on telly on <span className={styles.date}>{props.day}</span></h6>
      {renderEpisodesList(props.episodes)}
    </div>
  );
}

EpisodesList.propTypes = {
  episodes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    show: PropTypes.shape({
      image: PropTypes.shape({
        medium: PropTypes.string,
      }),
    }),
  })).isRequired,
};

export default EpisodesList;
