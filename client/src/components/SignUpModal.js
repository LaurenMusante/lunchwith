import React, { useState} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import { Form } from 'semantic-ui-react';
import axios from 'axios'

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

const Modal = styled.div`
  background: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  color: white;
  width: 70vw;
  height: 90vh;
  z-index: 30;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20%;
  margin-top: 12%;
  position: absolute;
`;

const Header = styled.h1`
  text-align: center;
  position: absolute;
  top: 0;
  color: white;
  padding: 2px;
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  /* padding: 30px; */
`;

const Label = styled.label`
  color: white;
  font-size: 15px;
  padding: 5px;
`;

const Input = styled.input`
  height: 30px;
`;

const SignUpButton = styled.button`
  background-color: #00b3b3;
  color: white;
  border-radius: 4px;
  padding: 10px;
  border: #00b3b3;
  font-weight: bold;
  font-family: 'Cabin', sans-serif;
  font-size: 18px;
`;

const CloseButton = styled(SignUpButton)`
  background: rgba(0, 0, 0, 0);
  padding: 15px;
  position: absolute;
  top: 0;
  left: 0;
  border: #4d4d4d;
  border-radius: 20px;
`;

const SubmitButton = styled(SignUpButton)``;

const SignUpModalWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const SignUpModal = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const handleSubmit = async event => {
  event.preventDefault();
  try {
    const response = await axios.post('http://localhost:5000/api/v1/users/', {
      firstname,
      lastname,
      email,
      password,
      // mentor: 'true',
      // skills: []
    });
  } catch (error) {
    console.error(error);
  }
};

// const handleChange = (event, data) => {
//   this.setState({value: data.value});
// }

	const [isOpen, setIsOpen] = useState(false);
	if (!isOpen) {
		document.getElementById('root').style.filter = 'blur(0px)';
		return <SignUpButton onClick={() => setIsOpen(true)}>Sign Up</SignUpButton>
	}

		document.getElementById('root').style.filter = 'blur(3px)';

	return ReactDOM.createPortal(
    <SignUpModalWrapper>
      <Modal>
        <CloseButton onClick={() => setIsOpen(false)}>X</CloseButton>
        <Header>Become a Member</Header>
        <SignUpForm onSubmit={handleSubmit}>
          <Label for="firstname">First Name:</Label>
          <Input
            type="text"
            name="firstname"
            value={firstname}
            onChange={e => setFirstName(e.target.value)}
          />
          <Label for="lastname">Last Name:</Label>
          <Input
            type="text"
            name="lastname"
            value={lastname}
            onChange={e => setLastName(e.target.value)}
          />
          <Label for="email">Email:</Label>
          <Input
            type="text"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Label for="password">Password:</Label>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
           {/* <Form.Select
            fluid
            label="I'd like to be a..."
            options={mentorOptions}
            placeholder="Mentor"
            onChange={handleChange}
          /> */}
          {/* <Form.Select
            fluid
            label="Select Your Top 3 Skills"
            options={skillOptions}
            multiple
            select
            placeholder="Skills"
          />  */}
          <br></br>
          <SubmitButton type="submit">Submit</SubmitButton>
        </SignUpForm>
      </Modal>
    </SignUpModalWrapper>,
    document.getElementById('modal-root')
  );
}

export default SignUpModal;


