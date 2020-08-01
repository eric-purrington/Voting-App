import React from "react";
import "./style.css";
import Cover from "../../components/Cover";
import image from "../../assets/images/dash.jpg";
import ContentContainer from "../../components/ContentContainer";
import Footer from "../../components/Footer";
import DashCalendar from "../../components/DashCalendar";
import Countdown from 'react-countdown';
import styled from 'styled-components';

const CountStyle = styled.div`
  span {
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-size: 30px;
    font-weight: 500;
  }
`;

function DashboardPage() {

    // useEffect --> when page loads, get all user saved data
    // pass saved dates as props to DashCalendar

    return (
        <div>
            <Cover image={image} header={"DASHBOARD"}>
                <p className="countdown">ELECTION DAY:</p>
                <CountStyle>
                    <Countdown date={'2020-11-03T00:00:00'} className="countdown-timer" />
                </CountStyle>
            </Cover>
            <ContentContainer >
                <div className="uk-child-width-1-2@m uk-text-center" uk-grid="true">
                    <div>
                        <div className="uk-card uk-card-default uk-card-body calendar-card">
                            <DashCalendar />
                        </div>
                    </div>
                </div>
            </ContentContainer>
            <Footer />
        </div>
    )
};

export default DashboardPage;