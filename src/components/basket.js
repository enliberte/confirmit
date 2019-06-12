import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actions} from '../store/constants';
import BasketItem from "./basketItem";


class Basket extends Component {
    render() {
        return (
            <div className="modal-dialog fixed-top modal-dialog-scrollable modal-xl" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Корзина</h5>
                        <button
                            onClick={this.props.onClose}
                            type="button" className="close">
                            <span aria-hidden="true">&times;</span>
                        </button>
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
                                <input
                                    required
                                    className="form-control"
                                    placeholder="Введите купон"
                                    value={this.props.promo}
                                    onChange={this.props.onEnterPromo}/>
                                <button
                                    onClick={this.props.onApplyPromo}
                                    type="button"
                                    className="btn btn-success">
                                    Применить
                                </button>
                            </div>
                        </li>}
                        {this.props.discount > 0 &&
                        <li className="list-group-item mr-auto">
                            Скидка {this.props.discount}% по купону "{this.props.promo}"
                            <button
                                onClick={this.props.onDeletePromo}
                                type="button"
                                className="btn btn-danger ml-5"
                                style={{maxWidth: '2em'}}>
                                x
                            </button>
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
        promo: state.basket.promo,
        discount: state.basket.discount,
        items: state.basket.items,
        total: state.basket.items.reduce(
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
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Basket);
