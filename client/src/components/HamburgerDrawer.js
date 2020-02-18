import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled, { css, keyframes } from 'styled-components';
import { Icon } from 'semantic-ui-react';
import ProfileModal from './ProfileModal';
import LoginModal from './LoginModal';
import Calendar from './Calendar';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOutUser } from '../actions';

const slideOpen = keyframes`
  0% {
    transform: translateX(100px);
  }
  100% {
    transform: translateX(0px);
  }
`;

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

const DrawerWrapper = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
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

  &:click ${DrawerWrapper} {
    animation: ${slideOpen} 3s ease-out;
  }
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

const ScheduleModalNavButton = styled(Calendar)`
  ${ButtonCSS}
`;

const CloseButton = styled(NavButton)`
  margin-top: 20px;
`;



const HamburgerDrawer = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  if (!isOpen) {
    return (
      <DrawerButton onClick={() => setIsOpen(true)}>
        <Icon name="bars"></Icon>
      </DrawerButton>
    );
  }
  
  function handleSignOut() {
    dispatch(logOutUser());
  };

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
        <ScheduleModalNavButton>
          <Link to="/calendar" style={{ color: 'white' }}>
            View Schedule
          </Link>
        </ScheduleModalNavButton>
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
