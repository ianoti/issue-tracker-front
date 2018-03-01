import * as issueTypes from '../constants/actionTypes';
import { fromJS } from 'immutable'

// reducer with initial state
const initialState = fromJS({
  fetching: false,
  allIssues: null,
  error: null
});

export function reducer(state = initialState, action) {
  switch (action.type) {
    case issueTypes.FETCH_ISSUES:
      return state.mergeIn(['fetching'], true);

    case issueTypes.FETCH_ISSUES_SUCCESS:
      return state
      .mergeIn(['allIssues'], action.payload)
      .mergeIn(['fetching'], false);

    default:
      return state;
  }
}