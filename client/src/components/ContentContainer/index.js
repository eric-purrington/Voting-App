import React from "react";
import "./style.css";

function ContentContainer(props) {
    return (
        <div className="uk-container content-container" style={{ minHeight: 400 }}>
            {props.children}
        </div>
    )
};

export default ContentContainer;