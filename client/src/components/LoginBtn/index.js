
import React from "react";
import "./style.css";

function LoginBtn(props) {
    return (
        <button className="uk-button uk-button-default login-btn" onClick={ () => props.handleClick({email: props.email, password: props.password})}>
            {props.name}
        </button>
    )
};

export default LoginBtn;