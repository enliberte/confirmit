import React, {Component} from 'react';


export default class DecrementBtn extends Component {
    render() {
        return (
            <button
                onClick={this.props.onDecrement}
                type="button"
                className="btn btn-success ml-auto"
                style={{maxWidth: '2em'}}>
                -
            </button>
        )
    }
}