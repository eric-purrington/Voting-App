import React from "react";
import "./style.css";
import Cover from "../../components/Cover";
import image from "../../assets/images/dash.jpg";
import ContentContainer from "../../components/ContentContainer";

function DashboardPage() {
    return (
        <div>
            <Cover image={image} header={"DASHBOARD"}>
                <p className="countdown">COUNTDOWN TO ELECTION: 101 days</p>
            </Cover>
            <ContentContainer >

            </ContentContainer>
        </div>
    )
};

export default DashboardPage;