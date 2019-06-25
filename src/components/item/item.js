import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actions} from '../../store/constants';
import './item.module.css';


class Item extends Component {
    render() {
        return (
            <div
                className="item_row"
                onClick={() => this.props.onAddItem(this.props.item)}>
                <div className="item_header">{this.props.item.name}</div>
                <img src={this.props.item.url}/>
                <div className="item_footer">{this.props.item.price} р.</div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onAddItem(itemData) {
            dispatch({
                type: actions.ADD_ITEM,
                payload: itemData
            });
        }
    }
};


export default connect(null, mapDispatchToProps)(Item);