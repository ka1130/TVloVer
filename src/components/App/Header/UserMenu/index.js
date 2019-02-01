import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { changeAuth } from 'redux/actions/authActions';

import styles from './UserMenu.module.scss';

class UserMenu extends Component {
  renderAuth() {
    if (this.props.auth) {
      return <Link to="/" onClick={() => this.props.changeAuth(false)}>Log Out</Link>
    } else {
      return <Link to="/my-account" onClick={() => this.props.changeAuth(true)}>Log In</Link>
    }
  }

  render() {
    return (
      <nav role="navigation" className={styles.userMenuWrapper}>
        <ul className={styles.menuList}>
          <li>
            <span className={styles.myAccount}>
              <span>My account</span>
            </span>
            <ul className={styles.dropdown}>
              <li>
                {this.renderAuth()}
              </li>
              <li>
                <Link to="/watchlist">Watchlist</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ changeAuth }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu)
