import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";
import moment from "moment";
import DashCalendar from "../../components/DashCalendar";
import EventForm from "../../components/EventForm";
import UserAPI from "../../utils/UserAPI";
import SavedEventsContext from "../../utils/SavedEventsContext";
import { useAuth0 } from "@auth0/auth0-react";

function WhenCard(props) {
    const { user } = useAuth0();

    const [savedEvents, setSavedEvents] = useState({
        events: [],
        getSavedEvents: () => {
            UserAPI.getSavedData(user.email)
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
        UserAPI.getSavedData(user.email)
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

        UserAPI.addUserEvent(user.email, newEvent)
            .then(() => getSaved())
            .catch(err => console.log(err));
    };

    return (
        <div className="uk-card uk-card-default uk-grid-collapse uk-margin dash-card uk-text-center when-card" uk-grid="true">
            <div className="uk-flex-last@s uk-card-media-right uk-cover-container uk-width-1-2@m">
                <SavedEventsContext.Provider value={savedEvents}>
                    <DashCalendar
                        elections={savedEvents.events}
                        icon="icon: minus-circle"
                        addOrDel="delete"
                    />
                </SavedEventsContext.Provider>
            </div>
            <div className="uk-width-1-2@m">
                <div className="uk-card-body dash-card-body">
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