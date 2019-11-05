import React from "react";
import MenuIcon from "./MenuIcon";

function Navbar ({ children }) {
    return (
        <nav>
            <div className="h-100">
                <input id="main_menu" type="checkbox" className="show" />
                <MenuIcon />
                {
                    children
                }
            </div>
        </nav>
    );
}

export default Navbar;
