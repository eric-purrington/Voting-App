import React, {useState, useEffect} from "react";
import "./style.css";
import Cover from "../../components/Cover";
import image from "../../assets/images/when.jpg";
import ContentContainer from "../../components/ContentContainer";
import ContentTable from "../../components/ContentTable";
import ElectionsHead from "../../components/ElectionsHead";
import ElectionsBody from "../../components/ElectionsBody";
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
            let modifiedResults = res.data.elections.slice(1).map(election => ({
                name: election.name,
                electionDay: election.electionDay
            }))
            setResults(modifiedResults);
        });
    }

    return (
        <div>
            <Cover image={image} header={"WHEN"}>
                {/* Don't need zip for this page */}
                <ZipSearchForm />
            </Cover>
            <ContentContainer>
                <ContentTable>
                    <ElectionsHead />
                    {results.map(election => 
                        <ElectionsBody key={election.name} electionName={election.name} electionDay={election.electionDay}/>
                    )}
                </ContentTable>
            </ContentContainer>
        </div>
    )
};

export default WhenPage;