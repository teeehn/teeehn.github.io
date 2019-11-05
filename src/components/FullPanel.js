import React from "react";
import default_src from "../assets/images/balloon-sunrise.jpg";

function FullPanel ({ image_src = default_src }) {
    return (
        <div className="tn__panel--full" style={{
            backgroundImage: `url(${image_src})`
        }} >
            <div className="tn__panel--text-overlay text-light text-center">
                <h1 className="p-0 text-nowrap tn__panel--overlay-heading">Test Panel Title</h1>
                <p className="tn__panel--overlay-paragraph">Lorem ipsum dolor sit amet.</p>
                <button>Take Action!</button>
            </div>
        </div>
    );
}

export default FullPanel;
