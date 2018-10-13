import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchShow } from 'redux/actions/showsActions';

import styles from './Show.module.scss';

class Show extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchShow(id);
  }

  render() {
    const { name, image, summary } = this.props.show;

    if (!image) {
      return <p>Loading...</p>;
    }

    return (
      <div className={styles.showInfo}>
        <img src={image.original} alt={name} className={styles.showImage}/>
        <h5>{name}</h5>
        <p>{summary}</p>
        <Link to="/page/1" className={styles.backHome}>Back to main page</Link> 
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ fetchShow }, dispatch)
);

const mapStateToProps = (state) => ({
  show: state.show.show,
  loading: state.show.loading,
  error: state.show.error
});

export default connect(mapStateToProps, mapDispatchToProps)(Show);
