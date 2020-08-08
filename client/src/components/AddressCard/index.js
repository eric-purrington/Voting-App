import React from "react";
import UserAPI from "../../utils/UserAPI"
import "./style.css";

function AddressCard(props) {

    return (
        <div>
            <div id={props.line1.slice(0, 3)} className="uk-card uk-card-default uk-card-hover uk-card-body officials-card">
                <p>Location Name:{props.locationName}</p>
                <p>Address: {props.line1}</p>                
                <p> {props.city}</p>
                <p>State: {props.state}</p>
                <p>Zip: {props.zip}</p>
            </div>
        </div>
    )
};

export default AddressCard;