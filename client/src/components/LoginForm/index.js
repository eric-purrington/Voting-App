import React, { useState } from "react";
import "./style.css";
import LoginBtn from "../LoginBtn";
import API from "../../utils/API";


function LoginForm(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <form class="uk-form-stacked uk-margin-large">
            <div class="uk-margin">
                <label class="uk-form-label" for="form-horizontal-text">Email</label>
                <div class="uk-form-controls">
                    <input class="uk-input" id="form-horizontal-text" type="text" value={email} onChange={ (e) => setEmail(e.value) }/>
                </div>
            </div>
            <div class="uk-margin">
                <label class="uk-form-label" for="form-horizontal-text">Password</label>
                <div class="uk-form-controls">
                    <input class="uk-input" id="form-horizontal-text" type="text" value={password} onChange={ (e) => setPassword(e.value) }/>
                </div>
            </div>
            <div className="uk-text-center">
                <LoginBtn name="Login" handleClick={API.loginUser} email={email} password={password}/>
            </div>
        </form>
    )
};

export default LoginForm;