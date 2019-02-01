import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

export default (ChildComponent) => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.shouldNavigateAway();
    }

    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        console.log('should navigate away!');
        this.props.history.push('/');
      }
    }

    render() {
      return <ChildComponent {...this.props} />
    }
  }

  const mapStateToProps = state => ({
    auth: state.auth
  })

  return connect(mapStateToProps)(ComposedComponent)
}