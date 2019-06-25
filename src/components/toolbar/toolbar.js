import React, {Component} from 'react';
import RedoBtn from '../platform/redo_btn/redoBtn';
import UndoBtn from '../platform/undo_btn/undoBtn';
import BasketBtn from '../platform/basket_btn/basketBtn';
import './toolbar.module.css';


export default class Toolbar extends Component {
    render() {
        return (
            <nav>
                <div>
                    <UndoBtn />
                    <RedoBtn />
                </div>
                <BasketBtn />
            </nav>
        )
    }
}