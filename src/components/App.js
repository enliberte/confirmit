import React, {Component} from 'react';
import Toolbar from './toolbar';
import ItemsList from './itemsList';
// import Basket from './basket';
import {Router, Route, Link} from 'react-router-dom';
import {createBrowserHistory} from 'history';


const history = createBrowserHistory();


export default class App extends Component {
    render() {
        return (
            <Router history={history}>
                <div className="container">
                    <Toolbar />
                    {/*<Route path="/basket" component={Basket}/>*/}
                    <ItemsList />
                </div>
            </Router>
        );
    }
}