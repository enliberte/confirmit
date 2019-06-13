import React, {Component} from 'react';
import {actions} from '../../store/constants';
import {connect} from "react-redux";


class DeletePurchaseBtn extends Component {
    render() {
        return (
            <button
                onClick={() => this.props.onDeleteItem(this.props.purchaseId)}
                type="button"
                className="btn btn-danger btn-block ml-3 mb-3 mr-auto">
                Удалить
            </button>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteItem(id) {
            dispatch({
                type: actions.DELETE_ITEM,
                payload: id
            })
        }
    }
};


export default connect(null, mapDispatchToProps)(DeletePurchaseBtn);