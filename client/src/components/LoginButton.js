import React from 'react';
import { Button, Form, Header, Icon, Image, Modal } from 'semantic-ui-react';

var headerStyle = {
  textAlign: 'center',
  fontSize: '40px'
};

const LoginButton = () => (
<Modal trigger={<Button>Log In</Button>} basic size="small">
    <Header icon="food" content="Log in to Your Account" style={headerStyle}/>
    <Modal.Content>
      <Form>
        <Form.Field>
          <label>Email:</label>
          <input placeholder="Email" />
        </Form.Field>
        <Form.Field>
          <label>Password:</label>
          <input placeholder="Password" />
        </Form.Field>
      </Form>
    </Modal.Content>
  </Modal>
);

export default LoginButton;

  