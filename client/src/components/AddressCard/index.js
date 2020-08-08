import React from "react";
import UserAPI from "../../utils/UserAPI"
import "./style.css";
import PollingInfo from "../PollingInfo"
function AddressCard(props) {

    return (
        <div class="uk-child-width-1-2@s uk-grid-match" uk-grid>
            <div>
                <div class="uk-card uk-card-hover uk-card-body">
                    <h3 class="uk-card-title">Address</h3>
                    <div className="addressCardContainer">
                        <div id={props.line1.slice(0, 3)} className="card">
                            <div class="uk-animation-toggle" tabindex="0">
                                <div class="uk-animation-slide-left">
                                    <h5> {props.locationName}</h5>
                                    <h6>Address: {props.line1},{props.city} ,{props.state}, {props.zip}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AddressCard;