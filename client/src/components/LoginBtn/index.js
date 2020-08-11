import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./style.css";

function LoginBtn() {

    const { loginWithRedirect } = useAuth0();

<<<<<<< HEAD
    return <button className="uk-button uk-button-default login-btn" onClick={loginWithRedirect}>Log In</button>
    // return !isAuthenticated && (
    //     <button className="uk-button uk-button-default login-btn" onClick={loginWithRedirect(), () => props.handleClick({email: props.email, password: props.password})}>
    //         {props.name}
    //     </button>
    // )
=======
    return <button className="uk-button uk-button-default login-btn" onClick={loginWithRedirect}>Log In</button>    
>>>>>>> 3be0a56b70d4aa6ced62d32844771ce6f8a88c51
};

export default LoginBtn;