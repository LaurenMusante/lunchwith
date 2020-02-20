import React from 'react';
import styled from 'styled-components'
import { Icon, Input, Menu } from 'semantic-ui-react';
import HamburgerDrawer from './HamburgerDrawer';
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';

const Header = () => {
  return (
    <HeaderContainer>
      <Menu className="menuStyle">
        <Menu.Item header style={menuStyle}>
          <Icon circular inverted color="teal" name="food" />
          Lunch With
        </Menu.Item>
        <Menu.Item name="login">
          <LoginModal />
        </Menu.Item>
        <Menu.Item name="login">
          <SignUpModal />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item name="signup">
            <HamburgerDrawer />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  z-index: 20;
  width: 100vw;
  position: absolute;
  top: 0px;
  left: 0px;
`;

const menuStyle = {
  fontWeight: 'bold',
  fontSize: '20px',
}