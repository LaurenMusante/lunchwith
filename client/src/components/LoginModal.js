import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

const LoginModal = ({...other}) => {
  const [isOpen, setIsOpen] = useState(false);
  if (!isOpen) {
    document.getElementById('root').style.filter = 'blur(0px)';
    return <LoginButton onClick={() => setIsOpen(true)} {...other}>Log In</LoginButton>;
  }

  document.getElementById('root').style.filter = 'blur(3px)';
  
  return ReactDOM.createPortal(
    <ModalWrapper>
    <Modal>
      <CloseButton onClick={() => setIsOpen(false)}>X</CloseButton>
      <LoginHeader>Log In</LoginHeader>
      <LogInForm>
        <Label for="name">Name:</Label>
        <Input type="text" name="name" />
        <Label for="email">Email:</Label>
        <Input type="text" name="email" />
        <Label for="pass">Password:</Label>
        <Input type="password" name="pass" />
        <br></br>
        <SubmitButton type="submit">Submit</SubmitButton>
      </LogInForm>
    </Modal>
    </ModalWrapper>,
    document.getElementById('modal-root')
  );
};

export default LoginModal;


const Modal = styled.div`
  background: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  width: 60vw;
  height: 70vh;
  z-index: 30;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20%;
  margin-top: 12%;
  position: absolute;
`;

const LoginHeader = styled.h1`
  text-align: center;
  position: absolute;
  top: 1%;
  color: white;
  font-family: 'Cabin', sans-serif;
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
  border-radius: 4px;
  padding: 10px;
  border: #00b3b3;
  font-weight: bold;
  font-family: 'Cabin', sans-serif;
  font-size: 18px;
`;

const CloseButton = styled(LoginButton)`
  background: rgba(0, 0, 0, 0);
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
`;

const SubmitButton = styled(LoginButton)``;

