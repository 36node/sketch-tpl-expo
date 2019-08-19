import { combineReducers } from 'redux';
import store from './index';

const map = {};

export default function reducerRegister (namespace, reducer) {
    map[namespace] = reducer;
    store.replaceReducer(combineReducers(map));
}
