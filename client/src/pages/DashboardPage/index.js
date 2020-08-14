import React from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import "./style.css";
import Cover from "../../components/Cover";
import image from "../../assets/images/dash.jpg";
import ContentContainer from "../../components/ContentContainer";
import Footer from "../../components/Footer";
import CoverCountdown from "../../components/CoverCountdown";
import WhenCard from "../../components/WhenCard";
import WhereCard from "../../components/WhereCard";
import WhoCard from "../../components/WhoCard";
import Loading from "../../components/Loading";

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

// export default DashboardPage;

export default withAuthenticationRequired(DashboardPage, {
    onRedirecting: () => <Loading />,
});