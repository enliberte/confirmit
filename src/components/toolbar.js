import React, {Component} from 'react';
import RedoBtn from './platform/redoBtn';
import UndoBtn from './platform/undoBtn';
import BasketBtn from './platform/basketBtn';


export default class Toolbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <div className="btn-group">
                    <UndoBtn />
                    <RedoBtn />
                </div>
                <BasketBtn />
            </nav>
        )
    }
}