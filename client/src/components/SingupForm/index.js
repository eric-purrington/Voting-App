import React from "react";
import "./style.css";
import LoginBtn from "../LoginBtn";

function SignupForm(props) {
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
            <div class="uk-margin">
                <label class="uk-form-label" for="form-horizontal-text">Zip Code</label>
                <div class="uk-form-controls">
                    <input class="uk-input" id="form-horizontal-text" type="text" />
                </div>
            </div>
            <div className="uk-text-center">
                <LoginBtn name="Sign Up" />
            </div>
        </form>
    )
};

export default SignupForm;