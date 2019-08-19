import { fork } from 'redux-saga/effects';
import PetsSaga from '../components/Pets/Pets.saga';

export default function * root() {
    yield fork(PetsSaga);
}
