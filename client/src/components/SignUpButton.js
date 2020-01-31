import React from 'react';
import { Button, Dropdown, Form, Header, Icon, Modal } from 'semantic-ui-react';
import { blockStatement } from '@babel/types';

const mentorOptions = [
  { key: 'mr', text: 'Mentor', value: 'mentor' },
  { key: 'me', text: 'Mentee', value: 'mentee' },
];

const skillOptions = [
  { key: 'angular', text: 'Angular', value: 'angular' },
  { key: 'css', text: 'CSS', value: 'css' },
  { key: 'design', text: 'Graphic Design', value: 'design' },
  { key: 'ember', text: 'Ember', value: 'ember' },
  { key: 'html', text: 'HTML', value: 'html' },
  { key: 'ia', text: 'Information Architecture', value: 'ia' },
  { key: 'javascript', text: 'Javascript', value: 'javascript' },
  { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
  { key: 'meteor', text: 'Meteor', value: 'meteor' },
  { key: 'node', text: 'NodeJS', value: 'node' },
  { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
  { key: 'python', text: 'Python', value: 'python' },
  { key: 'rails', text: 'Rails', value: 'rails' },
  { key: 'react', text: 'React', value: 'react' },
  { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
  { key: 'ruby', text: 'Ruby', value: 'ruby' },
  { key: 'ui', text: 'UI Design', value: 'ui' },
  { key: 'ux', text: 'User Experience', value: 'ux' }
];

// var modalStyle = {
//   backgroundColor: 'red'
// }

var dropdownStyle = {
  backgroundColor: 'teal'
}

var headerStyle = {
  textAlign: 'center',
  fontSize: '40px'
}

var fontStyle = {
  fontColor: 'white',
  size: '100px',
  // backgroundColor: 'red'
}

const SignUpButton = () => (
  <Modal
    trigger={<Button>Sign Up</Button>}
    basic
    size="small"
    style={fontStyle}
  >
    <Header icon="user circle" content="Become a member today" style={headerStyle} />
    <Modal.Content>
      <Form>
        <Form.Group widths="equal">
          <Form.Input fluid label="First name" placeholder="First name" />
          <Form.Input fluid label="Last name" placeholder="Last name" />
          <Form.Select
            fluid
            label="I'd like to be a..."
            options={mentorOptions}
            placeholder="Mentor"
          />
        </Form.Group>
        <Dropdown
          style={dropdownStyle}
          placeholder="Skills"
          fluid
          multiple
          select
          options={skillOptions}
        />
        <br></br>
        <Form.Checkbox label="I agree to the Terms and Conditions" />
        <Form.Button>Join the Community</Form.Button>
      </Form>
    </Modal.Content>
  </Modal>
);

export default SignUpButton;


