import React, {Component} from 'react';
import {actions} from '../../../store/constants';
import {connect} from "react-redux";
import './deletePurchaseBtn.module.css';


class DeletePurchaseBtn extends Component {
    render() {
        return (
            <button
                onClick={() => this.props.onDeleteItem(this.props.purchaseId)}
                type="button"
                className="delete__purchase__btn">
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