
import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Button(props) {
    return (
        <Link to={props.to}>
            <button className="uk-button uk-button-default home-btn">
                {props.name}
            </button>
        </Link >
    )
};

export default Button;