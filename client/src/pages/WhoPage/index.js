import React, { useEffect, useState } from "react";
import "./style.css";
import Cover from "../../components/Cover";
import image from "../../assets/images/who.jpg";
import ContentContainer from "../../components/ContentContainer";
import OfficialCard from "../../components/OfficialCard";
import OfficialContainer from "../../components/OfficialContainer";
import ZipSearchForm from "../../components/ZipSearchForm";
import API from "../../utils/API";
import Footer from "../../components/Footer";

function WhoPage() {
    const [address, setAddress] = useState("98115");
    const [results, setResults] = useState([]);

    useEffect(() => {
        // if (user) {
        //     loadUser();
        // }
        whoData(address);
    }, []);

    // function loadUser() {
    //     // Need to figure out how to get user's id 
    //     API.getSavedData(id).then(user => {
    //         let modifiedAddress = user.homeAddress.replace(/,./g, "").replace(/ /g, "%20");
    //         setAddress(modifiedAddress);
    //     });
    // }

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
                    official.phone = webDive.phones[0];
                    modifiedResults.push(official);
                }
            }
            setResults(modifiedResults);
        });
    }

    const handleAddressChange = (event) => {
        event.preventDefault();
        setAddress(event.target.zipcode.value);
        whoData(address);
    }

    return (
        <div>
            <Cover image={image} header={"WHO"}>
                <ZipSearchForm handleAddressChange={handleAddressChange} />
            </Cover>
            <ContentContainer>
                <OfficialContainer>
                    {results.map(official => 
                        <OfficialCard 
                        key={official.name} 
                        name={official.name} 
                        title={official.title}
                        party={official.party}
                        email={official.email}
                        phone={official.phone}/>
                    )}
                </OfficialContainer>
            </ContentContainer>
            <Footer />
        </div>
    )
};

export default WhoPage;