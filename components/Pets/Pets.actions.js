import { REDUX_ACTION_FETCH } from './Pets.constants';

export function requestPets() {
    return {
        type: REDUX_ACTION_FETCH.REQUEST,
    };
}

export function receivePets(pets) {
    return {
        type: REDUX_ACTION_FETCH.RESPONSE,
        payload: pets,
    };
}

export function fetchPets() {
    return {
        type: REDUX_ACTION_FETCH.ACTION,
    };
}
