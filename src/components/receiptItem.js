import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actions} from '../store/constants';


export default class ReceiptItem extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.item.data.name}</td>
                <td>{this.props.item.data.price}</td>
                <td>{this.props.item.promo}</td>
                <td>{this.props.item.discount}</td>
                <td>{this.props.item.data.price * (100 - this.props.item.discount) / 100}</td>
                <td>{this.props.item.count}</td>
                <td>{this.props.item.data.price * (100 - this.props.item.discount) / 100 * this.props.item.count}</td>
            </tr>
        )
    }
}
