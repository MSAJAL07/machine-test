import {createStore} from 'redux';
import bookReducer from '../reducer/book';
import Books from '../../data'

const store = createStore(bookReducer,Books,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log('dddd',store.getState())
export default store;