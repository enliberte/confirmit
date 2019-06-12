import React, {Component} from 'react';
import Toolbar from './toolbar';
import ItemsList from './itemsList';
import ItemCard from './itemCard';
import Basket from './basket';
import {connect} from 'react-redux';


class App extends Component {
    render() {
        return (
            <div className="container">
                <Toolbar />
                <ItemsList />
                {this.props.itemCardIsDisplayed && <ItemCard />}
                {this.props.basketIsOpened && <Basket />}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        itemCardIsDisplayed: state.addItem.present.isDisplayed,
        basketIsOpened: state.basket.present.isDisplayed
    }
};


export default connect(mapStateToProps)(App);