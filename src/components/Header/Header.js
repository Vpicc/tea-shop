import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
    <header className="App-header">
        <div className="container">
            <nav>
                <Link to="/" > Home</Link> |          
                <Link to="/all-teas" > Todos os Chás</Link> |
                <Link to="/recommended" > Recomendações</Link> | 
                <Link to="/shopping-cart"> Carrinho </Link>
            </nav>  
        </div>
    </header>
);

export default Header;