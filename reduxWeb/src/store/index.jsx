/* Store */
import { createStore } from 'redux';
import reducer from '../reducers/index.jsx'

// init
const initialState = {
    value: null,
};

// createStore
export default createStore(reducer, initialState);