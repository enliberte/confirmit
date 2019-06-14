import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ActionCreators as UndoActionCreators} from 'redux-undo';


class RedoBtn extends Component {
    render() {
        return (
            <button
                onClick={this.props.onRedo}
                type="button"
                className="btn btn-outline-success">
                <img src="/src/img/icons/redo.png" style={{width: '1em', filter: 'invert(100%)'}} alt="Вперед"/>
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