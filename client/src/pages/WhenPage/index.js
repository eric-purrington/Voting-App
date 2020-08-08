import React, { useState, useEffect } from "react";
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

function WhenPage() {
    const [results, setResults] = useState([]);
    const [loggedIn, setLoggedIn] = useState(true);

    useEffect(() => {
        whenData();
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

    return (
        <div>
            <Cover image={image} header={"WHEN"}>
                <CoverCountdown />
            </Cover>
            <ContentContainer>
                <div className="uk-child-width-1-2@l uk-text-center" uk-grid="true">
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
                                {results.map(election =>
                                    <ElectionsBody key={election.name} electionName={election.name} electionDay={election.electionDay} />
                                )}
                            </ContentTable>
                        </div>
                    </div>
                </div>
            </ContentContainer>
            <Footer />
        </div>
    )
};

export default WhenPage;