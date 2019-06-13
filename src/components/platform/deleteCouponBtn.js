import React, {Component} from 'react';


export default class DeleteCouponBtn extends Component {
    render() {
        return (
            <button
                onClick={this.props.onDeletePromo}
                type="button"
                className="btn btn-danger ml-5 float-right"
                style={{maxWidth: '2em'}}>
                x
            </button>
        )
    }
}