import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.shouldNaviageAway();
    }

    componentDidUpdate() {
      this.shouldNaviageAway();
    }

    shouldNaviageAway() {
      if (!this.props.auth) {
        this.props.history.push('/');
      }
    }

    render () {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps (state) {
    return { auth: state.auth };
  }

  return connect(mapStateToProps, null)(ComposedComponent);
};