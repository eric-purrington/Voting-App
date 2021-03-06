import React from "react";
import "./style.css";

function OfficialContainer(props) {
    return (
        <div className="uk-grid-match uk-grid-small uk-child-width-1-2@m uk-text-center">
            {props.children}
        </div>
    )
};

export default OfficialContainer;