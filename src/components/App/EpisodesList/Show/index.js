import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { showDetails } from 'redux/actions/detailsActions';

import styles from './Show.module.scss';

class Show extends Component {
  render() {
    const { name, imgUrl, show } = this.props;
    return (
      <li className={styles.showListElement}>
        <figure>
          <img src={imgUrl} alt={name} />
          <figcaption>
            <h5>{name}</h5>
          </figcaption>
        </figure>
        <button
          className={styles.showMoreButton}
          onClick={() => this.props.showDetails(show)}
        >
          Show more
        </button>
     </li>
    );
  }
}

const mapStateToProps = state => ({
  activeShow: state.activeShow
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ showDetails }, dispatch)
);

Show.defaultProps = {
  name: '',
  imgUrl: '',
}

Show.propTypes = {
  name: PropTypes.string,
  imgUrl: PropTypes.string,
}

export default connect(mapStateToProps, mapDispatchToProps)(Show);