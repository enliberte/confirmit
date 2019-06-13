import React, {Component} from 'react';


export default class CloseBtn extends Component {
    render() {
        return (
            <button
                onClick={this.props.onClose}
                type="button"
                className="btn btn-light">
                <img src="../src/img/icons/close.png" style={{width: '1em'}} alt="Закрыть"/>
            </button>
        )
    }
}