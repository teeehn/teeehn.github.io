import React from "react";

function Navbar ({ children }) {
    return (
        <nav className="p-0">
            <div className="tn__site-content--inner h-100">
                <input id="main_menu" type="checkbox" className="show" />
                <label htmlFor="main_menu" className="burger pseudo button">menu</label>
                {
                    children
                }
            </div>
        </nav>
    );
}

export default Navbar;
