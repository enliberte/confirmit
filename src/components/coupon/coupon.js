import React, {Component} from 'react';
import AddCoupon from './addCoupon';
import DeleteCoupon from './deleteCoupon';


export default class Coupon extends Component {
    render() {
        return (
            <div>
                {!this.props.couponAdded &&
                <AddCoupon
                    promo={this.props.promo}
                    onEnterPromo={this.props.onEnterPromo}
                    onApplyPromo={this.props.onApplyPromo}
                />}
                {this.props.couponAdded &&
                <DeleteCoupon
                    discount={this.props.discount}
                    promo={this.props.promo}
                    onDeletePromo={this.props.onDeletePromo}/>
                }
            </div>
        )
    }
}