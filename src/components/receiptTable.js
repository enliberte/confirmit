import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReceiptItem from './receiptItem';


class ReceiptTable extends Component {
    render() {
        return (
            <table className="table receipt">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">Наименование</th>
                        <th scope="col">Цена, р.</th>
                        <th scope="col">Купон</th>
                        <th scope="col">Скидка, %</th>
                        <th scope="col">Итоговая цена, р.</th>
                        <th scope="col">Количество, ед.</th>
                        <th scope="col">Итого, р.</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.items.map(
                        item => <ReceiptItem key={item.id} item={item}/>
                    )}
                    <tr>
                        <td colspan="6">Итого:</td>
                        <td>{this.props.total}</td>
                    </tr>
                </tbody>
            </table>
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


export default connect(mapStateToProps)(ReceiptTable);