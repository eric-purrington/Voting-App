import React from "react";
import "./style.css";
import LoginBtn from "../LoginBtn";
import AddressInputForm from "../AddressInputForm";
import UserAPI from "../../utils/UserAPI";

function SignupForm(props) {

    const onSubmit = (event) => {
        event.preventDefault();
        let newUser = {
            email: event.target.signupEmail.value,
            password: event.target.signupPassword.value,
            homeAddress:
                `${event.target.signupAddress.value} ${event.target.signupCity.value} ${event.target.singupState.value} ${event.target.signupZip.value}`,
        };
        console.log(newUser);
        UserAPI.addUser(newUser)
            .then(res => {
                console.log(res.data);
                window.location.href = "/";
            })
            .catch(err => console.log(err));
    };

    return (
        <form className="uk-form-stacked uk-margin-large" onSubmit={onSubmit}>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="form-horizontal-text">Email</label>
                <div className="uk-form-controls">
                    <input className="uk-input" id="signupEmail" type="text" />
                </div>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="form-horizontal-text">Password</label>
                <div className="uk-form-controls">
                    <input className="uk-input" id="signupPassword" type="text" />
                </div>
            </div>
            <AddressInputForm />
            <div className="uk-text-center">
                <button className="uk-button uk-button-default login-btn">Sign Up</button>
            </div>
        </form>
    )
};

export default SignupForm;