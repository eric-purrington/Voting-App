import React from "react";
import "./style.css";

function PollingInfo(props) {
    return (

        <div class="uk-child-width-1-2@s uk-grid-match" uk-grid>
            <div>
                <div class="uk-card uk-card-hover uk-card-body">
                    <h3 class="uk-card-title">Election Info</h3>
                    <div className="PollingInfoContainer">
                        <div id={props.name.slice(0, 3)} className="card">
                            <div class="uk-animation-toggle" tabindex="0">
                                <div class="uk-animation-slide-left">
                                    <p>Election name: {props.name}</p>
                                    <p>Election Info Url: {props.electionInfoUrl}</p>
                                    <p>Ballot Url : {props.ballotInfoUrl}</p>
                                    <p> Registration Url: {props.electionRegistrationUrl}</p>
                                    <p> Registration Confirmation Url: {props.electionRegistrationConfirmationUrl}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PollingInfo;
