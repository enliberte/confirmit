import {actions, promo} from '../constants';
import undoable, { distinctState } from 'redux-undo';


const itemCard = (state={}, action) => {
    switch (action.type) {
        case actions.ADD_ITEM:
            return {
                ...state,
                itemData: action.payload,
                count: 1,
                discount: 0,
                promo: '',
                isDisplayed: true
            };
        case actions.CLOSE_ITEM_CARD:
            return {
                ...state,
                isDisplayed: false
            };
        case actions.DECREMENT_COUNT_IN_CARD:
            return {
                ...state,
                count: state.count > 1 ? state.count - 1 : 1
            };
        case actions.INCREMENT_COUNT_IN_CARD:
            return {
                ...state,
                count: state.count + 1
            };
        case actions.SET_COUNT_IN_CARD:
            return {
                ...state,
                count: +action.payload
            };
        case actions.ENTER_PROMO:
            return {
                ...state,
                promo: action.payload,
            };
        case actions.APPLY_PROMO:
            let appliedDiscount = promo[state.promo] !== undefined ? promo[state.promo] : 0;
            return {
                ...state,
                discount: appliedDiscount
            };
        case actions.DELETE_PROMO:
            return {
                ...state,
                discount: 0,
                promo: ''
            };
        default:
            return state;
    }
};

const undoableItemCard = undoable(itemCard, {
    filter: distinctState()
});

export default undoableItemCard;