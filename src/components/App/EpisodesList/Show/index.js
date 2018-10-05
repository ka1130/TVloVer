import React, {Component} from 'react';
import PropTypes from 'prop-types';

import styles from './Show.module.scss';

class Show extends Component {
  state = {
    name: '',
    imgUrl: '',
  };

  static getDerivedStateFromProps(nextProps) {
    let saveImgUrl = nextProps.imgUrl;

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
        <button className={styles.showMoreButton}>Show more</button>
     </li>
    );
  }
}

Show.defaultProps = {
  name: '',
  imgUrl: '',
}

Show.propTypes = {
  name: PropTypes.string,
  imgUrl: PropTypes.string,
}

export default Show;
