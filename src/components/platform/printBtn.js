import React, {Component} from 'react';


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


export default class PrintBtn extends Component {
    render() {
        return (
            <button
                onClick={onPrint}
                type="button"
                className="btn btn-light">
                <img src="../src/img/icons/print.png" style={{width: '1em'}} alt="Чек"/>
            </button>
        )
    }
}