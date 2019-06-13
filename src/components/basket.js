import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actions} from '../store/constants';
import BasketItem from './basketItem';
import CloseBtn from './platform/closeBtn';
import ReceiptBtn from './platform/receiptBtn';
import CouponInp from './platform/couponInp';
import ApplyCouponBtn from './platform/applyCouponBtn';
import DeleteCouponBtn from './platform/deleteCouponBtn';


class Basket extends Component {
    render() {
        return (
            <div className="modal-dialog fixed-top mt-5 modal-dialog-scrollable modal-xl" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Корзина</h5>
                        <div className="btn-group">
                            {this.props.items.length > 0 && <ReceiptBtn />}
                            <CloseBtn onClose={this.props.onClose}/>
                        </div>
                    </div>
                    <div className="modal-body">
                        {this.props.items.length > 0 && this.props.items.map(
                            item => <BasketItem key={item.purchaseId} item={item}/>
                        )}
                        {this.props.items.length === 0 && <h6 className="text-center">Корзина пуста</h6>}
                    </div>
                    {this.props.items.length > 0 &&
                    <div className="modal-footer">
                        {this.props.discount === 0 &&
                        <li className="list-group-item mr-auto">
                            <div className="btn-group mr-auto">
                                <CouponInp promo={this.props.promo} onEnterPromo={this.props.onEnterPromo}/>
                                <ApplyCouponBtn onApplyPromo={this.props.onApplyPromo} />
                            </div>
                        </li>}
                        {this.props.discount > 0 &&
                        <li className="list-group-item mr-auto">
                            Скидка {this.props.discount}% по купону "{this.props.promo}"
                            <DeleteCouponBtn onDeletePromo={this.props.onDeletePromo}/>
                        </li>}
                        <p>Итого: {this.props.total} р.</p>
                    </div>}
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