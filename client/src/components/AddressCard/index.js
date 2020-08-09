import React from "react";
import UserAPI from "../../utils/UserAPI"
import "./style.css";
function AddressCard(props) {

    return (
        <div class="uk-child-width-1-2@s uk-grid-match" uk-grid>
            <div className="addressCardContainer">
                <div class="uk-animation-toggle" tabindex="0">
                    <div class="uk-animation-fade">
                        <h3 class="uk-card-title">Address</h3>
                        <div id={props.line1.slice(0, 3)} className="card">
                            <h5>Location Name: 
                                {props.locationName}
                            </h5>
                            <h5>Address: 
                                {props.line1},{props.city} ,{props.state}, {props.zip}
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AddressCard;