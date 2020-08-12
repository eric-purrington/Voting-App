import React from "react";
import UserAPI from "../../utils/UserAPI"
import "./style.css";

function OfficialCard(props) {
    //rough estimate of what this will look like
    // function handleOfficialSave() {
    //     if(user) {
    //         let userID = window.location.pathname.slice(3);
    //         let body = {title: props.title, name: props.name, phone: props.phone, email: props.email}
    //         UserAPI.addOfficial(userID, body);
    //     } else {
    //         redirect to login?
    //     }
    // }

    return (
        <div>
            <div id={props.party.slice(0, 1)} className="uk-card uk-card-default uk-card-hover uk-card-body officials-card">
                <h2 className="uk-card-title">{props.title}</h2>
                <p className="uk-card-title official-card-info">{props.name}</p>
                <p className="uk-card-title official-card-info">Phone: {props.phone}</p>
                <p className="uk-card-title official-card-info">Email: {props.email}</p>
                {/* onClick={handleOfficialSave} here */}
                <span className="save-official">Save Official to Dash</span>
            </div>
        </div>
    )
};

export default OfficialCard;