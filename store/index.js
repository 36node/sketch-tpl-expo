import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import rootSaga from './rootSaga';

function reducer() {
  return {
  };
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(combineReducers({
  _INIT_: reducer,
}), applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
