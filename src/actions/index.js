import * as issueTypes from '../constants/actionTypes';

export const fetchIssues = () => ({
  type: issueTypes.FETCH_ISSUES_START,
});

export const submitIssue = (description, severity, asigneee) => ({
  type: issueTypes.SUBMIT_ISSUE,
  payload: { description, severity, asigneee }

})
