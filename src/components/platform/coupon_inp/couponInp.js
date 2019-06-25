import React, {Component} from 'react';
import './couponInp.module.css';


export default class CouponInp extends Component {
    render() {
        return (
            <input
                className="coupon__inp groupLeft"
                placeholder="Введите купон"
                value={this.props.promo}
                onChange={this.props.onEnterPromo}/>
        )
    }
}