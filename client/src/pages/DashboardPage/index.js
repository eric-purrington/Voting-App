import React from "react";
import "./style.css";
import Cover from "../../components/Cover";
import image from "../../assets/images/dash.jpg";
import ContentContainer from "../../components/ContentContainer";
import Footer from "../../components/Footer";
import DashCalendar from "../../components/DashCalendar";
import CoverCountdown from "../../components/CoverCountdown";

function DashboardPage() {
    return (
        <div>
            <Cover image={image} header={"DASHBOARD"}>
                <CoverCountdown />
            </Cover>
            <ContentContainer >
                {/* <div className="uk-child-width-1-2@m uk-text-center" uk-grid="true">
                        <div>
                            <div className="uk-card uk-card-default uk-card-body calendar-card">
                                <DashCalendar />
                            </div>
                        </div>
                    </div> */}
            </ContentContainer>
            <Footer />
        </div>
    )
};

export default DashboardPage;