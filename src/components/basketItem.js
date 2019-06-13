import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actions} from '../store/constants';
import CouponInp from './platform/couponInp';
import CountInp from './platform/countInp';
import DecrementBtn from './platform/decrementBtn';
import IncrementBtn from './platform/incrementBtn';
import ApplyCouponBtn from './platform/applyCouponBtn';
import DeletePurchaseBtn from './platform/deletePurchaseBtn';
import DeleteCouponBtn from './platform/deleteCouponBtn';


class BasketItem extends Component {
    render() {
        return (
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={this.props.item.data.url} className="card-img p-3"/>
                        <DeletePurchaseBtn purchaseId={this.props.item.purchaseId}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{this.props.item.data.name}</h5>
                            <ul className="list-group list-group-flush">
                                {this.props.item.discount === 0 &&
                                <li className="list-group-item">
                                    <div className="btn-group w-100">
                                        <CouponInp
                                            promo={this.props.item.promo}
                                            onEnterPromo={() => this.props.onApplyPromo(this.props.item.purchaseId)}
                                        />
                                        <ApplyCouponBtn onApplyPromo={this.props.onApplyPromo}/>
                                    </div>
                                </li>}
                                {this.props.item.discount > 0 &&
                                <li className="list-group-item">
                                    Скидка {this.props.item.discount}% по купону "{this.props.item.promo}"
                                    <DeleteCouponBtn
                                        onDeletePromo={() => this.props.onDeletePromo(this.props.item.purchaseId)}
                                    />
                                </li>}
                                <li className="list-group-item">
                                    Цена: {this.props.item.data.price * (100 - this.props.item.discount) / 100} р.
                                    <div className="btn-group float-right">
                                        <DecrementBtn
                                            onDecrement={() => this.props.onDecrement(this.props.item.purchaseId)}
                                        />
                                        <CountInp
                                            count={this.props.item.count}
                                            onSetCount={() => this.props.onSetCount(this.props.item.purchaseId)}
                                        />
                                        <IncrementBtn
                                            onIncrement={() => this.props.onIncrement(this.props.item.purchaseId)}
                                        />
                                    </div>
                                </li>
                                <li className="list-group-item text-right">
                                    Итого: {this.props.item.data.price * (100 - this.props.item.discount) / 100 * this.props.item.count} р.
                                </li>
                            </ul>
                        </div>
                    </div>
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