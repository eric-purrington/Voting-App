/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import AccountDropdown from "./AccountDropdown";

const style = {
    navbar: {
        backgroundColor: "transparent"
    },
};

function Navbar(props) {

    return (
        <div>
            <nav className="uk-navbar-container uk-navbar navbar" style={style.navbar}>
                <div className="uk-navbar-left">
                    <ul className="uk-navbar-nav uk-visible@m">
                        <li><Link to="/" className="nav-item" style={{ color: props.color }}>Home</Link></li>
                        <li><a uk-toggle="target: #about-canvas" className="nav-item" style={{ color: props.color }}>About</a></li>
                        <li><Link to="/when" className="nav-item" style={{ color: props.color }}>When</Link></li>
                        <li><Link to="/where" className="nav-item" style={{ color: props.color }}>Where</Link></li>
                        <li><Link to="/who" className="nav-item" style={{ color: props.color }}>Who</Link></li>
                    </ul>
                    <a className="uk-hidden@m" href="#menu-canvas" uk-toggle="target: #menu-canvas"><span className="menu-icon"
                        uk-icon="icon: menu; ratio: 1.5"></span></a>
                </div>
                <div className="uk-navbar-right uk-visible@m">
                    <button className="uk-button uk-button-default my-account-btn nav-item" type="button" style={{ color: props.color }}>My Account</button>
                    <AccountDropdown />
                </div>
            </nav>
        </div>
    )
};

export default Navbar;