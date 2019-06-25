import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ActionCreators as UndoActionCreators} from 'redux-undo';
import './undoBtn.module.css';


class UndoBtn extends Component {
    render() {
        return (
            <button
                onClick={this.props.onUndo}
                type="button"
                className="groupLeft">
                <img src="/src/img/icons/undo.png" alt="Назад"/>
            </button>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onUndo() {
            dispatch(UndoActionCreators.undo())
        },
    }
};


export default connect(null, mapDispatchToProps)(UndoBtn);