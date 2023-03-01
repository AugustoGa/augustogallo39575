import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "../Styles/Styles.css"
import Logo from "./logo";

const NavBar = () => {
    return(
            <div className="mydiv">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid nav-container">
                        {Logo}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav">
                                <li class="nav-item">
                                    <a className="nav-link" href="./index.html">Inicio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="">Discos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="">Productos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href=".">Nosotoros</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="">Contacto</a>
                                </li>
                                <button>
                                <CartWidget/>
                                </button>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
    );
}
export default NavBar;
/* otra forma
<CartWidget item = {<span>3</span>}/>
*/