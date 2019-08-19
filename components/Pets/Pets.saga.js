import { put, takeEvery } from 'redux-saga/effects';
import SDK from '@36node/template-sdk';
import { REDUX_ACTION_FETCH, REDUX_NAMESPACE } from'./Pets.constants';
import { requestPets, receivePets } from './Pets.actions';

function * fetchPets() {
    yield put(requestPets());
    const sdk = new SDK({ base: "http://localhost:3000" });
    const petsResponse = yield sdk.pet.listPets();
    yield put(receivePets(petsResponse.body));
}

function * watchPets() {
    yield takeEvery(REDUX_ACTION_FETCH.ACTION, fetchPets);
}

export default watchPets;
