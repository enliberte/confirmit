import React, {Component} from 'react';
import './countInp.module.css';


export default class CountInp extends Component {
    render() {
        return (
            <input
                className="count__inp"
                value={this.props.count}
                onChange={this.props.onSetCount}/>
        )
    }
}