import { createStore, combineReducers, compose } from 'redux';
import reducer from './reducers/reducer';

const rootReducer = combineReducers({
    root: reducer
});

let composeEnhancers = compose;

if(__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(rootReducer, composeEnhancers());
}
const store = configureStore();
export default store;