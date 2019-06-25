import React, {Component} from 'react';
import {connect} from 'react-redux';
import Item from '../item/item';
import './itemsList.module.css'


class ItemsList extends Component {
    render() {
        return (
            <div className="items_row">
                {this.props.items.map(
                    item => <Item key={item.id} item={item}/>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items.present
    }
};


export default connect(mapStateToProps)(ItemsList);