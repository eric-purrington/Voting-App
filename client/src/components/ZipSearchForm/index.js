import React from "react";
import "./style.css";

function ZipSearchForm(props) {
    return (
        <form className="uk-form-horizontal" onSubmit={props.handleZipChange}>
            <label className="zip-form-label">Search By Zipcode</label>
            <div className="zip-input">
                <div uk-form-custom="target: true">
                    <input className="uk-input uk-form-width-medium zip-input-box" name="zipcode" type="text" placeholder="98115" />
                </div>
                <button className="uk-button uk-button-default zip-search-btn"><span uk-icon="icon: search; ratio: 1"></span></button>
            </div>
        </form>
    )
};

export default ZipSearchForm;