import React, {useState, useEffect} from "react";
import "./style.css";
import Cover from "../../components/Cover";
import image from "../../assets/images/where.jpg";
import ContentContainer from "../../components/ContentContainer";
import ZipSearchForm from "../../components/ZipSearchForm";
// import UserContext from "../../utils/userContext";
import API from "../../utils/API";
import Footer from "../../components/Footer";
import AddressContainer from "../../components/AddressContainer";
import AddressSearchForm from "../../components/AddressSearchForm";

function WherePage() {
    const [address, setAddress] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
        // loadUser();
        whereData(address);
    },[]);

    function whereData(param) {
        var modifiedResults = [];
        API.getVoterInfo(param).then(res => {
            for(var i = 0; i < res.data.pollingLocations[i].length ; i++){
                var address = {};
                address.locationName = res.data.pollingLocations[i].locationName;
                address.line1 = res.data.pollingLocations[i].line1;
                address.line2 = res.data.pollingLocations[i].line2;
                address.line3 = res.data.pollingLocations[i].line3;
                address.city = res.data.pollingLocations[i].city;
                address.state = res.data.pollingLocations[i].state;
                address.zip = res.data.pollingLocations[i].zip;
            }
        })
    }

    const handleAddressChange = (event) => {
        event.preventDefault();
        setAddress(event.target.address.value);
        whereData(address);
    }

    return (
        <div>
            <Cover image={image} header={"WHERE"}>
                {/* Need address for this page */}
                <AddressSearchForm handleAddressChange={handleAddressChange} />
            </Cover>
            <ContentContainer>
                <AddressContainer>

                </AddressContainer>
            </ContentContainer>
            <Footer />
        </div>
    )
};

export default WherePage;