import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./style.css";

function LoginBtn(props) {

    const { loginWithRedirect } = useAuth0();

    return <a className={props.classes} onClick={loginWithRedirect}>Log In</a>
};

export default LoginBtn;