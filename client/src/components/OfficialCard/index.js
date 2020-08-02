import React from "react";
import "./style.css";

function OfficialCard(props) {
    return (
        <div>
            <div id={props.party.slice(0, 1)} className="uk-card uk-card-default uk-card-hover uk-card-body officials-card">
                <h2 className="uk-card-title">{props.title}</h2>
                <p className="uk-card-title official-card-info">{props.name}</p>
                <p className="uk-card-title official-card-info">Phone: {props.phone}</p>
                <p className="uk-card-title official-card-info">Email: {props.email}</p>
            </div>
        </div>
    )
};

export default OfficialCard;