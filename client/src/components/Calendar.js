// import React from 'react';
import styled from 'styled-components'
import React, { Component } from 'react';
import SimpleReactCalendar from 'simple-react-calendar';
import { Icon } from 'semantic-ui-react'

const CalendarWrapper = styled.div`
  background: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  color: white;
  width: 70vw;
  height: 80vh;
  z-index: 30;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20%;
  margin-top: 12%;
  position: absolute;
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
`;
class Calendar extends Component {

  render() {
    return (
      <CalendarWrapper>
        <CloseButton>
          {' '}
          <Icon color="white" size="large" name="window close" />
        </CloseButton>
        <SimpleReactCalendar
          activeMonth={new Date()}
          style={{
            zIndex: '100',
            height: '100vh',
            width: '100vw',
            position: 'relative'
          }}
        />
      </CalendarWrapper>
    );
  }
}

export default Calendar;






// const CalendarDiv = styled.div`
//   background: rgba(0, 0, 0, 0.6);
//   border-radius: 20px;
//   color: white;
//   width: 70vw;
//   height: 50vh;
//   z-index: 30;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-left: 20%;
//   margin-top: 12%;
//   position: absolute;
// `;

// const Calendar = () => {
// 	return(
// 		<CalendarDiv>
// 			FROGGY
// 		</CalendarDiv>
// 	);
// }

// export default Calendar;