import {actions, promo} from "../constants";
import {v4} from 'uuid'


export default (state={}, action) => {
    switch (action.type) {
        case actions.MOVE_TO_BASKET:
            action.payload.purchaseId = v4();
            const addedBefore = state.items.some(
                item => item.data.id === action.payload.data.id && item.discount === action.payload.discount
            );
            if (addedBefore) {
                return {
                    ...state,
                    items: state.items.map(
                        item => {
                            if (item.data.id === action.payload.data.id && item.discount === action.payload.discount) {
                                return {...item, count: item.count + action.payload.count}
                            }
                            return item;
                        }
                    )
                }
            }
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case actions.OPEN_BASKET:
            return {
                ...state,
                isDisplayed: true
            };
        case actions.CLOSE_BASKET:
            return {
                ...state,
                isDisplayed: false
            };
        case actions.DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.purchaseId !== action.payload)
            };
        case actions.DECREMENT_COUNT_IN_BASKET:
            return {
                ...state,
                items: state.items.map(
                    item => {
                        if (item.purchaseId === action.payload && item.count > 1) {
                            return {...item, count: item.count - 1}
                        }
                        return item;
                    }
                )
            };
        case actions.INCREMENT_COUNT_IN_BASKET:
            return {
                ...state,
                items: state.items.map(
                    item => {
                        if (item.purchaseId === action.payload) {
                            return {...item, count: item.count + 1}
                        }
                        return item;
                    }
                )
            };
        case actions.SET_COUNT_IN_BASKET:
            return {
                ...state,
                items: state.items.map(
                    item => {
                        if (item.purchaseId === action.payload.id) {
                            return {...item, count: action.payload.value}
                        }
                        return item;
                    }
                )
            };
        case actions.ENTER_PROMO_IN_BASKET:
            return {
                ...state,
                items: state.items.map(
                    item => {
                        if (item.purchaseId === action.payload.id) {
                            return {...item, promo: action.payload.value}
                        }
                        return item;
                    }
                )
            };
        case actions.APPLY_PROMO_IN_BASKET:
            return {
                ...state,
                items: state.items.map(
                    item => {
                        if (item.purchaseId === action.payload) {
                            const appliedPurchaseDiscount = promo[item.promo] !== undefined ? promo[item.promo] : 0;
                            return {...item, discount: appliedPurchaseDiscount}
                        }
                        return item;
                    }
                )
            };
        case actions.DELETE_PROMO_IN_BASKET:
            const purchase = state.items.filter(
                item => item.purchaseId === action.payload
            );
            const id = purchase[0].data.id;
            const count = purchase[0].count;
            const isItemWithoutDiscount = state.items.some(
                item => item.data.id === id && item.discount === 0
            );
            if (isItemWithoutDiscount) {
                return {
                    ...state,
                    items: state.items
                        .map(
                            item => {
                                if (item.data.id === id && item.discount === 0) {
                                    return {...item, count: item.count + count}
                                }
                                return item;
                            }
                        )
                        .filter(
                            item => item.purchaseId !== action.payload
                        )
                }
            }
            return {
                ...state,
                items: state.items.map(
                    item => {
                        if (item.purchaseId === action.payload) {
                            return {...item, discount: 0, promo: ''}
                        }
                        return item;
                    }
                )
            };
        case actions.ENTER_PROMO_ALL:
            return {
                ...state,
                promo: action.payload,
            };
        case actions.APPLY_PROMO_ALL:
            const appliedBasketDiscount = promo[state.promo] !== undefined ? promo[state.promo] : 0;
            let newItems = [];
            let filtered = [];
            for (let item of state.items) {
                let itemId = item.data.id;
                if (filtered.indexOf(itemId) === -1) {
                    filtered.push(itemId);
                    const newItem = {
                        ...item,
                        promo: state.promo,
                        discount: appliedBasketDiscount,
                        count: state.items.reduce(
                            (totalCount, currentItem) => {
                                const currentCount = currentItem.data.id === itemId ? currentItem.count : 0;
                                return totalCount + currentCount;
                            }, 0)
                    };
                    newItems.push(newItem);
                }
            }
            return {
                ...state,
                items: newItems,
                discount: appliedBasketDiscount
            };
        case actions.DELETE_PROMO_ALL:
            return {
                ...state,
                items: state.items.map(
                    item => ({...item, promo: '', discount: 0})
                ),
                discount: 0,
                promo: ''
            };
        default:
            return state;
    }
}