import React, { useState} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import { Dropdown, Form } from 'semantic-ui-react';

const Modal = styled.div`
  background-color: #4d4d4d;
  width: 60%;
  height: 60%;
  z-index: 20;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20%;
  margin-top: 12%;
`;

const Header = styled.h1`
  text-align: center;
  position: absolute;
	top: 1%;
	color: white;
`;

const SignUpForm = styled.form`
	display: flex;
	flex-direction: column;
`;

const Label = styled.label`
	color: white;
`;

const Input = styled.input`
	height: 20px;

`;

const SignUpButton = styled.button`
  background-color: #00b3b3;
  color: white;
  font-weight: bold;
  border-radius: 4px;
  padding: 10px;
  border: #00b3b3;
`;

const CloseButton = styled(SignUpButton)`
  background-color: black;
  padding: 10px;
  position: absolute;
  top: 0;
	left: 0;
	border: black;
`;

const SubmitButton = styled(SignUpButton)`
`;


const mentorOptions = [
  { key: 'mr', text: 'Mentor', value: 'mentor' },
  { key: 'me', text: 'Mentee', value: 'mentee' }
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

const SignUpModal = () => {
	const [isOpen, setIsOpen] = useState(false);
	if (!isOpen) {
		document.getElementById('root').style.filter = 'blur(0px)';
		return <SignUpButton onClick={() => setIsOpen(true)}>Sign Up</SignUpButton>
	}

		document.getElementById('root').style.filter = 'blur(5px)';

	return ReactDOM.createPortal(
    <Modal>
      <CloseButton onClick={() => setIsOpen(false)}>X</CloseButton>
      <Header>Become a Member</Header>
      <SignUpForm>
        <Label for="name">Name:</Label>
        <Input type="text" name="name" />
        <Label for="email">Email:</Label>
        <Input type="text" name="email" />
        <Label for="pass">Password:</Label>
        <Input type="text" name="pass" />
        <Form.Select
          fluid
          label="I'd like to be a..."
          options={mentorOptions}
					placeholder="Mentor"
        />
        <Form.Select
          fluid
          label="Select Your Top 3 Skills"
          options={skillOptions}
          multiple
          select
          placeholder="Skills"
        />
        <SubmitButton type="submit">Submit</SubmitButton>
      </SignUpForm>
    </Modal>,
    document.getElementById('modal-root')
  );
}

export default SignUpModal;