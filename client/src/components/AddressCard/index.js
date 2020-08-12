import React from "react";
import UserAPI from "../../utils/UserAPI"
import "./style.css";
function AddressCard(props) {

    return (
        <div className="uk-child-width-1-2@s uk-grid-match" uk-grid>
            <div className="addressCardContainer">
                <div className="uk-animation-toggle" tabIndex="0">
                    <div className="uk-animation-fade">
                        <h3 className="uk-card-title">Address</h3>
                        <div id={props.line1.slice(0, 3)} className="card">
                            <h5>Location Name: {props.locationName}
                            </h5>
                            <h5>Address: {props.line1} {props.city}, {props.state} {props.zip}
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AddressCard;