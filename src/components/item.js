import React, {Component} from 'react';
import {connect} from 'react-redux';


class Item extends Component {
    render() {
        return (
            <div className="col-md-4">
                <div className="card mt-3">
                    <div className="card-header">
                        {this.props.item.name}
                        <button type="button" className="btn btn-success float-right">+</button>
                    </div>
                    <img src={this.props.item.url}/>
                    <div className="card-block">
                        <p className="card-text">{this.props.item.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {

    }
};


export default connect(null, mapDispatchToProps)(Item);



