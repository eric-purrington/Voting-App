import React from "react";
import "./style.css";
import Cover from "../../components/Cover";
import image from "../../assets/images/when.jpg";
import ContentContainer from "../../components/ContentContainer";

function WhenPage() {
    return (
        <div>
            <Cover image={image} header={"WHEN"} />
            <ContentContainer >

            </ContentContainer>
        </div>
    )
};

export default WhenPage;