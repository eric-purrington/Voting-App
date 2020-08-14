import React from "react";
import "./style.css";

function ShowingResults(props) {
    return (
        <div className="uk-text-center showing-results">
            <p>{props.text} {props.address} </p>
        </div>
    )
};

export default ShowingResults;