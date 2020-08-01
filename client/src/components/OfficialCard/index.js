import React from "react";
import "./style.css";

function OfficialCard(props) {
    return (
        <div>
            <div id={props.party.slice(0, 1)} className="uk-card uk-card-default uk-card-hover uk-card-body">
                <h2 className="uk-card-title">{props.title}</h2>
                <p className="uk-card-title">{props.name}</p>
                <p className="uk-card-title">Phone: {props.phone}</p>
                <p className="uk-card-title">Email: {props.email}</p>
            </div>
        </div>
    )
};

export default OfficialCard;