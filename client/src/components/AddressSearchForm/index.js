import React from "react";
import "./style.css";

function AddressSearchForm() {
    return (
        <div>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="form-horizontal-text">Street Address : </label>
                <div className="uk-form-controls">
                    <input className="uk-input" id="pollingAddress" type="text" />
                </div>
            </div>
        </div>
    )
};

export default AddressSearchForm;