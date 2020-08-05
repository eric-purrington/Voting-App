import React, { useState } from "react";
import "./style.css";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from "moment";

function DashCalendar(props) {
    const [dayCard, openDayCard] = useState(false);
    const [activeDay, setActiveDay] = useState({
        day: "",
        elections: []
    });

    const handleDayClick = (event) => {
        openDayCard(true);
        let date = moment(event).format("MM-DD-YYYY");
        console.log(date);
        let elections = props.elections.filter(el => {
            return el.electionDay === date;
        });

        setActiveDay({ day: date, elections: elections });

    };

    const handleCloseClick = () => {
        openDayCard(false);
    }

    return (
        <div>
            <Calendar
                onClickDay={handleDayClick}
                tileClassName={({ date, view }) => {
                    for (let i = 0; i < props.elections.length; i++) {
                        if (props.elections[i].electionDay === moment(date).format("MM-DD-YYYY")) {
                            return 'highlight';
                        }
                    }
                }}
            />
            {
                dayCard ? (
                    <div uk-alert="true" className="day-alert">
                        <a className="uk-alert-close" uk-close="true" onClick={handleCloseClick}></a>
                        <h3 className="alert-header">{moment(activeDay.day).format('MMMM Do, YYYY')}</h3>
                        {
                            activeDay.elections.length > 0 ? (
                                activeDay.elections.map((el, index) => <div key={index}><p className="alert-election-name">{el.name}</p></div>)
                            ) : (<p>There are no elections this day.</p>)
                        }
                    </div>
                ) : ("")
            }
        </div>
    )
};

export default DashCalendar;