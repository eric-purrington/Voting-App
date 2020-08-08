import React from "react";
import UserAPI from "../../utils/UserAPI"
import "./style.css";

function AddressCard(props) {

    return (
        <div className = "addressCardContainer">
            <div id={props.line1.slice(0, 3)} className="card">
            <div class="uk-animation-toggle" tabindex="0">
                <div class="uk-animation-slide-left">
                <h5>Location: {props.locationName}</h5>
                <h6>Address: {props.line1}</h6>                
                <h6> {props.city} {props.state} {props.zip}</h6>
                </div>
                </div>
                </div>
        </div>
    )
};

export default AddressCard;