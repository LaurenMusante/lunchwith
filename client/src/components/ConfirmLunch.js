import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ConfirmLunchDiv = styled.div`
  background: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  color: white;
  width: 70vw;
  height: 50vh;
  z-index: 30;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20%;
  margin-top: 12%;
  position: absolute;
`;

const ConfirmLunchHeader = styled.h1`
  text-align: center;
  position: absolute;
  top: 1%;
  color: white;
  padding: 2px;
`;

const ViewScheduleButton = styled.button`
  background-color: #00b3b3;
  color: white;
  border-radius: 4px;
  padding: 10px;
  border: #00b3b3;
  font-weight: bold;
  font-family: 'Cabin', sans-serif;
  font-size: 18px;
`;

const CloseButton = styled.button`
  background: rgba(0, 0, 0, 0);
  padding: 15px;
  position: absolute;
  top: 0;
  left: 0;
  border: #4d4d4d;
  border-radius: 20px;
`;

const ConfirmLunch = () => {
  return (
    <ConfirmLunchDiv>
      <CloseButton>X</CloseButton>
      <ConfirmLunchHeader>
        Lunch with USER at TIME on DAY has been added to your schedule!
      </ConfirmLunchHeader>
      <ViewScheduleButton>
        {' '}
        <Link to="/calendar">View Schedule</Link>
      </ViewScheduleButton>
    </ConfirmLunchDiv>
  );
};

export default ConfirmLunch;