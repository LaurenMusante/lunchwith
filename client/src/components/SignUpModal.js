import React, { useState } from 'react';
import styled from 'styled-components'
import ReactDOM from 'react-dom';
import { Icon } from 'semantic-ui-react';
import { sendUserToRedux } from '../actions';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const Modal = styled.div`
  background: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  color: white;
  width: 55vw;
  height: 80vh;
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
  const dispatch = useDispatch();

  const handleSubmit = async event => {
    event.preventDefault();
    setIsOpen(false);
    try {
      const response = await axios.post('http://localhost:5000/api/v1/users/', {
        firstname,
        lastname,
        email,
        password,
      });
      dispatch(sendUserToRedux(response.data.rows[0]));
    } catch (error) {
      console.error(error);
    }
  };


  const [isOpen, setIsOpen] = useState(false);
  if (!isOpen) {
    document.getElementById('root').style.filter = 'blur(0px)';
    return <SignUpButton onClick={() => setIsOpen(true)}>Sign Up</SignUpButton>
  }

  document.getElementById('root').style.filter = 'blur(3px)';

  return ReactDOM.createPortal(
    <SignUpModalWrapper>
      <Modal>
        <CloseButton onClick={() => setIsOpen(false)}>
          {' '}
          <Icon color="white" size="large" name="window close" />
        </CloseButton>
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
          <br></br>
          <SubmitButton type="submit">Submit</SubmitButton>
        </SignUpForm>
      </Modal>
    </SignUpModalWrapper>,
    document.getElementById('modal-root')
  );
}

export default SignUpModal;


