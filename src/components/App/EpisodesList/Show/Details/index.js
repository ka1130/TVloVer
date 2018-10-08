import React from 'react';
import classNames from 'classnames/bind';

import styles from './Details.module.scss';

const Details = props => {
  let cx = classNames.bind(styles);

  let summaryClassName = cx({
    summary: true,
    visible: props.detailsShown,
  });

  let buttonClassName = cx({
    showPageButton: true,
    visible: props.detailsShown
  })

  if (!props.summary) return null;

  return (
    <div className={cx(styles.detailsWrapper, styles.visible)}>
      <button
        className={styles.toggleDetailsButton}
        onClick={props.toggleDetails}
      >
        {!props.detailsShown ? 'Show details' : 'Hide details'}
      </button>
      <p className={summaryClassName}>
        {props.summary ? props.summary.replace('<p>','').replace('</p>','') : ''}
      </p>
      {/* The below button will be a Link */}
      <button className={buttonClassName}>Go to the show’s page</button>
    </div>
  );
}

export default Details;
