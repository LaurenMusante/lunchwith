//logo
//logged in ? user avatar : "log in" button
//hamburger menu that shows a drawer

import React from 'react';
import { Menu } from 'semantic-ui-react';

const Header = () => {
  return (
    <div>
      <Menu>
        <Menu.Item header>Lunch With</Menu.Item>
        <Menu.Item name="hi">HI</Menu.Item>
        <Menu.Item name="hi">HOWDY</Menu.Item>
        <Menu.Item name="hi">AHOY</Menu.Item>
      </Menu>
    </div>
  );
};

export default Header;
