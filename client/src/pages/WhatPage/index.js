import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./style.css";
import Cover from "../../components/Cover";
import image from "../../assets/images/where.jpg";
import ContentContainer from "../../components/ContentContainer";
import AddressSearchForm from "../../components/AddressSearchForm";
import API from "../../utils/API";
import Footer from "../../components/Footer";
import ContentTable from "../../components/ContentTable";
import ContestsHead from "../../components/ContestsHead";
import ContestsBody from "../../components/ContestsBody";
import ShowingResults from "../../components/ShowingResults";

function WherePage() {
    // const [loggedIn, setLoggedIn] = useState(false);
    const [address, setAddress] = useState("18 Brittany Way NE, Atlanta, GA 30324");
    const [contests, setContests] = useState([])
    const [dataCheck, setDataCheck] = useState(true);
    const { user } = useAuth0();

    useEffect(() => {
        // user === undefined || user === false ? setLoggedIn(false) : setLoggedIn(true);
        whatData(address);
    }, []);

    const handleAddressChange = (event) => {
        event.preventDefault();
        let newVoterAddress = event.target.address.value.replace(/,.#/g, "")
        setAddress(newVoterAddress);
        whatData(newVoterAddress);
    }

    function whatData(param) {
        API.getVoterInfo(param).then(res => {
            setDataCheck(true);
            if (res.data.contests) {
                let contestDive = res.data.contests;
                setContests(contestDive);
            }
            if (res.data === "") {
                setDataCheck(false);
                setContests([]);
            }
        }).catch(error => {
            setDataCheck(false);
            console.log(error);
        });
        if (contests === []) {
            setDataCheck(false);
        }
    }

    return (
        <div>
            <Cover image={image} header={"WHAT"}>
                <AddressSearchForm handleAddressChange={handleAddressChange} />
            </Cover>
            <ShowingResults text="Showing contests near" address={address} />
            <ContentContainer>
                {dataCheck ? "" : (
                    <div className="uk-alert-warning uk-text-center">
                        <p>If you do not see any results for your address, there may not be any upcoming state elections.</p>
                    </div>
                )}
                {contests[0] && dataCheck ? (
                    <div className="uk-text-center">
                        <h1>{contests[0].office}</h1>
                    </div>
                ) : ""}
                {contests[0] && dataCheck ? 
                <div className="uk-card uk-card-default uk-card-body calendar-card whatContainer">
                    <ContentTable>
                        <ContestsHead />
                        {contests[0].candidates.map(candidate =>
                            <ContestsBody key={candidate.name} candidate={candidate.name} party={candidate.party}/>)}
                    </ContentTable>
                </div> : ""}
            </ContentContainer>
            <Footer />
        </div>
    )
};

export default WherePage;