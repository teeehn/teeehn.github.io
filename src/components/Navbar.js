import React from "react";
import Menu_Icon from "./Menu_Icon";

function Navbar ({ children }) {
    return (
        <nav>
            <div className="h-100">
                <input id="main_menu" type="checkbox" className="show" />
                <Menu_Icon />
                {
                    children
                }
            </div>
        </nav>
    );
}

export default Navbar;
