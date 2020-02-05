
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import ProfileModal from './ProfileModal';
import LoginModal from './LoginModal'

const HamburgerDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
	if (!isOpen) {
		return (
      <DrawerButton onClick={() => setIsOpen(true)}>
        <Icon name="bars"></Icon>
      </DrawerButton>
    );
  }
  
	return (
    <DrawerWrapper>
      <Drawer>
        <NavButton>
          <LoginModal />
        </NavButton>
        <NavButton>
          <ProfileModal />
        </NavButton>
        <NavButton>View Schedule</NavButton>
        <NavButton>Sign Out</NavButton>
        <CloseButton onClick={() => setIsOpen(false)}>X</CloseButton>
      </Drawer>
    </DrawerWrapper>
  );
}

export default HamburgerDrawer;

const Drawer = styled.div`
  position: fixed;
  top: 79px;
  right: 0;
  height: 100vh;
  display: block;
  background-color: #00b3b3;
  color: white;
  padding: 70px;
  width: 20%;
  z-index: 20;
`;
const DrawerButton = styled.button`
  background-color: white;
  color: #00b3b3;
  font-weight: bold;
  font-size: 30px;
  padding: 10px;
  border: #00b3b3;
  z-index: 20;
  cursor: pointer;
`;

const NavButton = styled.button`
  /* align-content: center;
  justify-content: center; */
  padding: 20px;
  background-color: #00b3b3;
  border-style: solid;
  border-color: orange;
  border-width: 2px;
  border-radius: 3px;
  color: white;
  width: 140px;
  margin: 5px;
  cursor: pointer;
  font-weight: bold;
  font-family: 'Cabin', sans-serif;
  font-size: 18px;
`;

const CloseButton = styled(NavButton)`
  margin-top: 20px;
`;

const DrawerWrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;
