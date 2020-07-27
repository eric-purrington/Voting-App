import React from "react";
import "./style.css";

function HomeHeader() {
    return (
        <div className="uk-container">
            <div className="uk-text-center">
                <div id="title-container">
                    <h1 className="uk-heading-medium" id="homepage-title" style={{ margin: 0 }}>Vote Goat</h1>
                    <h5 className="uk-text-lighter subtitle" id="homepage-sub">Voting Made Simple</h5>
                </div>
            </div>
        </div>
    )
};

export default HomeHeader;