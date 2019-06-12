import {createStore, combineReducers} from 'redux';
import items from './reducers/items';
import addItem from './reducers/addItem';
import basket from './reducers/basket';
import initialState from './initialState';


const store = createStore(
    combineReducers({items, addItem, basket}),
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;