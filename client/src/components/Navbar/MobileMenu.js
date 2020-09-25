/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import Logout from "../Logout";
import "./style.css";
import LoginBtn from "../LoginBtn";

function MobileMenu(props) {
    return (
        <div id="menu-canvas" uk-offcanvas="overlay: true">
            <div className="uk-offcanvas-bar">
                <button className="uk-offcanvas-close" type="button" uk-close="true"></button>
                <ul className="uk-list">
                    <li><Link to="/" className="nav-item mobile-nav-item" style={{ color: props.color }}>Home</Link></li>
                    <li><a uk-toggle="target: #about-canvas" className="nav-item mobile-nav-item" style={{ color: props.color }}>About</a></li>
                    <li><Link to="/when" className="nav-item mobile-nav-item" style={{ color: props.color }}>When</Link></li>
                    <li><Link to="/where" className="nav-item mobile-nav-item" style={{ color: props.color }}>Where</Link></li>
                    <li><Link to="/who" className="nav-item mobile-nav-item" style={{ color: props.color }}>Who</Link></li>
                    <li><Link to="/what" className="nav-item mobile-nav-item" style={{ color: props.color }}>What</Link></li>
                    <li className="uk-nav-header">My Account</li>
                    <li><Link to="/dashboard" className="nav-item mobile-nav-item" style={{ color: props.color }}>Dashboard</Link></li>
                    <li><LoginBtn classes="nav-item mobile-nav-item">Signup</LoginBtn></li>
                    <li><LoginBtn classes="nav-item mobile-nav-item">Login</LoginBtn></li>
                    <li><Logout classes="nav-item mobile-nav-item" /></li>
                </ul>
            </div>
        </div>
    )
};

export default MobileMenu;