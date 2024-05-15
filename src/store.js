import {configureStore, createStore} from '@reduxjs/toolkit';
import {rootReducer} from './reducer';
import {todoSlice} from './feature/todolist/todoSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import {userSlice} from './feature/user/userSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    todoReducer: todoSlice.reducer,
    userReducer: userSlice.reducer,
  },
  middleware: getDefault => getDefault().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
export default store;
