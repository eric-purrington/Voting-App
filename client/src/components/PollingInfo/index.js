import React from "react";
import "./style.css";

function PollingInfo(props) {
    return (

        <div class="uk-child-width-1-2@s uk-grid-match" uk-grid>
            <div className="PollingInfoContainer">
                <div class="uk-animation-toggle" tabindex="0">
                    <div class="uk-animation-fade">
                        <h3 class="uk-card-title">Election Info</h3>
                        <div id={props.name.slice(0, 3)} className="card">

                        <h5>Election name: {props.name}</h5>
                        <h5>Election Info Url: {props.electionInfoUrl}</h5>
                        <h5>Ballot Url : {props.ballotInfoUrl}</h5>
                        <h5> Registration Url: {props.electionRegistrationUrl}</h5>
                        <h5> Registration Confirmation Url: {props.electionRegistrationConfirmationUrl}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PollingInfo;
