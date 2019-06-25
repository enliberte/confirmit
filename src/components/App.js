import React, {Component} from 'react';
import Toolbar from './toolbar/toolbar';
import ItemsList from './items_list/itemsList';
import ItemCard from './item_card/itemCard';
import Basket from './basket/basket';
import Receipt from './receipt_panel/receiptPanel';
import {connect} from 'react-redux';
import './css/main.css';


class App extends Component {
    render() {
        return (
            <div className="container">
                <Toolbar />
                <ItemsList />
                {this.props.itemCardIsDisplayed && <ItemCard />}
                {this.props.basketIsOpened && <Basket />}
                {this.props.receiptIsOpened && <Receipt />}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        itemCardIsDisplayed: state.addItem.present.isDisplayed,
        basketIsOpened: state.basket.present.isDisplayed,
        receiptIsOpened: state.receipt.present.isDisplayed
    }
};


export default connect(mapStateToProps)(App);