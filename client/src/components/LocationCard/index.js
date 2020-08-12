import React from "react";
import UserAPI from "../../utils/UserAPI";
import { useAuth0 } from "@auth0/auth0-react";
import "./style.css";

function LocationCard(props) {
    const {user} = useAuth0();

    function handleLocationSave() {
        
        let body = {
            name: props.name, 
            address: props.address,
            distance: props.distance}
        UserAPI.addPollingSite(user.email, body);
    }

    return (
        <div className="uk-card uk-card-hover uk-card-body">
            <h2 className="uk-card-title locationName">{props.name}</h2>
            <p className="locationAdd">{props.address}</p>
            <p className="locationAdd">approx. {props.distance} miles</p>
            {props.loggedIn ? <span onClick={handleLocationSave} className="save-location">Save Location to Dash</span> : ""}
        </div>
    )
}

export default LocationCard;