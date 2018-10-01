import React from 'react';

import styles from './Shows.module.scss';

const Shows = () => {
  return (
    <div>
      <p>Shows</p>
      <ul className={styles.showsList}>
        <figure>
          <img src='' alt='' />
          <figcaption>
            <h5>Title</h5>
          </figcaption>
        </figure>
      </ul>
    </div>
  );
}

export default Shows;
