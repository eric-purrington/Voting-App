
import React from "react";
import "./style.css";
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

function CoverCountdown(props) {
  return (
    <div>
      <p className="countdown">ELECTION DAY:</p>
      <CountStyle>
        <Countdown date={'2020-11-03T00:00:00'} className="countdown-timer" />
      </CountStyle>
    </div>
  )
};

export default CoverCountdown;