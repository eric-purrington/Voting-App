import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";
import moment from "moment";
import DashCalendar from "../../components/DashCalendar";
import EventForm from "../../components/EventForm";

function WhenCard(props) {
    const [results, setResults] = useState([]);

    useEffect(() => {
        whenData();
    }, []);

    function whenData() {
        API.getElections().then(res => {
            let modifiedResults = res.data.elections.slice(1).map(election => ({
                name: election.name,
                electionDay: moment(election.electionDay).format("MM-DD-YYYY")
            }))
            setResults(modifiedResults);
        });
    }

    return (
        <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@m uk-margin dash-card uk-text-center" uk-grid="true">
            <div className="uk-flex-last@s uk-card-media-right uk-cover-container">
                <DashCalendar elections={results} />
            </div>
            <div>
                <div className="uk-card-body">
                    <h3 className="uk-card-title dash-card-title when-card-title">When</h3>
                    <hr className="dash-hr" />
                    <p className="dash-card-subtitle">Important Dates to Remember.</p>
                    <EventForm />
                </div>
            </div>
        </div>
    )
};

export default WhenCard;