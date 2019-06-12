import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actions} from '../store/constants';


class Toolbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <div className="btn-group">
                    <button
                        type="button"
                        className="btn btn-dark">
                        Назад
                    </button>
                    <button
                        type="button"
                        className="btn btn-dark">
                        Вперед
                    </button>
                </div>
                <button
                    onClick={this.props.onOpenBasket}
                    type="button"
                    className="btn btn-success float-right">
                    Корзина
                </button>
            </nav>
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


export default connect(null, mapDispatchToProps)(Toolbar);