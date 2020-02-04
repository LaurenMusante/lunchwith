
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react'

const Drawer = styled.div`
  position: fixed;
  top: 63px;
  right: 0;
  height: 100vh;
  display: block;
  background-color: #00b3b3;
  color: white;
  padding: 70px;
  width: 20%;
  z-index: 20;
`
const DrawerButton = styled.button`
  background-color: #00b3b3;
  color: white;
  font-weight: bold;
  border-radius: 4px;
  padding: 10px;
  border: #00b3b3;
  z-index: 20;
  cursor: pointer;
`; 

const NavButton = styled(DrawerButton)`
  /* align-content: center;
  justify-content: center; */
  padding: 20px;
  background-color: #ff8000;
  color: white;
  width: 140px;
  margin: 5px;
  cursor: pointer;
`;

const CloseButton = styled(NavButton)`
margin-top: 20px;

`

const DrawerWrapper = styled.div`
position: absolute;
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
`

  
  /* background-color: #00b3b3;
  position: fixed;
  top: 0;
  right: 0;
  width: 30%;
  height: 100%;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center; */

const HamburgerDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
	if (!isOpen) {
		return (
      <DrawerButton onClick={() => setIsOpen(true)}>
        <Icon name="bars"></Icon>
      </DrawerButton>
    );
  }
  
	return(
    <DrawerWrapper>
    <Drawer>
      <NavButton>Log In</NavButton>
      <br></br>
      <NavButton>View Profile</NavButton>
      <NavButton>View Schedule</NavButton>
      <NavButton>Sign Out</NavButton>
      <CloseButton onClick={() => setIsOpen(false)}>X</CloseButton>
    </Drawer>
    </DrawerWrapper>
  );
}

export default HamburgerDrawer;
