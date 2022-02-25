import React from 'react';

function Header() {
    return (
        <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center">
                <h1 className="logo me-auto">
                    <a href="#">
                        <img src={process.env.PUBLIC_URL + '/assets/img/logo.png'} width={"100%"} />
                    </a>
                </h1>
                <nav id="navbar" className="navbar order-last order-lg-0">
                    <ul>
                        <li><a className="nav-link scrollto active" href="#hero">Inicio</a></li>
                        <li><a className="nav-link scrollto" href="#about">Nosotros</a></li>
                        <li><a className="nav-link scrollto" href="#services">Servicios</a></li>
                        <li><a className="nav-link scrollto" href="#gallery">Galeria</a></li>
                        <li><a className="nav-link scrollto" href="#contact">Contacto</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>
    )
}

export default Header;