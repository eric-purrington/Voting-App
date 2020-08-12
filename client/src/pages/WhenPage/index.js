import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./style.css";
import Cover from "../../components/Cover";
import image from "../../assets/images/when.jpg";
import ContentContainer from "../../components/ContentContainer";
import ContentTable from "../../components/ContentTable";
import ElectionsHead from "../../components/ElectionsHead";
import ElectionsBody from "../../components/ElectionsBody";
// import UserContext from "../../utils/userContext";
import API from "../../utils/API";
import Footer from "../../components/Footer";
import DashCalendar from "../../components/DashCalendar";
import CoverCountdown from "../../components/CoverCountdown";
import moment from "moment";
import UserAPI from "../../utils/UserAPI";

function WhenPage() {
    const [results, setResults] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);

    const { user } = useAuth0();

    useEffect(() => {
        whenData();
        user !== undefined ? setLoggedIn(true) : setLoggedIn(false);
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

    const handleAddEvent = (index) => {

        let addItem = results.filter(election => {
            return results.indexOf(election) == index;
        });

        UserAPI.addUserEvent("5f2f20919f27003eb7fa09b1", addItem[0])
            .then(() => {
                alert("Event saved to Dashboard!")
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <Cover image={image} header={"WHEN"}>
                <CoverCountdown />
            </Cover>
            <ContentContainer>
                <div className="when-container">
                    <div className="uk-child-width-1 uk-text-center" uk-grid="true">
                        <div>
                            <div className="uk-card uk-card-default uk-card-body calendar-card">
                                <DashCalendar
                                    elections={results}
                                    icon={loggedIn ? "icon: plus-circle" : ""}
                                    addOrDel="add"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="uk-card uk-card-default uk-card-body calendar-card">
                                <ContentTable>
                                    <ElectionsHead />
                                    {results.map((election, index) =>
                                        <ElectionsBody key={election.name} electionName={election.name} electionDay={election.electionDay} index={index} handleAddEvent={handleAddEvent} icon={loggedIn ? "icon: plus-circle" : ""} />
                                    )}
                                </ContentTable>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentContainer>
            <Footer />
        </div>
    )
};

export default WhenPage;