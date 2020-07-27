/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function AccountDropdown(props) {

    return (
        <div uk-dropdown="mode: click">
            <ul class="uk-nav uk-dropdown-nav">
                <li><Link className="drop-item" to="/dashboard">Dashboard</Link></li>
                <li><Link className="drop-item" to="/signup">Signup</Link></li>
                <li><Link className="drop-item" to="/login">Login</Link></li>
                <li><Link className="drop-item" to="/logout">Logout</Link></li>
            </ul>
        </div>
    )
};

export default AccountDropdown;