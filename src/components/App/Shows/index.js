import React from 'react';

import imgMissing from '../../../images/img_missing.png';
import Show from './Show';

import styles from './Shows.module.scss';

const Shows = (props) => {
  console.log(props.shows);
  return (
    <div>
      <p>Shows</p>
      <ul className={styles.showsList}>
        {props.shows.map(
          ({id, name, show}) => <Show
                                  key={id}
                                  name={name}
                                  imgUrl={show.image ? show.image.medium : imgMissing}/>
          )}
      </ul>
    </div>
  );
}

export default Shows;
