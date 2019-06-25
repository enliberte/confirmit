import React, {Component} from 'react';
import './deleteCouponBtn.module.css';


export default class DeleteCouponBtn extends Component {
    render() {
        return (
            <button
                onClick={this.props.onDeletePromo}
                type="button"
                className="delete_coupon__btn">
                x
            </button>
        )
    }
}