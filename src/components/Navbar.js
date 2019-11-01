import React from "react";

function Navbar () {
    return (
        <nav>
            <div className="tn__navbar--inner h-100">
                <span className="brand">Brand</span>

                <input id="main_menu" type="checkbox" className="show" />
                <label htmlFor="main_menu" className="burger pseudo button">menu</label>

                <div className="menu">
                    <a href="#">One</a>
                    <a href="#">Two</a>
                    <a href="#">Three</a>
                </div>  
            </div>
        </nav>
    );
}

export default Navbar;
