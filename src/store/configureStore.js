import { combineReducers, createStore, compose } from 'redux';
import coinsReducer from './reducers/coins';

const rootReducer = combineReducers({
    coin: coinsReducer
});

let composeEnhancers = compose;

if(__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(rootReducer, composeEnhancers());
};

export default configureStore;