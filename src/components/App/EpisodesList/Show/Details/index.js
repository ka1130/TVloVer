import React from 'react';

import styles from './Details.module.scss';

const Details = props => {
  if (!props.summary) return null;

  return (
    <div className={`${styles.detailsWrapper} ${styles.visible}`}>
      <button
        className={styles.toggleDetailsButton}
        onClick={props.toggleDetails}
      >
        {!props.detailsShown ? 'Show details' : 'Hide details'}
      </button>
      <p className={`${props.detailsShown ? styles.visible : ''} ${styles.summary}`}>
        {props.summary ? props.summary.replace('<p>','').replace('</p>','') : ''}
      </p>
      {/* The below button will be a Link */}
      <button className={`${props.detailsShown ? styles.visible : ''} ${styles.showPageButton}`}>Go to the show's page</button>
    </div>
  );
}

export default Details;
{/* <div className={`${props.summary ? styles.visible : ''} ${styles.detailsWrapper}`}> */}