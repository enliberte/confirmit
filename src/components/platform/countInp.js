import React, {Component} from 'react';


export default class CountInp extends Component {
    render() {
        return (
            <input
                className="form-control w-25"
                style={{textAlign: 'center'}}
                value={this.props.count}
                onChange={this.props.onSetCount}/>
        )
    }
}