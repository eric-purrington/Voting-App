import React from "react";
import "./style.css";

function WhoCard(props) {
    return (
        <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin dash-card" uk-grid="true">
            <div className="uk-flex-last@s uk-card-media-right uk-cover-container">

            </div>
            <div>
                <div className="uk-card-body uk-text-center">
                    <h3 className="uk-card-title dash-card-title">Who</h3>
                    <hr className="dash-hr" />
                    <p className="dash-card-subtitle">Important People to Remember.</p>
                </div>
            </div>
        </div>
    )
};

export default WhoCard;