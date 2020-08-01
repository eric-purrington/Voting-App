import React from "react";
import "./style.css";

function BackgroundImage(props) {
    return (
        <div className="pic-section" style={{ backgroundImage: `url(${props.image})` }}>
            {props.children}
        </div>
    )
};

export default BackgroundImage;