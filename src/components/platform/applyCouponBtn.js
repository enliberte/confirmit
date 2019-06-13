import React, {Component} from 'react';


export default class ApplyCouponBtn extends Component {
    render() {
        return (
            <button
                onClick={this.props.onApplyPromo}
                type="button"
                className="btn btn-success">
                Применить
            </button>
        )
    }
}