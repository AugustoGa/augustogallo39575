import React from "react";
import CartWidget from "./CartWidget";
const NavBar = () => {
    return(
        <div className="mydiv">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid nav-container">
                    
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
                                <a className="nav-link" href="./Paginas/Gases.html">Gases</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./Paginas/Productos.html">Productos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./Paginas/Servicios.html">Servicios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./Paginas/Contacto.html">Contacto</a>
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