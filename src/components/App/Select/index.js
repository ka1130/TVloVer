import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectEpisodes } from 'redux/actions/selectEpisodesActions';
import PropTypes from 'prop-types';

import styles from './Select.module.scss';

class Select extends React.Component {
  render() {
    return (
      <select onChange={e => this.props.onChange(e.target.value)}>
        {this.props.options.map(option => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ selectEpisodes }, dispatch)
);

const mapStateToProps = state => ({
  episodes: state.data.episodes,
});

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Select);
