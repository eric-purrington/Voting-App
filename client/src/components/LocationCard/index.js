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
        UserAPI.addPollingSite(user.email, body).then(res => console.log("location saved"));
    }

    return (
        <div className="uk-card uk-card-hover uk-card-body">
            {props.loggedIn === true ? <span onClick={handleLocationSave} uk-icon="icon: plus-circle"></span> : ""}
            <h2 className="uk-card-title locationName">{props.name}</h2>
            <p className="locationAdd">{props.address}</p>
            <p className="locationAdd">approx. {props.distance} miles</p>
            
        </div>
    )
}

export default LocationCard;