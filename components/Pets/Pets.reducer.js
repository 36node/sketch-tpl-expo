import reducerRegister from '../../store/reducerRegister';
import { REDUX_NAMESPACE, REDUX_ACTION_FETCH} from './Pets.constants';

const initialState = {
    isLoading: false,
    pets: [],
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case REDUX_ACTION_FETCH.REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case REDUX_ACTION_FETCH.RESPONSE: {
            return {
                isLoading: false,
                pets: action.payload,
            };
        }
        default: {
            return state;
        }
    }
}

reducerRegister(REDUX_NAMESPACE, reducer);
