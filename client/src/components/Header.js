//logged in ? user avatar : "log in" button

import React from 'react';
import { Icon, Input, Menu } from 'semantic-ui-react';
import SignUpModal from './SignUpModal';
import LoginModal from './LoginModal';
import HamburgerDrawer from './HamburgerDrawer'


const Header = () => {
  return (
    <div>
      <Menu className="menuStyle">
        <Menu.Item header>
          <Icon circular inverted color="teal" name="food" />
          Lunch With
        </Menu.Item>
        <Menu.Item>
          <Input
            className="icon"
            icon="search"
            placeholder="Search Professions..."
          />
        </Menu.Item>
        <Menu.Item name="login"><LoginModal /></Menu.Item>
        <Menu.Item name="login"><SignUpModal /></Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item name="signup">
            <HamburgerDrawer />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default Header;
