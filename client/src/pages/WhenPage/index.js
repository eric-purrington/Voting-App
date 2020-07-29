import React from "react";
import "./style.css";
import Cover from "../../components/Cover";
import image from "../../assets/images/when.jpg";
import ContentContainer from "../../components/ContentContainer";
import ZipSearchForm from "../../components/ZipSearchForm";
import UserContext from "../../utils/userContext";
import API from "../../utils/API";

function WhenPage() {
    const [results, setResults] = useState([]);

    useEffect(() => {
        whenData();
    }, []);

    function whenData() {
        API.getElections().then(res => {
            let modifiedResults = res.elections.map(election => {
                name: election.name; 
                electionDay: election.electionDay;
            })
            setResults(modifiedResults);
        });
    }

    return (
        <div>
            <Cover image={image} header={"WHEN"}>
                {/* Don't need zip for this page */}
                <ZipSearchForm />
            </Cover>
            <ContentContainer results={results}>

            </ContentContainer>
        </div>
    )
};

export default WhenPage;