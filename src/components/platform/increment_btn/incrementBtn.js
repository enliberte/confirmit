import React, {Component} from 'react';
import './incrementBtn.module.css';


export default class IncrementBtn extends Component {
    render() {
        return (
            <button
                onClick={this.props.onIncrement}
                type="button"
                className="increment__btn groupRight">
                +
            </button>
        )
    }
}