import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actions} from '../store/constants';


class Receipt extends Component {
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
                                type="button" className="close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                    <div className="modal-body receipt">
                        <table className="table">
                            <thead className="thead-light">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            </tbody>
                        </table>
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
    receiptIframe.contentWindow.document.body.innerHTML += document.querySelector('.receipt').innerHTML;
    receiptIframe.contentWindow.print();
    document.body.removeChild(receiptIframe);
};


const mapStateToProps = (state) => {
    return {
        promo: state.basket.present.promo,
        discount: state.basket.present.discount,
        items: state.basket.present.items,
        total: state.basket.present.items.reduce(
            (total, item) => total + item.count * item.data.price * (100 - item.discount) / 100
        , 0)
    }
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


export default connect(mapStateToProps, mapDispatchToProps)(Receipt);
