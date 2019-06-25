import React, {Component} from 'react';
import {actions} from '../../../store/constants';
import {connect} from 'react-redux';
import './moveToBasketBtn.module.css';


class MoveToBasketBtn extends Component {
    render() {
        return (
            <button
                onClick={() => this.props.onMoveToBasket(this.props.item)}
                type="button"
                className="move_to_basket__btn">
                Добавить в корзину
            </button>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onMoveToBasket(item) {
            dispatch({
                type: actions.MOVE_TO_BASKET,
                payload: item
            });
            dispatch({
                type: actions.CLOSE_ITEM_CARD
            });
        }
    }
};


export default connect(null, mapDispatchToProps)(MoveToBasketBtn);