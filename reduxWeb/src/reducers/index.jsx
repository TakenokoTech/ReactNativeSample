/** reducer */
import _ from "lodash"
import { combineReducers } from 'redux';
import { CONST, ACTIONS } from '../constants/index.jsx'

// Reducer
const reducer1 = (state = {}, action = {}) => {
    switch (action.type) {
        case ACTIONS.SEND:
            return _.merge({}, state, { value: action.value });
        default:
            return state;
    }
}
const reducer2 = (state = {}, action) => state;
const reducer3 = (state = {}, action) => state;

// export reducer
export default combineReducers({
    reducer1,
    reducer2,
    reducer3,
});