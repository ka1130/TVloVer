import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from 'redux/actions/authActions';

import styles from './GoogleAuth.module.scss';

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get())
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  }

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderGAuth() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return <button onClick={this.onSignOutClick}>Sign out</button>;
    } else {
      return <button onClick={this.onSignInClick}>Sign In with Google</button>;
    }
  }

  render() {
    return <span className={styles.signIn}>{this.renderGAuth()}</span>;
  }
}

const mapStateToProps = state => ({
  isSignedIn: state.auth.isSignedIn,
})

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);