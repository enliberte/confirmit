import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Toolbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <Link to="/" style={{color: 'white'}}>Главная</Link>
                <div className="btn-group">
                    <button
                        type="button"
                        className="btn btn-dark">
                        Назад
                    </button>
                    <button
                        type="button"
                        className="btn btn-dark">
                        Вперед
                    </button>
                    <Link to="/basket">
                        <button
                            type="button"
                            className="btn btn-dark">
                            Корзина
                        </button>
                    </Link>
                </div>
            </nav>
        )
    }
}


export default Toolbar;