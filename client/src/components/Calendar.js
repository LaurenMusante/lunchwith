// import React from 'react';
import styled from 'styled-components'
import React, { Component } from 'react';
import SimpleReactCalendar from 'simple-react-calendar';

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
class Calendar extends Component {
  render() {
    return (
      <CalendarWrapper>
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