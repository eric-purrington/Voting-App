import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./style.css";
import Cover from "../../components/Cover";
import image from "../../assets/images/who.jpg";
import ContentContainer from "../../components/ContentContainer";
import OfficialCard from "../../components/OfficialCard";
import OfficialContainer from "../../components/OfficialContainer";
import ZipSearchForm from "../../components/ZipSearchForm";
import API from "../../utils/API";
import Footer from "../../components/Footer";
import ShowingResults from "../../components/ShowingResults";

function WhoPage() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [address, setAddress] = useState("98115");
    const [results, setResults] = useState([]);

    const { user } = useAuth0();

    useEffect(() => {
        user === undefined || user === false ? setLoggedIn(false) : setLoggedIn(true);
        whoData(address);
    }, []);

    function whoData(param) {
        var modifiedResults = [];
        API.getRepInfo(param).then(res => {
            for (var i = 0; i < res.data.offices.length; i++) {
                for (var j = 0; j < res.data.offices[i].officialIndices.length; j++) {
                    var official = {};
                    official.title = res.data.offices[i].name;
                    let webDive = res.data.officials[res.data.offices[i].officialIndices[j]];
                    official.name = webDive.name;
                    official.party = webDive.party;
                    if (webDive.emails !== undefined) {
                        official.email = webDive.emails[0];
                    } else {
                        official.email = "Not Available";
                    }
                    if (webDive.phones !== undefined) {
                        official.phone = webDive.phones[0];
                    } else {
                        official.phone = "Not Available";
                    }
                    modifiedResults.push(official);
                }
            }
            setResults(modifiedResults);
        });
    }

    const handleZipChange = (event) => {
        event.preventDefault();
        setAddress(event.target.zipcode.value);
        whoData(event.target.zipcode.value);
    }

    return (
        <div>
            <Cover image={image} header={"WHO"}>
                <ZipSearchForm handleZipChange={handleZipChange} />
            </Cover>
            <ShowingResults text="Showing Officials for" address={address} />
            <ContentContainer>
                <OfficialContainer>
                    {results.map(official =>
                        <OfficialCard
                            loggedIn={loggedIn}
                            key={official.name}
                            name={official.name}
                            title={official.title}
                            party={official.party}
                            email={official.email}
                            phone={official.phone} />
                    )}
                </OfficialContainer>
            </ContentContainer>
            <Footer />
        </div>
    )
};

export default WhoPage;