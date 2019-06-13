import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actions} from '../store/constants';
import CloseBtn from './platform/closeBtn';
import CouponInp from './platform/couponInp';
import CountInp from './platform/countInp';
import DecrementBtn from './platform/decrementBtn';
import IncrementBtn from './platform/incrementBtn';
import ApplyCouponBtn from './platform/applyCouponBtn';
import DeleteCouponBtn from './platform/deleteCouponBtn';
import MoveToBasketBtn from './platform/moveToBasketBtn';


class ItemCard extends Component {
    render() {
        return (
            <div className="modal-dialog fixed-top mt-5 modal-dialog-scrollable" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{this.props.item.data.name}</h5>
                        <CloseBtn onClose={this.props.onClose}/>
                    </div>
                    <div className="modal-body">
                        <div className="card text-center">
                            <img src={this.props.item.data.url} className="card-img-top p-3"/>
                            <ul className="list-group list-group-flush">
                                {this.props.item.discount === 0 &&
                                <li className="list-group-item">
                                    <div className="btn-group btn-block">
                                        <CouponInp promo={this.props.item.promo} onEnterPromo={this.props.onEnterPromo}/>
                                        <ApplyCouponBtn onApplyPromo={this.props.onApplyPromo}/>
                                    </div>
                                </li>}
                                {this.props.item.discount > 0 &&
                                <li className="list-group-item">
                                    Скидка {this.props.item.discount}% по купону "{this.props.item.promo}"
                                    <DeleteCouponBtn onDeletePromo={this.props.onDeletePromo}/>
                                </li>}
                                <li className="list-group-item">
                                    <div className="btn-group">
                                        Цена: {this.props.item.data.price * (100 - this.props.item.discount) / 100} р.
                                        <DecrementBtn onDecrement={this.props.onDecrement}/>
                                        <CountInp count={this.props.item.count} onSetCount={this.props.onSetCount}/>
                                        <IncrementBtn onIncrement={this.props.onIncrement}/>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    Итого: {this.props.item.data.price * (100 - this.props.item.discount) / 100 * this.props.item.count} р.
                                </li>
                            </ul>
                        </div>
                        <MoveToBasketBtn item={this.props.item}/>
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
        }
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