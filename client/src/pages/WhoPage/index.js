import React from "react";
import "./style.css";
import Cover from "../../components/Cover";
import image from "../../assets/images/who.jpg";
import ContentContainer from "../../components/ContentContainer";
import ZipSearchForm from "../../components/ZipSearchForm";

function WhoPage() {
    return (
        <div>
            <Cover image={image} header={"WHO"}>
                <ZipSearchForm />
            </Cover>
            <ContentContainer >

            </ContentContainer>
        </div>
    )
};

export default WhoPage;