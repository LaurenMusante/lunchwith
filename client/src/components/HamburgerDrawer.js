
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Button, Icon } from 'semantic-ui-react'

const Drawer = styled.div`

`
const DrawerButton = styled.button`
  background-color: #00b3b3;
  color: white;
  font-weight: bold;
  border-radius: 4px;
  padding: 10px;
  border: #00b3b3;
`;

const HamburgerDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
	if (!isOpen) {
		document.getElementById('root').style.filter = 'blur(0px)';
		return (
      <DrawerButton onClick={() => setIsOpen(true)}>
        <Icon name="bars"></Icon>
      </DrawerButton>
    );
	}

		document.getElementById('root').style.filter = 'blur(5px)';

	return ReactDOM.createPortal(
    <Drawer>
      <Button>Log In</Button>
      <Button>View Profile</Button>
      <Button>View Schedule</Button>
      <Button>Sign Out</Button>
    </Drawer>
  );
}

export default HamburgerDrawer;
