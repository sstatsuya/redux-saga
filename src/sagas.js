import { all } from "redux-saga/effects";
import { todoListWatcher } from "./feature/todolist/saga";
import { userWatcher } from "./feature/user/saga";

export default function* rootSaga(){
    yield all([todoListWatcher(), userWatcher()])
}