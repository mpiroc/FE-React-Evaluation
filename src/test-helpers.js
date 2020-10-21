import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

export function createEmptyStore() {
    return createStore(
        reducer,
        compose(
            applyMiddleware(thunk)
        )
    );
}
