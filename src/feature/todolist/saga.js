import {call, delay, put, takeEvery} from 'redux-saga/effects';
import {todoSlice} from './todoSlice';

export function* todoListWatcher() {
  yield takeEvery('todo/getTodoListRequest', fetchTodoList);
}

function* fetchTodoList() {
  try {
    yield delay(500);
    const todoList = yield call(fetchTodoListAPI);
    if (todoList.isError) throw 'error';
    yield put(todoSlice.actions.getTodoListSuccess(todoList));
  } catch (error) {
    yield put(todoSlice.actions.getTodoListError(error));
  }
}

const fetchTodoListAPI = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .catch(e => {
      return {isError: true};
    });
  return response;
};
