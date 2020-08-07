import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";
import moment from "moment";
import DashCalendar from "../../components/DashCalendar";
import EventForm from "../../components/EventForm";
import UserAPI from "../../utils/UserAPI";

function WhenCard(props) {
    const [savedEvents, setSavedEvents] = useState([]);

    useEffect(() => {
        // getSaved();
    }, []);

    const getSaved = () => {
        // UserAPI.getSavedData("5f2cc3b1a4926a14441e3383")
        //     .then(res => setSavedEvents(res.data.savedEvents))
        //     .catch(err => console.log(err));
    };

    const handleSubmitEvent = (event) => {
        event.preventDefault();

        let newEvent = {
            name: event.target.name.value,
            date: moment(event.target.date.value).format("MM-DD-YYYY")
        };

        event.target.name.value = "";
        event.target.date.value = "";

        // UserAPI.addUserEvent("5f2cc3b1a4926a14441e3383", newEvent)
        //     .then(() => {
        //         getSaved();
        //     })
        //     .catch(err => console.log(err));
    };

    return (
        <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@m uk-margin dash-card uk-text-center" uk-grid="true">
            <div className="uk-flex-last@s uk-card-media-right uk-cover-container">
                <DashCalendar
                    elections={savedEvents}
                    icon="icon: minus-circle"
                />
            </div>
            <div>
                <div className="uk-card-body">
                    <h3 className="uk-card-title dash-card-title when-card-title">When</h3>
                    <hr className="dash-hr" />
                    <p className="dash-card-subtitle">Important Dates to Remember.</p>
                    <EventForm handleSubmitEvent={handleSubmitEvent} />
                </div>
            </div>
        </div>
    )
};

export default WhenCard;