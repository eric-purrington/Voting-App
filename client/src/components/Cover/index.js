import React from "react";
import Navbar from "../../components/Navbar/index";
import "./style.css";

function Cover(props) {
    return (
        <div className="uk-cover-container">
            <div className="uk-inline">
                <img src={props.image} alt="voting stickers" />
                <div className="uk-overlay-default uk-position-cover overlay">
                    <Navbar color={"white"} hoverColor={"white-hover"} />
                </div>
                <div className="uk-overlay uk-position-center">
                    <h1 className="header">{props.header}</h1>
                    {props.children}
                </div>
            </div>
        </div>
    )
};

export default Cover;