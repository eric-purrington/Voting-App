import React, { useState, useEffect } from "react";
import "./style.css";
import Cover from "../../components/Cover";
import image from "../../assets/images/where.jpg";
import ContentContainer from "../../components/ContentContainer";
import AddressCard from "../../components/AddressCard";
import ZipSearchForm from "../../components/ZipSearchForm";
// import UserContext from "../../utils/userContext";
import API from "../../utils/API";
import Footer from "../../components/Footer";
import OfficialContainer from "../../components/OfficialContainer";
import Note from "../../components/Note"

function WherePage() {
    const [address, setAddress] = useState("");
    const [addresses, setAddresses] = useState([]);


    const handleAddressChange = (event) => {
        console.log(event.target.value);
        setAddress(event.target.value);
        //whereData(address);
    }
    function handleSubmit(event) {
        event.preventDefault();
        console.log("Submit button has been clicked");
        whereData(address);
    }

    function whereData(param) {
        var modifiedResults = [];
        console.log("Inside WHEREDATA()");
        console.log("param" + param);
        API.getVoterInfo(param).then(res => {
            console.log("I am inside API getVoterInfo()");
            console.log(res);
            for (var i = 0; i < res.data.pollingLocations.length ; i++) {
                var address = {};
                address.locationName = res.data.pollingLocations[i].address.locationName;
                console.log(address.locationName);
                address.line1 = res.data.pollingLocations[i].address.line1;
                address.city = res.data.pollingLocations[i].address.city;
                address.state = res.data.pollingLocations[i].address.state;
                address.zip = res.data.pollingLocations[i].address.zip;
                modifiedResults.push(address);
            }
         setAddresses(modifiedResults);
         console.log("Results after Loop ==>",modifiedResults);
        })

    }

    return (
        <div className = "whereContainer">
            <Cover image={image} header={"WHERE"}>
            </Cover>
            <ContentContainer>
                <form>
                    {/* <input class = ".uk-form-width-large" */}
                    <div class="uk-margin">
                        Enter Address here: 
                        <input class="uk-input uk-form-width-large" type="text" name="Search"
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
            </ContentContainer>
            <Footer />
        </div>
    )
};

export default WherePage;





 // useEffect(() =>{
    //     whereData(address);
    // },[]);
 // async function handleAddressChange(event) {
    //     // console.log(“The input value==>“, event.target.value);
    //     await setAddress(event.target.value);
    //    //whereData(address);
    // }