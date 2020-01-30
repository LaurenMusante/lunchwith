//logged in ? user avatar : "log in" button

import React from 'react';
import { Icon, Input, Menu } from 'semantic-ui-react';
import './Header.css'
import SignUpButton from './SignUpButton';
import LoginButton from './LoginButton'


const Header = () => {
  return (
    <div>
      <Menu className="menuStyle">
        <Menu.Item header>
          <Icon circular inverted color="teal" name="utensil spoon" />
          Lunch With
        </Menu.Item>
        <Menu.Item>
          <Input
            className="icon"
            icon="search"
            placeholder="Search Professions..."
          />
        </Menu.Item>
        <Menu.Item name="login"><LoginButton /></Menu.Item>
        <Menu.Item name="login"><SignUpButton /></Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item name="signup">
            <Icon circular name="bars" />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default Header;
