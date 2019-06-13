import {actions} from '../constants';
import undoable, { distinctState } from 'redux-undo';


const receipt = (state={}, action) => {
    switch (action.type) {
        case actions.OPEN_RECEIPT:
            return {
                ...state,
                isDisplayed: true
            };
        case actions.CLOSE_RECEIPT:
            return {
                ...state,
                isDisplayed: false
            };
        default:
            return state;
    }
};

const undoableReceipt = undoable(receipt, {
    filter: distinctState()
});

export default undoableReceipt;
