import React, { useEffect, useState } from "react";
import "./style.css";
import Cover from "../../components/Cover";
import image from "../../assets/images/who.jpg";
import ContentContainer from "../../components/ContentContainer";
import ZipSearchForm from "../../components/ZipSearchForm";
import API from "../../utils/API";
import Footer from "../../components/Footer";

function WhoPage() {
    // const [address, setAddress] = useState("");
    const [zip, setZip] = useState("");
    const [results, setResults] = useState([]);

    // useEffect(() => {
    //     loadUser();
    //     whoData(address);
    // }, []);

    // function loadUser() {
    //     // Need to figure out how to get user's id 
    //     API.getUser(id).then(user => {
    //         let modifiedAddress = user.pollingAddress.replace(/,./g, "").replace(/ /g, "%20");
    //         setAddress(modifiedAddress);
    //     });
    // }

    // function whoData(param) {
    //     let modifiedResults = [];
    //     let official = {};
    //     API.getRepInfo(param).then(res => {
    //         for (var i = 0; i < res.offices.length; i++) {
    //             official.title = res.offices[i].name;
    //             for (var j = 0; j < res.offices[i].officialIndices.length; j++) {
    //                 let webDive = res.officials[res.offices[i].officialIndices[j]]
    //                 official.name = webDive.name; 
    //                 official.party = webDive.party; 
    //                 official.email = webDive.emails[0]; 
    //                 official.phone = webDive.phones[0];
    //             }
    //             modifiedResults.push(official);
    //         }
    //         setResults(modifiedResults);
    //     });
    // }

    function handleZipChange(event) {
        setZip(event.target.value);
        // whoData(zip);
    }

    return (
        <div>
            <Cover image={image} header={"WHO"}>
                <ZipSearchForm handleZipChange={handleZipChange} />
            </Cover>
            <ContentContainer results={results}>
                {/* results tables go here */}
            </ContentContainer>
            <Footer />
        </div>
    )
};

export default WhoPage;