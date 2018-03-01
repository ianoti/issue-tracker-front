import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';


import * as issueTypes from './constants/actionTypes';

class App extends Component {

  componentDidMount() {
    // fetch the issues here
    const { fetchIssues } = this.props;
    fetchIssues();
  }

  render() {
    const { allIssues } = this.props;
    console.log('all issues here', this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.get('fetching'),
    allIssues: state.get('allIssues'),
    error: state.get('error')
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchIssues: () => dispatch({ type: issueTypes.FETCH_ISSUES_START })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
