import React, { useState } from 'react';
import styled from 'styled-components'
import { Dropdown, Icon } from 'semantic-ui-react';
import GoogleMap from './GoogleMap'

const AvailabilityWrapper = styled.div`
  background: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  color: white;
  width: 70vw;
  height: 85vh;
  z-index: 30;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20%;
  margin-top: 12%;
  position: absolute;
`;

const AvailabilityForm = styled.form`
`;

const AvailabilityHeader = styled.h1`
  text-align: center;
  position: relative;
  top: 0;
  color: white;
  padding: 10px;
`;

const CloseButton = styled.button`
  background: rgba(0, 0, 0, 0);
  color: white;
  font-weight: bold;
  font-family: 'Cabin', sans-serif;
  font-size: 25px;
  padding: 15px;
  position: absolute;
  top: 0;
  left: 0;
  border: #4d4d4d;
  border-radius: 20px;
  width: 5px;
  margin: 8px;
`;

const SubAvailability = styled.button`
  padding: 20px;
  background-color: #00b3b3;
  border-style: solid;
  border-color: #00b3b3;
  border-width: 2px;
  border-radius: 8px;
  color: white;
  display: block;
  margin: auto;
  width: 140px;
  cursor: pointer;
  font-weight: bold;
  font-family: 'Cabin', sans-serif;
  font-size: 18px;
`;

const dayOptions = [
  {
    key: 'Monday',
    text: 'Monday',
    value: 'Monday'
  },
  {
    key: 'Tuesday',
    text: 'Tuesday',
    value: 'Tuesday'
  },
  {
    key: 'Wednesday',
    text: 'Wednesday',
    value: 'Wednesday'
  },
  {
    key: 'Thursday',
    text: 'Thursday',
    value: 'Thursday'
  },
  {
    key: 'Friday',
    text: 'Friday',
    value: 'Friday',
  },
      {
    key: 'Saturday',
    text: 'Saturday',
    value: 'Saturday',
  },
      {
    key: 'Sunday',
    text: 'Sunday',
    value: 'Sunday',
  },
];

const timeOptions = [
  {
    key: '8:00am',
    text: '8:00am',
    value: '8:00am'
  },
  {
    key: '9:00am',
    text: '9:00am',
    value: '9:00am'
  },
  {
    key: '10:00am',
    text: '10:00am',
    value: '10:00am'
  },
  {
    key: '11:00am',
    text: '11:00am',
    value: '11:00am'
  },
  {
    key: '12:00pm',
    text: '12:00pm',
    value: '12:00pm'
  },
  {
    key: '1:00pm',
    text: '1:00pm',
    value: '1:00pm'
  },
  {
    key: '2:00pm',
    text: '2:00pm',
    value: '2:00pm'
  },
  {
    key: '3:00pm',
    text: '3:00pm',
    value: '3:00pm'
  },
  {
    key: '4:00pm',
    text: '4:00pm',
    value: '4:00pm'
  },
  {
    key: '5:00pm',
    text: '5:00pm',
    value: '5:00pm'
  },
];
  
const Availability = () => {
  const [isOpen, setIsOpen] = useState(true);
  if (isOpen) {
  return (
      setIsOpen(true)
      <AvailabilityWrapper>
        <CloseButton onClick={() => setIsOpen(false)}>
          {' '}
          <Icon color="white" size="large" name="window close" />
        </CloseButton>
        <AvailabilityForm>
          <AvailabilityHeader>
            When are you available for lunch?
          </AvailabilityHeader>
          <p>Available on:</p>
          <Dropdown
            placeholder="Select Day"
            fluid
            selection
            options={dayOptions}
            style={{ width: '20vw', margin: '20px' }}
          />
          <p>Available from:</p>
          <Dropdown
            placeholder="Start Time"
            fluid
            selection
            options={timeOptions}
            style={{ width: '20vw', margin: '20px' }}
          />
          <p>Available to:</p>
          <Dropdown
            placeholder="End Time"
            fluid
            selection
            options={timeOptions}
            style={{ width: '20vw', margin: '20px' }}
          />
          <SubAvailability>Submit Availability</SubAvailability>
        </AvailabilityForm>
      </AvailabilityWrapper>
    );
  }
}


export default Availability;
