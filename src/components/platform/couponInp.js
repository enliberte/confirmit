import React, {Component} from 'react';


export default class CouponInp extends Component {
    render() {
        return (
            <input
                className="form-control"
                placeholder="Введите купон"
                value={this.props.promo}
                onChange={this.props.onEnterPromo}/>
        )
    }
}