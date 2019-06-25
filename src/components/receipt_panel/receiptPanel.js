import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actions} from '../../store/constants';
import ReceiptTable from '../receipt_table/receiptTable';
import CloseBtn from '../platform/close_btn/closeBtn';
import PrintBtn from '../platform/print_btn/printBtn';


class ReceiptPanel extends Component {
    render() {
        return (
            <div className="card">
                <div className="card__header">
                    <span className="card__title">Чек</span>
                    <div className="card__header__button__group">
                        <PrintBtn />
                        <CloseBtn onClose={this.props.onClose}/>
                    </div>
                </div>
                <div className="card__content">
                    <ReceiptTable />
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onClose() {
            dispatch({
                type: actions.CLOSE_RECEIPT
            });
        }
    }
};


export default connect(null, mapDispatchToProps)(ReceiptPanel);