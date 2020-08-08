import React, { useState } from "react";
import "./style.css";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from "moment";
import UserAPI from "../../utils/UserAPI";

function DashCalendar(props) {
    const [dayCard, openDayCard] = useState(false);
    const [activeDay, setActiveDay] = useState({
        day: "",
        elections: [],
        addOrDel: props.addOrDel
    });

    const handleDayClick = (event) => {
        openDayCard(true);
        let date = moment(event).format("MM-DD-YYYY");
        let elections = props.elections.filter(el => {
            return el.electionDay === date || el.date === date;
        });

        setActiveDay({ day: date, elections: elections });

    };

    const handleCloseClick = () => {
        openDayCard(false);
    }

    const handleAddEvent = (index) => {

        let newEvent = {
            date: activeDay.day,
            name: activeDay.elections[index].name
        };

        UserAPI.addUserEvent("5f2cc3b1a4926a14441e3383", newEvent)
            .then(() => {
                alert("Event saved to Dashboard!")
            })
            .catch(err => console.log(err));
    };

    const handleIconClick = (index) => {
        if (props.addOrDel === "add") {
            handleAddEvent(index);
        } else if (props.addOrDel === "delete") {
            console.log("delete")
        }
    }

    return (
        <div>
            <Calendar
                onClickDay={handleDayClick}
                tileClassName={({ date, view }) => {
                    for (let i = 0; i < props.elections.length; i++) {
                        if (props.elections[i].electionDay === moment(date).format("MM-DD-YYYY") || props.elections[i].date === moment(date).format("MM-DD-YYYY")) {
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
                                activeDay.elections.map((el, index) => {
                                    return (
                                        <div key={index}>
                                            <p className="alert-election-name">
                                                <span onClick={() => handleIconClick(index)} className="addDel-icon" uk-icon={props.icon} id={index}></span>
                                                {el.name}
                                            </p>
                                        </div>
                                    )
                                })
                            ) : (<p>There are no events this day.</p>)
                        }
                    </div>
                ) : ("")
            }
        </div>
    )
};

export default DashCalendar;