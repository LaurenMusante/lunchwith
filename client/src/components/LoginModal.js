import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

const Modal = styled.div`
  background-color: #4d4d4d;
  border-radius: 20px;
  width: 60%;
  height: 60%;
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
  top: 1%;
  color: white;
`;

const LogInForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: white;
  font-size: 15px;
  padding: 5px;
`;

const Input = styled.input`
  height: 30px;
`;

const LoginButton = styled.button`
  background-color: #00b3b3;
  color: white;
  font-weight: bold;
  border-radius: 4px;
  padding: 10px;
  border: #00b3b3;
`;

const CloseButton = styled(LoginButton)`
  background-color: #4d4d4d;
  padding: 15px;
  position: absolute;
  top: 0;
  left: 0;
  border: #4d4d4d;
  border-radius: 20px;
`;

const ModalWrapper = styled.div`
position: relative;
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
`

const SubmitButton = styled(LoginButton)``;


const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  if (!isOpen) {
    document.getElementById('root').style.filter = 'blur(0px)';
    return <LoginButton onClick={() => setIsOpen(true)}>Log In</LoginButton>;
  }

  document.getElementById('root').style.filter = 'blur(3px)';
  
  return ReactDOM.createPortal(
    <ModalWrapper>
    <Modal>
      <CloseButton onClick={() => setIsOpen(false)}>X</CloseButton>
      <Header>Log In</Header>
      <LogInForm>
        <Label for="name">Name:</Label>
        <Input type="text" name="name" />
        <Label for="email">Email:</Label>
        <Input type="text" name="email" />
        <Label for="pass">Password:</Label>
        <Input type="text" name="pass" />
        <br></br>
        <SubmitButton type="submit">Submit</SubmitButton>
      </LogInForm>
    </Modal>
    </ModalWrapper>,
    document.getElementById('modal-root')
  );
};

export default LoginModal;

  