import React, {Component} from 'react';


export default class IncrementBtn extends Component {
    render() {
        return (
            <button
                onClick={this.props.onIncrement}
                type="button"
                className="btn btn-success"
                style={{maxWidth: '2em'}}>
                +
            </button>
        )
    }
}