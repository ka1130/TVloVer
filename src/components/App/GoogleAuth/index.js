import React, { Component } from 'react';

import styles from './GoogleAuth.module.scss';

class GoogleAuth extends Component {
  state = { isSignedIn: null }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
      });
    });
  }

  renderGAuth() {
    if (this.state.isSignedIn === null) {
      return 'Are you signed in?';
    } else if (this.state.isSignedIn) {
      return 'Sign out';
    } else {
      return 'Sign in with Google';
    }
  }

  render() {
    return <span className={styles.signIn}>{this.renderGAuth()}</span>;
  }
}

export default GoogleAuth;