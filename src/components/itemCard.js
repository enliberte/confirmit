import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actions} from '../store/constants';


class ItemCard extends Component {
    render() {
        return (
            <div className="modal-dialog fixed-top mt-5 modal-dialog-scrollable" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{this.props.item.data.name}</h5>
                        <button
                            onClick={this.props.onClose}
                            type="button"
                            className="btn btn-light">
                            <img src="../src/img/icons/close.png" style={{width: '1em'}} alt="Закрыть"/>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="card text-center">
                            <img src={this.props.item.data.url} className="card-img-top p-3"/>
                            <ul className="list-group list-group-flush">
                                {this.props.item.discount === 0 &&
                                <li className="list-group-item">
                                    <div className="btn-group">
                                        <input
                                            required
                                            className="form-control"
                                            placeholder="Введите купон"
                                            value={this.props.item.promo}
                                            onChange={this.props.onEnterPromo}/>
                                        <button
                                            onClick={this.props.onApplyPromo}
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
                                        onClick={this.props.onDeletePromo}
                                        type="button"
                                        className="btn btn-danger float-right"
                                        style={{maxWidth: '2em'}}>
                                        x
                                    </button>
                                </li>}
                                <li className="list-group-item">
                                    Цена: {this.props.item.data.price * (100 - this.props.item.discount) / 100} р.
                                </li>
                                <li className="list-group-item">
                                    <div className="btn-group">
                                        <button
                                            onClick={this.props.onDecrement}
                                            type="button"
                                            className="btn btn-success ml-auto"
                                            style={{maxWidth: '2em'}}>
                                            -
                                        </button>
                                        <input
                                            required
                                            className="form-control w-25"
                                            value={this.props.item.count}
                                            onChange={this.props.onSetCount}/>
                                        <button
                                            onClick={this.props.onIncrement}
                                            type="button"
                                            className="btn btn-success mr-auto"
                                            style={{maxWidth: '2em'}}>
                                            +
                                        </button>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    Итого: {this.props.item.data.price * (100 - this.props.item.discount) / 100 * this.props.item.count} р.
                                </li>
                            </ul>
                        </div>
                        <button
                            onClick={() => this.props.onMoveToBasket(this.props.item)}
                            type="button"
                            className="btn btn-success btn-block mt-3">
                            Добавить в корзину
                        </button>
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
        onAddItem(itemData) {
            dispatch({
                type: actions.ADD_ITEM,
                payload: itemData
            });
        },
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


export default connect(mapStateToProps, mapDispatchToProps)(ItemCard);
