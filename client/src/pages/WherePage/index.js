import React, { useState, useEffect } from "react";
import "./style.css";
import Cover from "../../components/Cover";
import image from "../../assets/images/where.jpg";
import ContentContainer from "../../components/ContentContainer";
// import AddressCard from "../../components/AddressCard";
import AddressSearchForm from "../../components/AddressSearchForm";
import API from "../../utils/API";
import Footer from "../../components/Footer";
import OfficialContainer from "../../components/OfficialContainer";
import Note from "../../components/Note";
// import PollingInfo from "../../components/PollingInfo";
import LocationCard from "../../components/LocationCard";
import Distance from "../../utils/Distance";

function WherePage() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [address, setAddress] = useState("5016 Foxen Ct Cheyenne, WY 82001");
    // const [addresses, setAddresses] = useState([]);
    // const [pollingInfo, setPollingInfo] = useState([]);
    const [pollingLocations, setPollingLocations] = useState([]);
    const [dropOffLocations, setDropOffLocations] = useState([]);
    const [earlyVoteSites, setEarlyVoteSites] = useState([]);
    const [dataCheck, setDataCheck] = useState(true);
    const [votersLatLon, setVotersLatLon] = useState({})
    var lat2 = 0;
    var lon2 = 0;
    var distanceBetween = 0;

    useEffect(() => {
        if (loggedIn) {
            // loadUser();
        }
        API.getLatLon(address).then(res => {
            setVotersLatLon(res.data.results[0].locations[0].latLng);
            console.log(votersLatLon)
        }).catch(err => console.log(err));
        whereData(address);
    }, []);

    // function loadUser() {
    //     API.getSavedData(userID).then(user => {
    //         let modifiedAddress = user.homeAddress.replace(/,.#/g, "");
    //         setAddress(modifiedAddress);
    //     });
    // }

    const handleAddressChange = (event) => {
        event.preventDefault();
        setAddress(event.target.address.value.replace(/,.#/g, ""));
        API.getLatLon(address).then(res => {
            setVotersLatLon({
                ...votersLatLon,
                lat: res.data.results[0].locations[0].latLng.lat, 
                lon: res.data.results[0].locations[0].latLng.lng
            });
        });
        whereData(address);
    }

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     whereData(address);
    // }

    // function whereData(param) {
    //     var modifiedResults = [];
    //     var pollingResults = [];
    //     API.getVoterInfo(param).then(res => {
    //         console.log(res)
    //         for (var i = 0; i < res.data.pollingLocations.length; i++) {
    //             for (var j = 0; j < res.data.state.length; j++) {
    //                 var address = {};
    //                 var info = {};
    //                 info.name = res.data.state[i].electionAdministrationBody.name;
    //                 info.electionInfoUrl = res.data.state[i].electionAdministrationBody.electionInfoUrl;
    //                 info.ballotInfoUrl = res.data.state[i].electionAdministrationBody.ballotInfoUrl;
    //                 info.electionRegistrationUrl = res.data.state[i].electionAdministrationBody.electionRegistrationUrl;
    //                 info.electionRegistrationConfirmationUrl = res.data.state[i].electionAdministrationBody.electionRegistrationConfirmationUrl;
    //                 address.locationName = res.data.pollingLocations[i].address.locationName;
    //                 address.line1 = res.data.pollingLocations[i].address.line1;
    //                 address.city = res.data.pollingLocations[i].address.city;
    //                 address.state = res.data.pollingLocations[i].address.state;
    //                 address.zip = res.data.pollingLocations[i].address.zip;
    //                 modifiedResults.push(address);
    //                 pollingResults.push(info);
    //                 setPollingInfo(pollingResults)
    //                 setAddresses(modifiedResults);
    //             }
    //         }
    //     });
    // }

    function whereData(param) {
        var modifiedPollLocs = [];
        var modifiedDropLocs = [];
        var modifiedEarlyLocs = [];
        API.getVoterInfo(param).then(res => {
            if (res.data.pollingLocations !== null) {
                let pollDive = res.data.pollingLocations;
                for (var i = 0; i < pollDive.length; i++) {
                    var pollLoc = {};
                    pollLoc.name = pollDive[i].address.locationName;
                    pollLoc.address = `${pollDive[i].address.line1} ${pollDive[i].address.city}, ${pollDive[i].address.state} ${pollDive[i].address.zip}`;
                    pollLoc.distance = findTheDistance(pollLoc.address);
                    console.log(pollLoc.distance)
                    modifiedPollLocs.push(pollLoc);
                }
                setPollingLocations(modifiedPollLocs);
            }
            if (res.data.dropOffLocations) {
                for (var i = 0; i < res.data.dropOffLocations.length; i++) {
                    let dropDive = res.data.dropOffLocations;
                    for (var i = 0; i < dropDive.length; i++) {
                        var dropLoc = {};
                        dropLoc.name = dropDive[i].address.locationName;
                        dropLoc.address = `${dropDive[i].address.line1} ${dropDive[i].address.city}, ${dropDive[i].address.state} ${dropDive[i].address.zip}`;
                        dropLoc.distance = findTheDistance(dropLoc.address);
                        modifiedDropLocs.push(dropLoc);
                    }
                }
                setDropOffLocations(modifiedDropLocs);
            }
            if (res.data.earlyVoteSites) {
                for (var i = 0; i < res.data.earlyVoteSites.length; i++) {
                    let earlyDive = res.data.earlyVoteSites;
                    for (var i = 0; i < earlyDive.length; i++) {
                        var earlyLoc = {};
                        earlyLoc.name = earlyDive[i].address.locationName;
                        earlyLoc.address = `${earlyDive[i].address.line1} ${earlyDive[i].address.city}, ${earlyDive[i].address.state} ${earlyDive[i].address.zip}`;
                        earlyLoc.distance = findTheDistance(earlyLoc.address);
                        modifiedEarlyLocs.push(earlyLoc);
                    }
                }
                setEarlyVoteSites(modifiedEarlyLocs);
            }
        })
        if (pollingLocations === [] && dropOffLocations === [] && earlyVoteSites === []) {
            setDataCheck(false);
        }
    }

    function findTheDistance(voteLocation) {
        API.getLatLon(voteLocation).then(res => {
            lat2 = res.data.results[0].locations[0].latLng.lat;
            lon2 = res.data.results[0].locations[0].latLng.lng;
            console.log(lat2, lon2)
        });
        distanceBetween = Distance.findDistanceBetween(votersLatLon.lat, votersLatLon.lon, lat2, lon2);
        console.log(distanceBetween)
        return distanceBetween;
    }


    return (
        <div className="whereContainer">
            <Cover image={image} header={"WHERE"}>
                <AddressSearchForm handleAddressChange={handleAddressChange} />
            </Cover>
            <ContentContainer>
                {/* <form className="form">
                    <div className="uk-margin formInput">
                        Enter Address here:
                        <input class="uk-input uk-form-width-large input" type="text" name="Search"
                            value={address}
                            onChange={handleAddressChange}
                            placeholder="address" />
                        <button class="uk-button uk-button-default" onClick={handleSubmit}><span uk-icon="search"> </span></button>
                    </div>
                </form>
                <Note />
                <OfficialContainer>
                    {addresses.map(addr =>
                        <AddressCard
                            key={addr.line1}
                            locationName={addr.locationName}
                            line1={addr.line1}
                            city={addr.city}
                            state={addr.state}
                            zip={addr.zip}
                        />
                    )}
                </OfficialContainer>
                <OfficialContainer>
                    {pollingInfo.map(info =>
                        <PollingInfo
                            key={info.name}
                            name={info.name}
                            electionInfoUrl={info.electionInfoUrl}
                            ballotInfoUrl={info.ballotInfoUrl}
                            electionRegistrationUrl={info.electionRegistrationUrl}
                            electionRegistrationConfirmationUrl={info.electionRegistrationConfirmationUrl}
                        />
                    )}
                </OfficialContainer> */}
                {dataCheck ? "" : <Note />}
                {pollingLocations[0] ? <h1>Polling Locations</h1> : ""}
                <OfficialContainer>
                    {pollingLocations ? pollingLocations.map(loc => 
                        <LocationCard
                        key={loc.name}
                        name={loc.name}
                        address={loc.address}
                        distance={loc.distance}
                        loggedIn={loggedIn}
                        />) : ""}
                </OfficialContainer>
                {dropOffLocations[0] ? <h1>Ballot Drop Off Locations</h1> : ""}
                <OfficialContainer>
                    {dropOffLocations[0] ? dropOffLocations.map(loc => 
                        <LocationCard
                        key={loc.name}
                        name={loc.name}
                        address={loc.address}
                        loggedIn={loggedIn}
                        />) : ""}
                </OfficialContainer>
                {earlyVoteSites[0] ? <h1>Early Vote Sites</h1> : ""}
                <OfficialContainer>
                    {earlyVoteSites[0] ? earlyVoteSites.map(loc => 
                        <LocationCard
                        key={loc.name}
                        name={loc.name}
                        address={loc.address}
                        loggedIn={loggedIn}
                        />) : ""}
                </OfficialContainer>
            </ContentContainer>
            <Footer />
        </div>
    )
};

export default WherePage;
