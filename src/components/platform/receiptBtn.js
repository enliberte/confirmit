import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actions} from '../../store/constants';


class ReceiptBtn extends Component {
    render() {
        return (
            <button
                onClick={this.props.onOpenReceipt}
                type="button"
                className="btn btn-light">
                <img src="/src/img/icons/document.png" style={{width: '1em'}} alt="Чек"/>
            </button>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onOpenReceipt() {
            dispatch({
                type: actions.OPEN_RECEIPT
            });
        }
    }
};


export default connect(null, mapDispatchToProps)(ReceiptBtn);