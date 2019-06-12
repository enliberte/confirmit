import undoable, { distinctState } from 'redux-undo';


const items = (state={}, action) => {
    return state;
};

const undoableItems = undoable(items, {
    filter: distinctState()
});

export default undoableItems;
