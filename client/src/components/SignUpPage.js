import React from 'react';
import { Button, Dropdown, Form, Header, Icon, Modal } from 'semantic-ui-react';


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

const SignUpPage = () => (
  <Modal trigger={<Button>Sign Up</Button>} basic size="small">
    <Header icon="user circle" content="Become a member today" />
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
        {/* <Form.Group inline>
          <label>Size</label>
          <Form.Radio
            label="Small"
            value="sm"
            checked={value === 'sm'}
            onChange={this.handleChange}
          />
          <Form.Radio
            label="Medium"
            value="md"
            checked={value === 'md'}
            onChange={this.handleChange}
          />
          <Form.Radio
            label="Large"
            value="lg"
            checked={value === 'lg'}
            onChange={this.handleChange}
          />
        </Form.Group> */}
        <Dropdown
          placeholder="Skills"
          fluid
          multiple
          select
          options={skillOptions}
        />
        <Form.Checkbox label="I agree to the Terms and Conditions" />
        <Form.Button>Join the Community</Form.Button>
      </Form>
    </Modal.Content>
  </Modal>
);

export default SignUpPage;


// Become a <mentor/mentee>

// Name
// Email
// LinkedIN?

// Interests 
// //similar to linked in, select multiple with a responsive search bar

// Join Community button
