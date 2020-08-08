import React from "react";
import UserAPI from "../../utils/UserAPI"
import "./style.css";

function AddressCard(props) {

    return (
        <div className = "addressCardContainer">
            <div id={props.line1.slice(0, 3)} className="card">
                <p>Location: {props.locationName}</p>
                <p>Address: {props.line1}</p>                
                <p> {props.city} {props.state} {props.zip}</p>
            </div>
        </div>
    )
};

export default AddressCard;