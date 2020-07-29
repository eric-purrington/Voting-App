import React from "react";
import "./style.css";
import Cover from "../../components/Cover";
import image from "../../assets/images/where.jpg";
import ContentContainer from "../../components/ContentContainer";
import ZipSearchForm from "../../components/ZipSearchForm";
import UserContext from "../../utils/userContext";
import API from "../../utils/API";


function WherePage() {
    const [address, setAddress] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
        loadUser();
        whereData(address);
    }, []);

    function loadUser() {
        // Need to figure out how to get user's id 
        API.getUser(id).then(user => {
            let modifiedAddress = user.pollingAddress.replace(/,./g, "").replace(/ /g, "%20");
            setAddress(modifiedAddress);
        });
    }

    function whereData(param) {
        API.getVoterInfo().then(res => {
            
        });
    }

    function handleAddressChange(event) {
        setAddress(event.target.value);
        whereData(address);
    }

    return (
        <div>
            <Cover image={image} header={"WHERE"}>
                {/* Need address for this page */}
                <ZipSearchForm handleAddressChange={handleAddressChange}/>
            </Cover>
            <ContentContainer results={results}>

            </ContentContainer>
        </div>
    )
};

export default WherePage;