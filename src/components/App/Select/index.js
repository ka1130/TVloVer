import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchEpisodes } from 'redux/actions/episodesActions';
import PropTypes from 'prop-types';

import styles from './Select.module.scss';

class Select extends React.Component {
  render() {
    return (
      <select onChange={e => this.props.onChange(e.target.value)} value={this.props.value} className={styles.select}>
        {this.props.options.map(option => (
          <option value={option.code} key={option.code}>
            {option.name}
          </option>
        ))}
      </select>
    );
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ fetchEpisodes }, dispatch)
);

const mapStateToProps = state => ({
  episodes: state.data.episodes,
});

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Select);
