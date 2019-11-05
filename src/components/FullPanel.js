import React from "react";
import default_src from "../assets/images/balloon-sunrise.jpg";

function FullPanel ({ image_src = default_src }) {
    return (
        <div className="tn__panel--full" style={{
            backgroundImage: `url(${image_src})`,
            width: "100%",
            paddingBottom: "50%",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }} >
        </div>
    );
}

export default FullPanel;
