import React from "react";
import "./style.css";
import Cover from "../../components/Cover";
import image from "../../assets/images/where.jpg";
import ContentContainer from "../../components/ContentContainer";
import ZipSearchForm from "../../components/ZipSearchForm";
import UserContext from "../../utils/userContext";
import API from "../../utils/API";

function WherePage() {
    return (
        <div>
            <Cover image={image} header={"WHERE"}>
                <ZipSearchForm />
            </Cover>
            <ContentContainer >

            </ContentContainer>
        </div>
    )
};

export default WherePage;