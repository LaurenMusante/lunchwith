
import React from 'react';
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react';


var contentStyle = {
	width: '30%',
	height: '100%'
}
const SidebarExampleVisible = () => (
  <Sidebar.Pushable as={Segment}>
    <Sidebar
      style={contentStyle}
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      vertical
      visible
      width="thin"
    >
      <Menu.Item as="a">
        <Icon name="circle" />
        View Profile
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="circle" />
        View Schedule
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="circle" />
        Messages
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="circle" />
        Log Out
      </Menu.Item>
    </Sidebar>

    <Sidebar.Pusher>
      <Segment basic>
        <Header as="h3">Application Content</Header>
        <Image src="/images/wireframe/paragraph.png" />
      </Segment>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

export default SidebarExampleVisible;




  // handleHideClick = () => this.setState({ visible: false });
  // handleShowClick = () => this.setState({ visible: true });
  // handleSidebarHide = () => this.setState({ visible: false });