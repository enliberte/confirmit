import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actions} from '../../store/constants';
import BasketItem from '../basket_item/basketItem';
import CloseBtn from '../platform/close_btn/closeBtn';
import ReceiptBtn from '../platform/receipt_btn/receiptBtn';
import Coupon from "../coupon/coupon";
import './basket.module.css';


class Basket extends Component {
    render() {
        return (
            <div className="card">
                <div className="card__header">
                    <span className="card__title">Корзина</span>
                    <div className="card__header__button__group">
                        {this.props.items.length > 0 && <ReceiptBtn />}
                        <CloseBtn onClose={this.props.onClose}/>
                    </div>
                </div>
                <div className="card__content">
                    {this.props.items.length > 0 && this.props.items.map(
                        item => <BasketItem key={item.purchaseId} item={item}/>
                    )}
                    {this.props.items.length === 0 && <span className="empty__basket">Корзина пуста</span>}
                </div>
                <div className="card__footer">
                    {this.props.items.length > 0 &&
                    <Coupon
                        couponAdded={this.props.discount !== 0}
                        promo={this.props.promo}
                        onEnterPromo={this.props.onEnterPromo}
                        onApplyPromo={this.props.onApplyPromo}
                        onDeletePromo={this.props.onDeletePromo}
                    />}
                    {this.props.items.length > 0 && <span className="card__total">Итого: {this.props.total} р.</span>}
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        promo: state.basket.present.promo,
        discount: state.basket.present.discount,
        items: state.basket.present.items,
        total: state.basket.present.items.reduce(
            (total, item) => total + item.count * item.data.price * (100 - item.discount) / 100
        , 0)
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        onClose() {
            dispatch({
                type: actions.CLOSE_BASKET
            });
        },
        onEnterPromo() {
            dispatch({
                type: actions.ENTER_PROMO_ALL,
                payload: event.target.value
            });
        },
        onApplyPromo() {
            dispatch({
                type: actions.APPLY_PROMO_ALL
            });
        },
        onDeletePromo() {
            dispatch({
                type: actions.DELETE_PROMO_ALL
            });
        },
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Basket);