import React, { useState, useEffect } from "react";
import "./style.css";
import UserAPI from "../../utils/UserAPI";
import OfficialsTable from "../../components/OfficialsTable";

function WhoCard(props) {
    const [savedOfficials, setSavedOfficials] = useState([]);

    useEffect(() => {
        // UserAPI.getSavedData("5f2cc3b1a4926a14441e3383")
        //     .then(res => {
        //         setSavedOfficials(res.data.repDetails)
        //     })
        //     .catch(err => console.log(err));
    }, []);

    return (
        <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin dash-card" uk-grid="true">
            <div className="uk-flex-last@s uk-card-media-right uk-cover-container">
                <OfficialsTable officials={savedOfficials} />
            </div>
            <div>
                <div className="uk-card-body uk-text-center">
                    <h3 className="uk-card-title dash-card-title">Who</h3>
                    <hr className="dash-hr" />
                    <p className="dash-card-subtitle">Important People to Remember.</p>
                </div>
            </div>
        </div>
    )
};

export default WhoCard;