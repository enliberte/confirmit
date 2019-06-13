import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actions} from '../store/constants';
import ReceiptTable from './receiptTable';
import CloseBtn from './platform/closeBtn';
import PrintBtn from './platform/printBtn';


class ReceiptPanel extends Component {
    render() {
        return (
            <div className="modal-dialog fixed-top mt-5 modal-dialog-scrollable modal-xl" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Чек</h5>
                        <div className="btn-group">
                            <PrintBtn />
                            <CloseBtn onClose={this.props.onClose}/>
                        </div>
                    </div>
                    <div className="modal-body">
                        <ReceiptTable />
                    </div>
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