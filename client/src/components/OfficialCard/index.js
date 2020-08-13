import React from "react";
import UserAPI from "../../utils/UserAPI";
import { useAuth0 } from "@auth0/auth0-react";
import "./style.css";

function OfficialCard(props) {
    const {user} = useAuth0();

    function handleOfficialSave() {
        let body = {
            title: props.title, 
            name: props.name, 
            phone: props.phone, 
            email: props.email,
            party: props.party}
        UserAPI.addOfficial(user.email, body).then(res => console.log("official saved"));
    }

    return (
        <div>
            <div id={props.party.slice(0, 1)} className="uk-card uk-card-default uk-card-hover uk-card-body officials-card">
                {props.loggedIn === true ? <span class="addBtn" onClick={handleOfficialSave} uk-icon="icon: plus-circle"></span> : ""}
                <h2 className="uk-card-title">{props.title}</h2>
                <p className="uk-card-title official-card-info">{props.name}</p>
                <p className="uk-card-title official-card-info">Phone: {props.phone}</p>
                <p className="uk-card-title official-card-info">Email: {props.email}</p>
            </div>
        </div>
    )
};

export default OfficialCard;