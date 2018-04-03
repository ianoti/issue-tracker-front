import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { Card, CardHeader, CardTitle, CardText, CardContent } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';


import * as issueTypes from './constants/actionTypes';

class App extends Component {

  componentDidMount() {
    // fetch the issues here
    const { fetchIssues } = this.props;
    fetchIssues();
  }

  handleSubmitIssue() {
    // code here to call action used to creat a new issue
  }

  renderIssueCards() {
    const { allIssues } = this.props;

    const cardedIssue = allIssues.map(issue => {
      return (
        <div>
          <Card
            style={{ width: '40%' }}
          >
            <CardHeader
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardTitle subtitle={issue.get('assigned')} />
            <CardText expandable={true}>
              {issue.get('description')}
            </CardText>
          </Card>
        </div>
      );
    });

    return cardedIssue;
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Issue Tracker</h1>
          </header>
          <div>
            <TextField
              hintText="Type description here"
            />
            <TextField
              hintText="Set the assigned person here"
            />
          </div>
          <div>
            {this.renderIssueCards()}
          </div>
        </div>
      </MuiThemeProvider>
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
