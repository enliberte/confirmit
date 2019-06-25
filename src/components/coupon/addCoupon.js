import React, {Component} from 'react';
import CouponInp from '../platform/coupon_inp/couponInp';
import ApplyCouponBtn from '../platform/apply_coupon_btn/applyCouponBtn';
import './coupon.module.css';


export default class AddCoupon extends Component {
    render() {
        return (
            <div className="coupon">
                <CouponInp promo={this.props.promo} onEnterPromo={this.props.onEnterPromo}/>
                <ApplyCouponBtn onApplyPromo={this.props.onApplyPromo}/>
            </div>
        )
    }
}