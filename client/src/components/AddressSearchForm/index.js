import React from "react";
import "./style.css";

function AddressSearchForm(props) {
    return (
        <form className="uk-form-horizontal" onSubmit={props.handleAddressChange}>
            <label className="zip-form-label">Search By Address</label>
            <div className="zip-input">
                <div uk-form-custom="target: true">
                    <input className="uk-input uk-form-width-medium zip-input-box" name="address" type="text" placeholder="street city, state zip" />
                </div>
                <button className="uk-button uk-button-default zip-search-btn"><span uk-icon="icon: search; ratio: 1"></span></button>
            </div>
        </form>
    )
};

export default AddressSearchForm;