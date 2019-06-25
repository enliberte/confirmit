import React, {Component} from 'react';


export default class CloseBtn extends Component {
    render() {
        return (
            <button
                onClick={this.props.onClose}
                type="button"
                className="card__header__button">
                <img src="/src/img/icons/close.png" className="card__header__button__img" alt="Закрыть"/>
            </button>
        )
    }
}