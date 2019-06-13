import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header className="App-header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink to="/"  exact className="navbar-brand" >Tea Shop</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to="/all-teas" className="nav-link" activeClassName="active" >Todos os Chás</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Recomendações
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink to="/recommended" className="dropdown-item" >Para se manter acordado</NavLink>
                                <NavLink to="/xx" className="dropdown-item" >Para ajudar na digestão</NavLink>
                                <NavLink to="/xxx" className="dropdown-item" >Para uso medicinal</NavLink>
                                <NavLink to="/xxxx" className="dropdown-item" >Para acompanhar refeições</NavLink>
                                <NavLink to="/xxxx" className="dropdown-item" >Para tomar com leite</NavLink>
                            </div>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/shopping-cart" className="nav-link" >Carrinho</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
    </header>
);

export default Header;