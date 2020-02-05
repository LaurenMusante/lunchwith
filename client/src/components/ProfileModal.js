import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Container } from 'semantic-ui-react';
import Sloth from './sloth.jpg'
import DrawerButton from './HamburgerDrawer'

const ProfileModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  if (!isOpen) {
    document.getElementById('root').style.filter = 'blur(0px)';
    return <ProfileButton onClick={() => setIsOpen(true)}>View Profile</ProfileButton>;
  }

  document.getElementById('root').style.filter = 'blur(3px)';

  return ReactDOM.createPortal(
    <ProfileModalWrapper>
      <ProfileModalDiv>
        <CloseButton onClick={() => setIsOpen(false)}>X</CloseButton>
        <Container>
            <Image src={Sloth}/>

          <Header> USER NAME </Header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h1> Skills </h1>
          <h3>Skill 1</h3>
          <h3>Skill 2</h3>
          <h3>Skill 3</h3>
        </Container>
      </ProfileModalDiv>
    </ProfileModalWrapper>,
    document.getElementById('modal-root')
  );
};

export default ProfileModal;

const ProfileModalDiv = styled.div`
  background-color: #4d4d4d;
  border-radius: 20px;
  color: white;
  width: 60%;
  height: 80%;
  z-index: 30;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20%;
  margin-top: 12%;
  position: absolute;
  padding: 30px;
`;

const Header = styled.h1`
  text-align: center;
  top: 0;
  color: white;
  padding: 2px;
`;

const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
	margin-top: 15vh;
	border-radius: 50%;
  width: 40%;
`;

const ProfileButton = styled.button`
  padding: 20px;
  background-color: #00b3b3;
  border-style: solid;
  border-color: orange;
  border-width: 2px;
  color: white;
  width: 140px;
  margin: 5px;
  cursor: pointer;
  font-weight: bold;
  font-family: 'Cabin', sans-serif;
  font-size: 18px;
`;


const CloseButton = styled(ProfileButton)`
  background-color: #4d4d4d;
  font-weight: bold;
  font-family: 'Cabin', sans-serif;
  font-size: 25px;
  padding: 15px;
  position: absolute;
  top: 0;
  left: 0;
  border: #4d4d4d;
  border-radius: 20px;
  width: 5px;
`;

const ProfileModalWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;











