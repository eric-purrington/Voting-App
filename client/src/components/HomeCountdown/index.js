
import React from "react";
import "./style.css";
import Countdown from 'react-countdown';
import styled from 'styled-components';
import LoginBtn from "../LoginContainer";

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
            <h5 className="countdown-header">General Election is in...</h5>
            <CountStyle>
                <Countdown date={'2020-11-03T00:00:00'} className="countdown-timer" style={{ color: "red" }}>
                    Election day is here!
                </Countdown>
            </CountStyle>
            <a href="https://vote.gov/" target="_blank" className="register-link">Register Here</a>
        </div>
    )
};

export default HomeCountdown;