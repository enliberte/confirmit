import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actions} from '../store/constants';
import {ActionCreators as UndoActionCreators} from 'redux-undo'


class Toolbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <div className="btn-group">
                    <button
                        onClick={this.props.onUndo}
                        type="button"
                        className="btn btn-outline-success">
                        <img src="../src/img/icons/undo.png" style={{width: '1em', filter: 'invert(100%)'}} alt="Назад"/>
                    </button>
                    <button
                        onClick={this.props.onRedo}
                        type="button"
                        className="btn btn-outline-success">
                        <img src="../src/img/icons/redo.png" style={{width: '1em', filter: 'invert(100%)'}} alt="Вперед"/>
                    </button>
                </div>
                <button
                    onClick={this.props.onOpenBasket}
                    type="button"
                    className="btn btn-success float-right">
                    <img src="../src/img/icons/cart.png" style={{width: '1em'}} alt="Корзина"/>
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
        },
        onUndo() {
            dispatch(UndoActionCreators.undo())
        },
        onRedo() {
            dispatch(UndoActionCreators.redo())
        },
    }
};


export default connect(null, mapDispatchToProps)(Toolbar);