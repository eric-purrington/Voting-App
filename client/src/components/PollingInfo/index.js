import React from "react";
import "./style.css";

function PollingInfo(props) {
    return (

        <div className="uk-child-width-1-2@s uk-grid-match" uk-grid>
            <div className="PollingInfoContainer">
                <div className="uk-animation-toggle" tabIndex="0">
                    <div className="uk-animation-fade">
                        <h3 className="uk-card-title">Election Info</h3>
                        <div id={props.name.slice(0, 3)} className="card">

                        <h5>Election name: {props.name}</h5>
                        <h5>Election Info URL: {props.electionInfoUrl}</h5>
                        <h5>Ballot URL: {props.ballotInfoUrl}</h5>
                        <h5> Registration URL: {props.electionRegistrationUrl}</h5>
                        <h5> Registration Confirmation URL: {props.electionRegistrationConfirmationUrl}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PollingInfo;
