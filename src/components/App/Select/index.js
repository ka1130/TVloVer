import React from 'react';
import PropTypes from 'prop-types';

import styles from './Select.module.scss';

class Select extends React.Component {
  render() {
    return (
      <div className={styles.selectWrapper}>
        <select
          onChange={e => this.props.onChange(e.target.value)}
          value={this.props.value}
          className={styles.select}
        >
          {this.props.options.map(option => (
            <option value={option.code} key={option.code}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
