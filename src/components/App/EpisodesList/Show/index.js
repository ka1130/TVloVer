import React, {Component} from 'react';
import PropTypes from 'prop-types';

import styles from './Show.module.scss';

class Show extends Component {
  state = {
    name: '',
    imgUrl: '',
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    let saveImgUrl = nextProps.imgUrl;

    /* https has to be added manually to avoid mixed content issues during deployment */
    if (!saveImgUrl.includes('https')) {
      saveImgUrl = saveImgUrl.replace('http', 'https');
    }

    return {
      name: nextProps.name,
      imgUrl: saveImgUrl,
    }
  }

  render() {
    const { name, imgUrl } = this.state;
    return (
      <li className={styles.showListElement}>
        <figure>
          <img src={imgUrl} alt={name} />
          <figcaption>
            <h5>{name}</h5>
          </figcaption>
        </figure>
     </li>
    );
  }
}

Show.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
}

export default Show;
