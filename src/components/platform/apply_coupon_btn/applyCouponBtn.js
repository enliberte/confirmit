import React, {Component} from 'react';
import './applyCouponBtn.module.css';


export default class ApplyCouponBtn extends Component {
    render() {
        return (
            <button
                onClick={this.props.onApplyPromo}
                type="button"
                className="apply__coupon__btn groupRight">
                Применить
            </button>
        )
    }
}