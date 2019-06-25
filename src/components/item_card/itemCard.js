import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actions} from '../../store/constants';
import CloseBtn from '../platform/close_btn/closeBtn';
import MoveToBasketBtn from '../platform/move_to_basket_btn/moveToBasketBtn';
import Coupon from '../coupon/coupon';
import Count from '../count/count';


class ItemCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card__header">
                    <span className="card__title">{this.props.item.data.name}</span>
                    <div className="card__header__button__group">
                        <CloseBtn className="card__header__button" onClose={this.props.onClose}/>
                    </div>
                </div>
                <div className="card__content">
                    <div className="card__body">
                        <img className="card__img" src={this.props.item.data.url}/>
                        <div className="card__data">
                            <Coupon
                                couponAdded={this.props.item.discount !== 0}
                                discount={this.props.item.discount}
                                promo={this.props.item.promo}
                                onEnterPromo={this.props.onEnterPromo}
                                onApplyPromo={this.props.onApplyPromo}
                                onDeletePromo={this.props.onDeletePromo}
                            />
                            <div className="card__multiply">
                                <span className="card__price">Цена: {this.props.price} р.</span>
                                <Count
                                    onDecrement={this.props.onDecrement}
                                    count={this.props.item.count}
                                    onSetCount={this.props.onSetCount}
                                    onIncrement={this.props.onIncrement}
                                />
                            </div>
                            <div className="card__total">
                                Итого: {this.props.item.data.price * (100 - this.props.item.discount) / 100 * this.props.item.count} р.
                            </div>
                            <MoveToBasketBtn item={this.props.item}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        item: {
            data: state.addItem.present.itemData,
            count: state.addItem.present.count,
            discount: state.addItem.present.discount,
            promo: state.addItem.present.promo
        },
        price: state.addItem.present.itemData.price * (100 - state.addItem.present.discount) / 100,
        couponAdded: state.addItem.present.discount !== 0
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        onClose() {
            dispatch({
                type: actions.CLOSE_ITEM_CARD
            });
        },
        onDecrement() {
            dispatch({
                type: actions.DECREMENT_COUNT_IN_CARD
            });
        },
        onIncrement() {
            dispatch({
                type: actions.INCREMENT_COUNT_IN_CARD
            });
        },
        onSetCount() {
            dispatch({
                type: actions.SET_COUNT_IN_CARD,
                payload: event.target.value
            });
        },
        onEnterPromo() {
            dispatch({
                type: actions.ENTER_PROMO,
                payload: event.target.value
            });
        },
        onApplyPromo() {
            dispatch({
                type: actions.APPLY_PROMO
            });
        },
        onDeletePromo() {
            dispatch({
                type: actions.DELETE_PROMO
            })
        },
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ItemCard);