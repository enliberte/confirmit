import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ActionCreators as UndoActionCreators} from 'redux-undo';


class UndoBtn extends Component {
    render() {
        return (
            <button
                onClick={this.props.onUndo}
                type="button"
                className="btn btn-outline-success">
                <img src="/src/img/icons/undo.png" style={{width: '1em', filter: 'invert(100%)'}} alt="Назад"/>
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