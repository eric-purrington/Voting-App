import React from "react";
import "./style.css";
import Navbar from "../Navbar";

function NoMatch() {
    return (
        <div>
            <Navbar />
            <div className="uk-container uk-text-center no-match-container">
                <h1 className="no-match-header">404 Not Found</h1>
            </div>
        </div>
    )
};

export default NoMatch;