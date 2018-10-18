import React, {Component} from 'react';
import PropTypes from 'prop-types';

import styles from './Episode.module.scss';

class Episode extends Component {
  state = {
    name: '',
    showTitle: '',
    imgUrl: '',
  };

  static getDerivedStateFromProps(nextProps) {
    let saveImgUrl = nextProps.imgUrl;

    if (!saveImgUrl.includes('https')) {
      saveImgUrl = saveImgUrl.replace('http', 'https');
    }

    return {
      name: nextProps.name,
      showTitle: nextProps.showTitle,
      imgUrl: saveImgUrl,
    }
  }

  render() {
    const { name, showTitle, imgUrl } = this.state;
    return (
      <li className={styles.showListElement} onClick={this.props.openModal}>
        <figure>
          <img src={imgUrl} alt={name} />
          <figcaption>
            <p className={styles.showTitle}>Show: <strong>{showTitle}</strong></p>
            <p className={styles.episodeTitle}>Episode: <strong>{name}</strong></p>
          </figcaption>
        </figure>
     </li>
    );
  }
}

Episode.defaultProps = {
  name: '',
  imgUrl: '',
}

Episode.propTypes = {
  name: PropTypes.string,
  imgUrl: PropTypes.string,
  openModal: PropTypes.func.isRequired,
}

export default Episode;
