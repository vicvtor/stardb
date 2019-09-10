import React from 'react';
import './header.css';

export default class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-dark">
                <a className="navbar-brand" href="#4">StarDB</a>
                <ul className="nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#1">Planets</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#2">Persons</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#3">Starships</a>
                    </li>
                </ul>
            </nav>
        );
    }
}