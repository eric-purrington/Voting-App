import React from "react";
import "./style.css";

function LoginContainer(props) {
    return (
        <div className="uk-container login-container">
            <div class="uk-card uk-card-default uk-card-large uk-card-body login-card">
                <div className="uk-text-center">
                    <h1 className="login-title">{props.name}</h1>
                </div>
                {props.children}
            </div>
        </div>
    )
};

export default LoginContainer;