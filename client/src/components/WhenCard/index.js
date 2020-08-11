import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";
import moment from "moment";
import DashCalendar from "../../components/DashCalendar";
import EventForm from "../../components/EventForm";
import UserAPI from "../../utils/UserAPI";
import SavedEventsContext from "../../utils/SavedEventsContext";

function WhenCard(props) {
    const [savedEvents, setSavedEvents] = useState({
        events: [],
        getSavedEvents: () => {
            UserAPI.getSavedData("5f2f20919f27003eb7fa09b1")
                .then(res => {
                    setSavedEvents({ ...savedEvents, events: res.data.savedEvents })
                })
                .catch(err => console.log(err));
        }
    });

    useEffect(() => {
        getSaved();
    }, []);

    const getSaved = () => {
        UserAPI.getSavedData("5f2f20919f27003eb7fa09b1")
            .then(res => {
                setSavedEvents({ ...savedEvents, events: res.data.savedEvents })
            })
            .catch(err => console.log(err));
    };

    const handleSubmitEvent = (event) => {
        event.preventDefault();

        let newEvent = {
            name: event.target.name.value,
            date: moment(event.target.date.value).format("MM-DD-YYYY")
        };

        event.target.name.value = "";
        event.target.date.value = "";

        UserAPI.addUserEvent("5f2f20919f27003eb7fa09b1", newEvent)
            .then(() => {
                getSaved();
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@m uk-margin dash-card uk-text-center" uk-grid="true">
            <div className="uk-flex-last@s uk-card-media-right uk-cover-container">
                <SavedEventsContext.Provider value={savedEvents}>
                    <DashCalendar
                        elections={savedEvents.events}
                        icon="icon: minus-circle"
                        addOrDel="delete"
                    />
                </SavedEventsContext.Provider>
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