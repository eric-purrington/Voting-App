import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./style.css";

function LogoutButton(props) {
  const { logout } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  return <a className={props.classes} onClick={() => logoutWithRedirect()}>Log Out</a>;

};

export default LogoutButton;