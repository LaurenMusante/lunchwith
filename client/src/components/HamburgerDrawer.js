
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Button, Icon } from 'semantic-ui-react'

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

const Drawer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  /* height: 100%; */
  display: block;
  background-color: #00b3b3;
  color: white;
  padding: 70px;
  width: 30%;
  z-index: 20;
  cursor: pointer;
`

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
    <Drawer>
      <NavButton>Log In</NavButton>
      <br></br>
      <NavButton>View Profile</NavButton>
      <NavButton>View Schedule</NavButton>
      <NavButton>Sign Out</NavButton>
    </Drawer>
  );
}

export default HamburgerDrawer;
