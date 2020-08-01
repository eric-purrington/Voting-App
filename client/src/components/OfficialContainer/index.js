import React from "react";
import "./style.css";

function OfficialContainer(props) {
    return (
        <div className="uk-grid-small uk-child-width-1-2@m uk-text-center" uk-grid>
            {props.children}
        </div>
    )
};

export default OfficialContainer;