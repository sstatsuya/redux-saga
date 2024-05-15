import {call, delay, put, takeEvery} from 'redux-saga/effects';
import {todoSlice, userSlice} from './userSlice';

export function* userWatcher() {
  yield takeEvery('user/getUserListRequest', fetchUserList);
}

function* fetchUserList() {
  try {
    yield delay(500);
    const userList = yield call(fetchUserListAPI);
    if (userList.isError) throw 'error';
    yield put(userSlice.actions.getUserListSuccess(userList));
  } catch (error) {
    yield put(userSlice.actions.getUserListError(error));
  }
}

const fetchUserListAPI = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .catch(e => {
      return {isError: true};
    });
  return response;
};
