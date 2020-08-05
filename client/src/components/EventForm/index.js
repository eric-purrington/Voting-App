import React from "react";
import "./style.css";

function EventForm(props) {
    return (
        <form className="add-event-form" onSubmit={props.handleSubmitEvent}>
            <div className="uk-margin">
                <input className="uk-input uk-form-width-medium add-event-box" type="text" placeholder="Event" name="name" />
            </div>

            <div class="uk-margin">
                <input type="date" id="start" name="event-date"
                    min="2020-01-01" max="2022-12-31"
                    className="uk-input uk-form-width-medium add-event-box"
                    name="date" />
            </div>
            <button className="uk-button uk-button-default add-event-btn">Add <span uk-icon="icon: plus; ratio: .75"></span></button>
        </form >
    )
};

export default EventForm;