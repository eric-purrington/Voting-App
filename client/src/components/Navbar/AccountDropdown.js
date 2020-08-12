/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import LoginBtn from "../LoginBtn";
import Logout from "../Logout";

function AccountDropdown(props) {

    return (
        <div uk-dropdown="mode: click">
            <ul className="uk-nav uk-dropdown-nav">
                <li><Link className="drop-item" to="/dashboard">Dashboard</Link></li>
                <li><LoginBtn classes="drop-item dropdown-login">Signup</LoginBtn></li>
                <li><LoginBtn classes="drop-item dropdown-login">Login</LoginBtn></li>
                <li><Logout classes="drop-item" /></li>
            </ul>
        </div>
    )
};

export default AccountDropdown;