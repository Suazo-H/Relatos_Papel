import React from "react";
import "./Menu.css"
import {Link} from "react-router-dom";

export default function Menu() {

    return (
        <header className="menu">
            <nav className="menu-list">
                <div className="menu-img">
                    {/*Logo barra de menú*/}
                    <img alt="Logo relatos de papel" src="/RelatosPapel.png"/>
                </div>
                <ul>
                    {/*Navegar a la página de inicio y login*/}
                    <li><Link to="/inicio">Inicio</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
                <div className="menu-cart">
                    <button type="button" className="cart-button">
                        <img alt="Carrito de compras" src="/carrito.png"/>
                    </button>
                </div>
            </nav>
        </header>
    );
}