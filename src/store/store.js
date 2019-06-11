import {createStore, combineReducers} from 'redux';
import items from './reducers/items';
import initialState from './initialState';


const store = createStore(
    combineReducers({items}),
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;