import React from "react";

function Menu_Item({ 
    link = "#", 
    label = "item"
}) {
    return (
        <a  className="button pseudo" href={link}>{ label }</a>
    );
}

export default Menu_Item;
