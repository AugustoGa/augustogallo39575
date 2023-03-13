import React from "react";
import CartWidget from "./CartWidget/CartWidget";
import "../Styles/Styles.css"
import Logo from "./Logo";
import { Link } from "react-router-dom";


const NavBar = () => {
    return(
            <div className="mydiv">
                <Logo/>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid nav-container">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav">
                            
                        <Link to="/">
                            <button className="nav-link">Home</button>
                        </Link>
                        <Link to="/category/ternera">
                            <button className="nav-link">Ternera</button>
                        </Link>
                        <Link to="/category/cerdo">
                            <button className="nav-link">Cerdo</button>
                        </Link>
                        <Link to="/category/ave">
                            <button className="nav-link">Ave</button>
                        </Link>
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