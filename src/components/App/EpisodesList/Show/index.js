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
      <li className={styles.showListElement} onClick={this.props.openModal}>
        <figure>
          <img src={imgUrl} alt={name} />
          <figcaption>
            <h5 className={styles.showTitle}>{name}</h5>
          </figcaption>
        </figure>
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
  openModal: PropTypes.func.isRequired,
}

export default Show;
