import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actions} from '../store/constants';


class Item extends Component {
    render() {
        return (
            <div
                className="card text-center mt-3 p-3"
                style={{cursor: 'pointer'}}
                onClick={() => this.props.onAddItem(this.props.item)}>
                <div className="card-header">{this.props.item.name}</div>
                <img className="card-img-bottom" src={this.props.item.url}/>
                <div className="card-footer">{this.props.item.price} р.</div>
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