import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actions} from '../../store/constants';
import DeletePurchaseBtn from '../platform/delete_purchase_btn/deletePurchaseBtn';
import Coupon from "../coupon/coupon";
import Count from "../count/count";
import './basketItem.module.css';


class BasketItem extends Component {
    render() {
        return (
            <div className="card__body">
                <img className="card__img" src={this.props.item.data.url}/>
                <div className="card__data">
                    <span className="purchase__name">{this.props.item.data.name}</span>
                    <Coupon
                        couponAdded={this.props.item.discount !== 0}
                        discount={this.props.item.discount}
                        promo={this.props.item.promo}
                        onEnterPromo={() => this.props.onEnterPromo(this.props.item.purchaseId)}
                        onApplyPromo={() => this.props.onApplyPromo(this.props.item.purchaseId)}
                        onDeletePromo={() => this.props.onDeletePromo(this.props.item.purchaseId)}
                    />
                    <div className="card__multiply">
                        <span className="card__price">Цена: {this.props.item.data.price * (100 - this.props.item.discount) / 100} р.</span>
                        <Count
                            onDecrement={() => this.props.onDecrement(this.props.item.purchaseId)}
                            count={this.props.item.count}
                            onSetCount={() => this.props.onSetCount(this.props.item.purchaseId)}
                            onIncrement={() => this.props.onIncrement(this.props.item.purchaseId)}
                        />
                    </div>
                    <div className="card__total">
                        Итого: {this.props.item.data.price * (100 - this.props.item.discount) / 100 * this.props.item.count} р.
                    </div>
                    <DeletePurchaseBtn purchaseId={this.props.item.purchaseId}/>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onDecrement(id) {
            dispatch({
                type: actions.DECREMENT_COUNT_IN_BASKET,
                payload: id
            });
        },
        onIncrement(id) {
            dispatch({
                type: actions.INCREMENT_COUNT_IN_BASKET,
                payload: id
            });
        },
        onSetCount(id) {
            dispatch({
                type: actions.SET_COUNT_IN_BASKET,
                payload: {value: event.target.value, id}
            });
        },
        onEnterPromo(id) {
            dispatch({
                type: actions.ENTER_PROMO_IN_BASKET,
                payload: {value: event.target.value, id}
            });
        },
        onApplyPromo(id) {
            dispatch({
                type: actions.APPLY_PROMO_IN_BASKET,
                payload: id
            });
        },
        onDeletePromo(id) {
            dispatch({
                type: actions.DELETE_PROMO_IN_BASKET,
                payload: id
            })
        }
    }
};


export default connect(null, mapDispatchToProps)(BasketItem);