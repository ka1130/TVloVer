import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Details from 'components/App/EpisodesList/Show/Details';

import styles from './Show.module.scss';

class Show extends Component {
  state = {
    detailsShown: false,
    name: '',
    imgUrl: '',
    summary: '',
  };

  static getDerivedStateFromProps(nextProps) {
    let saveImgUrl = nextProps.imgUrl;

    if (!saveImgUrl.includes('https')) {
      saveImgUrl = saveImgUrl.replace('http', 'https');
    }

    return {
      name: nextProps.name,
      summary: nextProps.summary,
      imgUrl: saveImgUrl,
    }
  }

  toggleDetails = () => {
    this.setState({ detailsShown: !this.state.detailsShown });
  }

  render() {
    const { name, imgUrl, detailsShown, summary } = this.state;
    return (
      <li className={styles.showListElement} onClick={this.props.openModal}>
        <figure>
          <img src={imgUrl} alt={name} />
          <figcaption>
            <h5 className={styles.showTitle}>{name}</h5>
            <Details summary={summary} toggleDetails={this.toggleDetails} detailsShown={detailsShown} />
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
