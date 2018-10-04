import React from 'react';
// import PropTypes from 'prop-types';

import imgMissing from 'images/img_missing.png';
import Show from 'components/App/EpisodesList/Show';

import styles from './EpisodesList.module.scss';

const EpisodesList = (props) => {
  return (
    <div>
      <h6 className={styles.showsHeading}>What’s on telly on <span className={styles.date}>{props.day}</span></h6>
      <ul className={styles.showsList}>
        {props.episodes.map(
          ({id, name, show}) => <Show
                                  key={id + name}
                                  name={name}
                                  imgUrl={show.image ? show.image.medium : imgMissing}/>
          )}
      </ul>
    </div>
  );
}

// EpisodesList.propTypes = {
//   episodes: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number,
//     name: PropTypes.string,
//     show: PropTypes.shape({
//       image: PropTypes.shape({
//         medium: PropTypes.string,
//       }),
//     }),
//   })).isRequired,
// };

export default EpisodesList;
