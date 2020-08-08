import React from "react";
import "./style.css";

function AddressSearchForm(props) {
    return (
        <div>
        <form onClick={handleSubmit} className="uk-form-horizontal">
            <label className="zip-form-label"> Search By Address : </label>
            <div className="zip-input">
                <div uk-form-custom="target: true">
                    <input onChange={props.handleAddressChange} className="uk-input uk-form-width-medium zip-input-box" type="text" name = "address" placeholder="address" />
                </div>
                <button className="uk-button uk-button-default zip-search-btn" type='submit' value='Submit' ><span uk-icon="icon: search; ratio: 1"></span></button>
            </div>
        </form>
        </div>
    )
};

export default AddressSearchForm;