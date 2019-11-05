import React from "react";

function Navbar ({ children }) {
    return (
        <nav>
            <div className="h-100">
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
