import React from "react";
import "./style.css";
import Cover from "../../components/Cover";
import image from "../../assets/images/when.jpg";
import ContentContainer from "../../components/ContentContainer";
import ZipSearchForm from "../../components/ZipSearchForm";

function WhenPage() {
    return (
        <div>
            <Cover image={image} header={"WHEN"}>
                <ZipSearchForm />
            </Cover>
            <ContentContainer >

            </ContentContainer>
        </div>
    )
};

export default WhenPage;