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
    };

    return (
        <div>
            <Calendar onChange={handleDayClick} />
            {
                dayCard ? <p>{activeDay}</p> : ""
            }
        </div>
    )
};

export default DashCalendar;