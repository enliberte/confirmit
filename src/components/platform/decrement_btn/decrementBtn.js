import React, {Component} from 'react';
import './decrementBtn.module.css';


export default class DecrementBtn extends Component {
    render() {
        return (
            <button
                onClick={this.props.onDecrement}
                type="button"
                className="decrement__btn groupLeft">
                -
            </button>
        )
    }
}