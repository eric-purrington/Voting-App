import React, { useState, useContext } from "react";
import "./style.css";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from "moment";
import UserAPI from "../../utils/UserAPI";
import SavedEventsContext from "../../utils/SavedEventsContext";
import { useAuth0 } from "@auth0/auth0-react";

function DashCalendar(props) {
    const { user } = useAuth0();
    const [dayCard, openDayCard] = useState(false);
    const [activeDay, setActiveDay] = useState({
        day: "",
        elections: [],
        addOrDel: props.addOrDel
    });
    const { events, getSavedEvents } = useContext(SavedEventsContext);

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
    };

    const handleAddEvent = (index) => {

        let newEvent = {
            date: activeDay.day,
            name: activeDay.elections[index].name
        };

        UserAPI.addUserEvent(user.email, newEvent)
            .then(() => alert("Event Saved to Dashboard!"))
            .catch(err => console.log(err));
    };

    const handleDeleteEvent = (index) => {

        let deleteItem = activeDay.elections.filter(election => {
            return activeDay.elections.indexOf(election) == index;
        });

        let deleteID = { id: deleteItem[0]._id };

        UserAPI.deleteUserEvent("5f2f20919f27003eb7fa09b1", deleteID)
            .then((res) => {
                getSavedEvents();
                setActiveDay({ day: activeDay.day, elections: res.data.savedEvents.filter(el => el.date === activeDay.day) });
            })
            .catch(err => console.log(err));
    };

    const handleIconClick = (index) => {
        props.addOrDel === "add" ? handleAddEvent(index) : handleDeleteEvent(index);
    };

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
                                                <span
                                                    onClick={() => handleIconClick(index)} className="addDel-icon" uk-icon={props.icon} id={index} data-id={el._id}>
                                                </span>
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