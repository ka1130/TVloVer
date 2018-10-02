import React from 'react';

import imgMissing from 'images/img_missing.png';
import Show from './Show';

import styles from './EpisodesList.module.scss';

const EpisodesList = (props) => {
  return (
    <div>
      <h6 className={styles.showsHeading}>What’s on telly on <span className={styles.date}>2018-07-05</span></h6>
      <ul className={styles.showsList}>
        {props.shows.map(
          ({id, name, show}) => <Show
                                  key={id + name}
                                  name={name}
                                  imgUrl={show.image ? show.image.medium : imgMissing}/>
          )}
      </ul>
    </div>
  );
}

export default EpisodesList;
