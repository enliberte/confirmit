import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actions} from '../store/constants';


class BasketItem extends Component {
    render() {
        return (
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={this.props.item.data.url} className="card-img p-3"/>
                        <button
                            onClick={() => this.props.onDeleteItem(this.props.item.purchaseId)}
                            type="button"
                            className="btn btn-danger btn-block ml-3 mr-auto">
                            Удалить
                        </button>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{this.props.item.data.name}</h5>
                            <ul className="list-group list-group-flush">
                                {this.props.item.discount === 0 &&
                                <li className="list-group-item">
                                    <div className="btn-group w-100">
                                        <input
                                            required
                                            className="form-control"
                                            placeholder="Введите купон"
                                            value={this.props.item.promo}
                                            onChange={() => this.props.onEnterPromo(this.props.item.purchaseId)}/>
                                        <button
                                            onClick={() => this.props.onApplyPromo(this.props.item.purchaseId)}
                                            type="button"
                                            className="btn btn-success">
                                            Применить
                                        </button>
                                    </div>
                                </li>}
                                {this.props.item.discount > 0 &&
                                <li className="list-group-item">
                                    Скидка {this.props.item.discount}% по купону "{this.props.item.promo}"
                                    <button
                                        onClick={() => this.props.onDeletePromo(this.props.item.purchaseId)}
                                        type="button"
                                        className="btn btn-danger float-right"
                                        style={{maxWidth: '2em'}}>
                                        x
                                    </button>
                                </li>}
                                <li className="list-group-item">
                                    Цена: {this.props.item.data.price * (100 - this.props.item.discount) / 100} р.
                                    <div className="btn-group float-right">
                                        <button
                                            onClick={() => this.props.onDecrement(this.props.item.purchaseId)}
                                            type="button"
                                            className="btn btn-success ml-auto"
                                            style={{maxWidth: '2em'}}>
                                            -
                                        </button>
                                        <input
                                            required
                                            className="form-control w-25"
                                            value={this.props.item.count}
                                            onChange={() => this.props.onSetCount(this.props.item.purchaseId)}/>
                                        <button
                                            onClick={() => this.props.onIncrement(this.props.item.purchaseId)}
                                            type="button"
                                            className="btn btn-success"
                                            style={{maxWidth: '2em'}}>
                                            +
                                        </button>
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
        },
        onDeleteItem(id) {
            dispatch({
                type: actions.DELETE_ITEM,
                payload: id
            })
        }
    }
};


export default connect(null, mapDispatchToProps)(BasketItem);



