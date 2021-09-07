import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchMap(action) {
  try {
    const response = yield axios.get('/api/user', {params: {jobLocation: action.payload}});

    yield put({ 
            type: 'SET_MAP', 
            payload: response.data 
        });
  } catch (error) {
    console.log('Map GET request failed', error);
  }
}

function* mapSaga() {
  yield takeLatest('FETCH_MAP', fetchMap);
}

export default mapSaga;