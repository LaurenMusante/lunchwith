import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled, {css} from 'styled-components';
import { Icon } from 'semantic-ui-react';
import ProfileModal from './ProfileModal';
import LoginModal from './LoginModal';
import { Link } from 'react-router-dom';

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
  background: rgba(0, 0, 0, 0.6);
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

const ButtonCSS = css`
  /* align-content: center;
  justify-content: center; */
  padding: 20px;
  background-color: #00b3b3;
  border-style: solid;
  border-color: #00b3b3;
  border-width: 2px;
  border-radius: 3px;
  color: white;
  width: 150px;
  margin: 7px;
  cursor: pointer;
  font-weight: bold;
  font-family: 'Cabin', sans-serif;
  font-size: 16px;
`;

const NavButton = styled.button`
  ${ButtonCSS}
`;

const LoginNavButton = styled(LoginModal)`
  ${ButtonCSS}
`;

const ProfileModalNavButton = styled(ProfileModal)`
  ${ButtonCSS}
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

function handleSignOut() {

};

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
        <LoginNavButton />
        <ProfileModalNavButton />
        {/* <NavButton>
          <LoginModal />
        </NavButton>
        <NavButton>
          <ProfileModal />
        </NavButton> */}
        <NavButton>
          <Link to="/calendar" style={{ color: 'white' }}>
            View Schedule
          </Link>
        </NavButton>
        <NavButton onClick={handleSignOut}>Sign Out</NavButton>
        <CloseButton onClick={() => setIsOpen(false)}>
          {' '}
          <Icon color="white" size="large" name="window close" />
        </CloseButton>
      </Drawer>
    </DrawerWrapper>
  );
}

export default HamburgerDrawer;
