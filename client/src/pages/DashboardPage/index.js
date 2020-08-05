import React from "react";
import "./style.css";
import Cover from "../../components/Cover";
import image from "../../assets/images/dash.jpg";
import ContentContainer from "../../components/ContentContainer";
import Footer from "../../components/Footer";
import CoverCountdown from "../../components/CoverCountdown";
import WhenCard from "../../components/WhenCard";
import WhereCard from "../../components/WhereCard";
import WhoCard from "../../components/WhoCard";

function DashboardPage() {
    return (
        <div>
            <Cover image={image} header={"DASHBOARD"}>
                <CoverCountdown />
            </Cover>
            <ContentContainer >
                <WhenCard />
                <WhereCard />
                <WhoCard />
            </ContentContainer>
            <Footer />
        </div>
    )
};

export default DashboardPage;