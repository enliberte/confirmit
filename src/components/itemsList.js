import React, {Component} from 'react';
import {connect} from 'react-redux';
import Item from './item';


class ItemsList extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.props.items.map(
                        item => (
                            <Item
                                key={item.id}
                                item={item}/>
                        )
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
};


export default connect(mapStateToProps)(ItemsList);