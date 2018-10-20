import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'node-uuid';

import imgMissing from 'images/img_missing.png';
import Episode from 'components/App/EpisodesList/Episode';

import styles from './EpisodesList.module.scss';

const renderEpisodesList = (episodes, func) => {
  if (episodes.length) {
    return (
      <ul className={styles.showsList}>
        {episodes.map(
          (element) => <Episode
                          key={v4()}
                          name={element.name}
                          showTitle={element.show.name}
                          summary={element.summary}
                          openModal={() => func(element)}
                          imgUrl={element.show.image ? element.show.image.medium : imgMissing}/>
        )}
      </ul>
    );
  } else {
    return <p className={styles.nothingFound}>Sorry, there's nothing on TV today. Go read a book for Pete's sake!</p>;
  }
}

const EpisodesList = props => {
  const { episodes, openModal } = props;

  return (
    <React.Fragment>
      {renderEpisodesList(episodes, openModal)}
    </React.Fragment>
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
      title: PropTypes.string,
    }),
  })).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default EpisodesList;
