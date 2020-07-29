
import React from "react";
import "./style.css";

function LoginBtn(props) {
    return (
        <button className="uk-button uk-button-default login-btn" onClick={props.onClick}>
            {props.name}
        </button>
    )
};

export default LoginBtn;