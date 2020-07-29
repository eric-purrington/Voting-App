import React from "react";
import "./style.css";
import LoginBtn from "../LoginBtn";

function LoginForm(props) {
    return (
        <form class="uk-form-stacked uk-margin-large">
            <div class="uk-margin">
                <label class="uk-form-label" for="form-horizontal-text">Email</label>
                <div class="uk-form-controls">
                    <input class="uk-input" id="form-horizontal-text" type="text" />
                </div>
            </div>
            <div class="uk-margin">
                <label class="uk-form-label" for="form-horizontal-text">Password</label>
                <div class="uk-form-controls">
                    <input class="uk-input" id="form-horizontal-text" type="text" />
                </div>
            </div>
            <div className="uk-text-center">
                <LoginBtn name="Login" />
            </div>
        </form>
    )
};

export default LoginForm;