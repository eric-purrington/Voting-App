/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

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
                        {/* <li><Link to="/login" className="nav-item" style={{ color: props.color }}>Login</Link></li>
                        <li><Link to="/signup" className="nav-item" style={{ color: props.color }}>Signup</Link></li> */}
                        <li><Link to="/when" className="nav-item" style={{ color: props.color }}>When</Link></li>
                        <li><Link to="/where" className="nav-item" style={{ color: props.color }}>Where</Link></li>
                        <li><Link to="/who" className="nav-item" style={{ color: props.color }}>Who</Link></li>
                        <li><Link to="/dashboard" className="nav-item" style={{ color: props.color }}>Dashboard</Link></li>
                    </ul>
                    <a className="uk-hidden@m" href="#menu-canvas" uk-toggle="target: #menu-canvas"><span className="menu-icon"
                        uk-icon="icon: menu; ratio: 1.5"></span></a>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;