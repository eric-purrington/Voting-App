import React, { useState } from "react";
import "./style.css";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function DashCalendar(props) {
    const [dayCard, openDayCard] = useState(false);
    const [activeDay, setActiceDay] = useState("");

    // render days with events background color red
    // when user clicks on day they see events they've saved that day

    const handleDayClick = (event) => {
        openDayCard(true);
        setActiceDay(event.toString());
        console.log(typeof (event));
    };

    const handleCloseClick = () => {
        openDayCard(false);
    }

    return (
        <div>
            <Calendar onClickDay={handleDayClick} />
            {
                dayCard ? (
                    <div uk-alert="true">
                        <a className="uk-alert-close" uk-close="true" onClick={handleCloseClick}></a>
                        <h3>{activeDay}</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                ) : ("")
            }
        </div>
    )
};

export default DashCalendar;