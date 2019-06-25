import React, {Component} from 'react';


const onPrint = () => {
    let receiptIframe = document.createElement('iframe');
    receiptIframe.width = 0;
    receiptIframe.height = 0;
    document.body.appendChild(receiptIframe);
    receiptIframe.contentWindow.document.body.innerHTML += '<style>@page { size: auto;  margin: 20mm; }</style>';
    receiptIframe.contentWindow.document.body.innerHTML += document.querySelector('.receipt__table').outerHTML;
    receiptIframe.contentWindow.print();
    document.body.removeChild(receiptIframe);
};


export default class PrintBtn extends Component {
    render() {
        return (
            <button
                onClick={onPrint}
                type="button"
                className="card__header__button">
                <img src="/src/img/icons/print.png" className="card__header__button__img" alt="Чек"/>
            </button>
        )
    }
}