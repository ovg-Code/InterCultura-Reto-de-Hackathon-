import React from "react";
import logo from './../../Assets/logo.png'
const Header = () =>{
    return(
        <nav className="Header navbar">
            <div className="navbar-brand">
                <a  href="/" className="navbar-item">
                    <img src={logo} alt="Logo"/>
                </a>
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item">
                        Inicio
                    </a>
                    <a class="navbar-item">
                        Paises
                    </a>
                    <a class="navbar-item">
                        Ayuda
                    </a>
                    <a class="navbar-item">
                        Contacto
                    </a>
                </div>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a class="button">
                            <strong>Inicio de Sesion</strong>
                        </a>
                        <a class="button is-info">
                            Registrarse
                        </a>
                    </div>
                </div>
            </div>
        </nav>

       

    )
}

export default Header