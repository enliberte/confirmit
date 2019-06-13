import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actions} from '../store/constants';
import ReceiptTable from './receiptTable';


class ReceiptPanel extends Component {
    render() {
        return (
            <div className="modal-dialog fixed-top mt-5 modal-dialog-scrollable modal-xl" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Чек</h5>
                        <div className="btn-group">
                            <button
                                onClick={onPrint}
                                type="button"
                                className="btn btn-light">
                                <img src="../src/img/icons/print.png" style={{width: '1em'}} alt="Чек"/>
                            </button>
                            <button
                                onClick={this.props.onClose}
                                type="button"
                                className="btn btn-light">
                                <img src="../src/img/icons/close.png" style={{width: '1em'}} alt="Закрыть"/>
                            </button>
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


const onPrint = () => {
    let receiptIframe = document.createElement('iframe');
    receiptIframe.width = 0;
    receiptIframe.height = 0;
    document.body.appendChild(receiptIframe);
    receiptIframe.contentWindow.document.body.innerHTML = document.querySelector('style').outerHTML;
    receiptIframe.contentWindow.document.body.innerHTML += '<style>@page { size: auto;  margin: 3mm; }</style>';
    receiptIframe.contentWindow.document.body.innerHTML += document.querySelector('.receipt').outerHTML;
    receiptIframe.contentWindow.print();
    document.body.removeChild(receiptIframe);
};


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
