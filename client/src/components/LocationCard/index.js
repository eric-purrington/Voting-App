import React from "react";
import UserAPI from "../../utils/UserAPI"
import "./style.css";

function LocationCard(props) {

    function handleLocationSave() {
        let userID = window.location.pathname.slice(3);
        let body = {
            name: props.name, 
            address: props.address}
        UserAPI.addOfficial(userID, body);
    }

    return (
        <div className="uk-card uk-card-hover uk-card-body">
            <h2 className="uk-card-title locationName">{props.name}</h2>
            <p className="locationAdd">{props.address}</p>
            <p className="locationAdd">{props.distance}</p>
            {props.loggedIn ? <span onClick={handleLocationSave} className="save-location">Save Location to Dash</span> : ""}
        </div>
    )
}

export default LocationCard;