
import React from "react";
import "./style.css";
import Countdown from 'react-countdown';
import styled from 'styled-components';

const CountStyle = styled.div`
  span {
    color: #d27977;
    font-family: 'Montserrat', sans-serif;
    font-size: 30px;
    font-weight: 500;
  }
`;

function HomeCountdown(props) {
    return (
        <div className="countdown-div uk-text-center uk-card-default">
            <h5 className="countdown-header">General Election Day</h5>
            <CountStyle>
                <Countdown date={'2020-11-03T00:00:00'} className="countdown-timer" />
            </CountStyle>
            <a href="https://vote.gov/" target="_blank" className="register-link">Register Here</a>
        </div>
    )
};

export default HomeCountdown;