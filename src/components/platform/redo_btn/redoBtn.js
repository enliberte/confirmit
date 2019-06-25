import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ActionCreators as UndoActionCreators} from 'redux-undo';


class RedoBtn extends Component {
    render() {
        return (
            <button
                onClick={this.props.onRedo}
                type="button"
                className="groupRight">
                <img src="/src/img/icons/redo.png" alt="Вперед"/>
            </button>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onRedo() {
            dispatch(UndoActionCreators.redo())
        },
    }
};


export default connect(null, mapDispatchToProps)(RedoBtn);