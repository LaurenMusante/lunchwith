import React, { useState } from 'react';
import styled from 'styled-components'
import ReactDOM from 'react-dom';
import { Icon } from 'semantic-ui-react'
import SimpleReactCalendar from 'simple-react-calendar';

const CalendarWrapper = styled.div`
  background: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  color: white;
  width: 55vw;
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

const ScheduleButton = styled.button`
  padding: 20px;
  background-color: #00b3b3;
  border-style: solid;
  border-color: #00b3b3;
  border-width: 2px;
  color: white;
  width: 140px;
  margin: 5px;
  cursor: pointer;
  font-weight: bold;
  font-family: 'Cabin', sans-serif;
  font-size: 18px;
`;

const Calendar = ({ ...other }) => {
  const [isOpen, setIsOpen] = useState(false);
  if (!isOpen) {
    document.getElementById('root').style.filter = 'blur(0px)';
    return (
      <ScheduleButton onClick={() => setIsOpen(true)} {...other}>
        View Schedule
      </ScheduleButton>
    );
  }

  document.getElementById('root').style.filter = 'blur(3px)';

  return ReactDOM.createPortal(
    <CalendarWrapper>
      <CloseButton onClick={() => setIsOpen(false)}>
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
    </CalendarWrapper>,
    document.getElementById('modal-root')
  );
};

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