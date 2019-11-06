import React from "react";
import Menu_Item from "./Menu_Item";

function Menu ({ items = [] }) {
    return (
        <div className="menu">
            {
                items.map((item, index) => <Menu_Item key={index} { ...item } />)
            }
        </div> 
    ); 
}

export default Menu;
