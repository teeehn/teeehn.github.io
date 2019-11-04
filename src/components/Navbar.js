import React from "react";

function Navbar () {
    return (
        <nav className="p-0">
            <div className="tn__site-content--inner h-100">
                <span className="brand p-0">Brand</span>

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
