import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./style.css";

function LogoutButton() {
  const { logout } = useAuth0();

  return <button className="logout-btn" onClick={logout}>Log Out</button>;
};

export default LogoutButton;