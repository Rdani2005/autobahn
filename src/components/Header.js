// Author Daniel Ricardo Sequeira Campos
// ------------------ Libraries and Dependencies --------------------
import React from 'react';
import { NavLink } from 'react-router-dom'
const Header = () => {

    let logo = require('../images/autobahn-logo.png');

    return (
        <header >
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand">
                        <img src={logo} alt="autobahn-logo" width="100" height="auto" />
                    </NavLink>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" className={({ isActive }) => "nav-link " + (isActive ? "active" : "")}>
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/distribuidor" className={({ isActive }) => "nav-link " + (isActive ? "active" : "")}>
                                    Distribuidor
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/taller" className={({ isActive }) => "nav-link " + (isActive ? "active" : "")}>
                                    Taller
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contacto" className={({ isActive }) => "nav-link " + (isActive ? "active" : "")}>
                                    Contacto
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
