import React from "react";
import {Link} from "react-router-dom";
import './Menu.css';

export default function Menu() {

    return (
        <header className="menu">
            <nav className="menu-list">
                <div className="menu-img">
                    <img alt="Logo relatos de papel" src="/RelatosPapel.png"/>
                </div>
                <ul>
                    <li><Link to="/inicio">Inicio</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </header>
    );
}