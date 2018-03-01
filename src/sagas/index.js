import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import * as issueTypes from '../constants/actionTypes';

// saga that will handle the fetching
function* handleFetchIssues(){
  try{
    const response = yield call(fetchIssues);
    // success
    yield put({ type: issueTypes.FETCH_ISSUES_SUCCESS, payload: response.data.data });
  } catch (err) {
    yield put({ type: issueTypes.FETCH_ISSUES_FAILURE, err });
  }
}

/* Utility Functions */
function fetchIssues() {
  return axios({
    method: "get",
    url: "http://127.0.0.1:3000/issues"
  });
}

function* watchAllSagas() {
  yield takeLatest(issueTypes.FETCH_ISSUES_START, handleFetchIssues);
}

export default watchAllSagas;