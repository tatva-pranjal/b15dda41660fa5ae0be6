// IMPORT EXTERNAL LIBRARIES/MODULES
import {takeLatest, fork, put} from 'redux-saga/effects';
import _ from 'lodash';
import {apiService} from '../../services/apiService';
import {navigateTo} from '../../services/navigationService';
import {endpoint, API_TOKEN} from '../../constants';

// WORKER SAGAS
function* workerRequestCountry(action) {
  yield put({
    type: 'SHOW_PAGE_LOADER',
  });
  const url = `${endpoint.API_URL}${action.payload.asteroId}?api_key=${API_TOKEN}`;
  const asteroData = yield apiService(url);
  if (asteroData && asteroData.success) {
    yield put({
      type: 'SET_DETAIL',
      payload: {
        data: asteroData.data,
      },
    });
    yield navigateTo('detailScreen');
  } else {
    yield put({
      type: 'FAILED_TO_SET_DETAIL',
      payload: {
        errorObj: 'somethind went wrong',
      },
    });
    yield alert('Some thing went wrong, Please try again');
  }
  yield put({type: 'HIDE_PAGE_LOADER'});
}

// WORKER SAGAS
function* workerRandomId(action) {
  yield put({
    type: 'SHOW_PAGE_LOADER',
  });
  const randomId = yield apiService(endpoint.RANDOM_URL);
  if (randomId && randomId.success) {
    const url = `${endpoint.API_URL}${randomId.data.near_earth_objects[0].id}?api_key=${API_TOKEN}`;
    const asteroData = yield apiService(url);
    if (asteroData && asteroData.success) {
      yield put({
        type: 'SET_RANDOM_ID_DETAIL',
        payload: {
          data: asteroData.data,
        },
      });
      yield navigateTo('detailScreen');
    } else {
      yield put({
        type: 'FAILED_TO_SET_DETAIL',
        payload: {
          errorObj: 'somethind went wrong',
        },
      });
      yield alert('Some thing went wrong, Please try again');
    }
  } else {
    yield alert('Some thing went wrong, Please try again');
  }
  yield put({type: 'HIDE_PAGE_LOADER'});
}

// WATCHER SAGAS
function* watcherRequestCountry() {
  yield takeLatest('SUBMIT_REQUEST', workerRequestCountry);
}

// WATCHER SAGAS
function* watcherRandomId() {
  yield takeLatest('RANDOM_ASTERO_ID_REQUEST', workerRandomId);
}
// running auth related saga.
export default [fork(watcherRequestCountry), fork(watcherRandomId)];
