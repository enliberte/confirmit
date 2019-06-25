import React, {Component} from 'react';
import DeleteCouponBtn from '../platform/delete_coupon_btn/deleteCouponBtn';
import './coupon.module.css';


export default class DeleteCoupon extends Component {
    render() {
        return (
            <div className="coupon">
                <span className="coupon__title">Скидка {this.props.discount}% по купону "{this.props.promo}"</span>
                <DeleteCouponBtn onDeletePromo={this.props.onDeletePromo}/>
            </div>
        )
    }
}