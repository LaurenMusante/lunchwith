import React from 'react';
import { Button, Form, Header, Icon, Modal } from 'semantic-ui-react';

const LoginButton = () => (
  <Modal trigger={<Button>Log In</Button>} basic size="small">
    <Header icon="utensil spoon" content="Log in to Your Account" />
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
