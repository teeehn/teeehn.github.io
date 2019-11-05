import React from "react";
import logo from "../assets/images/tn-logo-160x104.png";

function Brand () {
    return (
        <div className="brand p-0 h-100 py-2">
            <img className="h-100" src={logo} alt="teeehn logo" />
        </div>
    );
}

export default Brand;
