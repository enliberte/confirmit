import React, {Component} from 'react';
import DecrementBtn from "../platform/decrement_btn/decrementBtn";
import CountInp from "../platform/count_inp/countInp";
import IncrementBtn from "../platform/increment_btn/incrementBtn";
import './count.module.css';


export default class Count extends Component {
    render() {
        return (
            <div className="count">
                <DecrementBtn onDecrement={this.props.onDecrement}/>
                <CountInp count={this.props.count} onSetCount={this.props.onSetCount}/>
                <IncrementBtn onIncrement={this.props.onIncrement}/>
            </div>
        )
    }
}