import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actions} from '../../store/constants';


class BasketBtn extends Component {
    render() {
        return (
            <button
                onClick={this.props.onOpenBasket}
                type="button"
                className="btn btn-success float-right">
                <img src="../src/img/icons/cart.png" style={{width: '1em'}} alt="Корзина"/>
            </button>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onOpenBasket() {
            dispatch({
               type: actions.OPEN_BASKET
            });
        }
    }
};


export default connect(null, mapDispatchToProps)(BasketBtn);