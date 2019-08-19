import AsyncReduxAction from '../../store/AsyncReduxAction';

export const REDUX_NAMESPACE = 'PET';
export const REDUX_ACTION_FETCH = new AsyncReduxAction(`${REDUX_NAMESPACE}_FETCH`);
