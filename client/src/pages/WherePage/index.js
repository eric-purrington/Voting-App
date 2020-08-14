import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./style.css";
import Cover from "../../components/Cover";
import image from "../../assets/images/where.jpg";
import ContentContainer from "../../components/ContentContainer";
import AddressSearchForm from "../../components/AddressSearchForm";
import API from "../../utils/API";
import Footer from "../../components/Footer";
import OfficialContainer from "../../components/OfficialContainer";
import Note from "../../components/Note";
import LocationCard from "../../components/LocationCard";
import Distance from "../../utils/Distance";
import ShowingResults from "../../components/ShowingResults";

function WherePage() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [address, setAddress] = useState("5016 Foxen Ct Cheyenne, WY 82001");
    const [pollingLocations, setPollingLocations] = useState([]);
    const [dropOffLocations, setDropOffLocations] = useState([]);
    const [earlyVoteSites, setEarlyVoteSites] = useState([]);
    const [dataCheck, setDataCheck] = useState(true);
    const { user } = useAuth0();

    useEffect(() => {
        user === undefined || user === false ? setLoggedIn(false) : setLoggedIn(true);
        function getVotersLatLon() {
            return API.getLatLon(address).then(res => res.data.results[0].locations[0].latLng);
        }
        let latlon = getVotersLatLon().then(res => whereData(address, res));
    }, []);

    const handleAddressChange = async (event) => {
        event.preventDefault();
        let newVoterAddress = event.target.address.value.replace(/,.#/g, "")
        setAddress(newVoterAddress);
        await API.getLatLon(newVoterAddress).then(res => whereData(newVoterAddress, res.data.results[0].locations[0].latLng));
    }

    async function locationData(webdive, json) {
        var modifiedLocs = [];
        for (let i = 0; i < webdive.length; i++) {
            var location = {};
            location.name = webdive[i].address.locationName
            location.address = `${webdive[i].address.line1} ${webdive[i].address.city}, ${webdive[i].address.state} ${webdive[i].address.zip}`;
            const locLatLon = await API.getLatLon(location.address).then(res => res.data.results[0].locations[0]);
            if (locLatLon.geocodeQuality == "COUNTRY") {
                location.distance = 4.1;
            } else {
                location.distance = Distance.findDistanceBetween(json.lat, json.lng, locLatLon.latLng.lat, locLatLon.latLng.lng);
            }
            modifiedLocs.push(location);
        }
        return modifiedLocs;
    }

    function whereData(param, json) {
        API.getVoterInfo(param).then(res => {
            setDataCheck(true);
            if (res.data.pollingLocations) {
                let pollDive = res.data.pollingLocations;
                locationData(pollDive, json).then(res => setPollingLocations(res))
            }
            if (res.data.dropOffLocations) {
                let dropDive = res.data.dropOffLocations;
                locationData(dropDive, json).then(res => setDropOffLocations(res))
            }
            if (res.data.earlyVoteSites) {
                let earlyDive = res.data.earlyVoteSites;
                locationData(earlyDive, json).then(res => setEarlyVoteSites(res))
            }
            if (res.data === "") {
                setDataCheck(false);
                setPollingLocations([]);
                setDropOffLocations([]);
                setEarlyVoteSites([]);
            }
        }).catch(error => {
            setDataCheck(false);
            console.log(error);
        });
        if (pollingLocations === [] && dropOffLocations === [] && earlyVoteSites === []) {
            setDataCheck(false);
        }
    }

    return (
        <div className="whereContainer">
            <Cover image={image} header={"WHERE"}>
                <AddressSearchForm handleAddressChange={handleAddressChange} />
            </Cover>
            <ShowingResults text="Showing locations near" address={address} />
            <ContentContainer>
                {dataCheck ? "" : <Note />}
                {pollingLocations[0] && dataCheck ? (
                    <div className="uk-text-center polling-title">
                        <h1>Polling Locations</h1>
                    </div>
                ) : ""}
                <OfficialContainer>
                    {pollingLocations[0] && dataCheck ? pollingLocations.map(loc =>
                        <LocationCard
                            key={loc.name}
                            name={loc.name}
                            address={loc.address}
                            distance={loc.distance}
                            loggedIn={loggedIn}
                        />) : ""}
                </OfficialContainer>
                {dropOffLocations[0] && dataCheck ? (
                    <div className="uk-text-center polling-title">
                        <h1>Ballot Drop Off Locations</h1>
                    </div>
                ) : ""}
                <OfficialContainer>
                    {dropOffLocations[0] && dataCheck ? dropOffLocations.map(loc =>
                        <LocationCard
                            key={loc.name}
                            name={loc.name}
                            address={loc.address}
                            distance={loc.distance}
                            loggedIn={loggedIn}
                        />) : ""}
                </OfficialContainer>
                {earlyVoteSites[0] && dataCheck ? (
                    <div className="uk-text-center polling-title">
                        <h1>Early Vote Sites</h1>
                    </div>
                ) : ""}
                <OfficialContainer>
                    {earlyVoteSites[0] && dataCheck ? earlyVoteSites.map(loc =>
                        <LocationCard
                            key={loc.name}
                            name={loc.name}
                            address={loc.address}
                            distance={loc.distance}
                            loggedIn={loggedIn}
                        />) : ""}
                </OfficialContainer>
            </ContentContainer>
            <Footer />
            <div id="locationModal" className="uk-flex-top" uk-modal="true">
                <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
                    <button className="uk-modal-close-default" type="button" uk-close="true"></button>
                    <p>Location added to your dashboard!</p>
                </div>
            </div>
        </div>
    )
};

export default WherePage;
