import React, { useState } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import Sloth from './sloth.jpg'

const ProfileModalDiv = styled.div`
  background: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  color: white;
  width: 55vw;
  height: 90vh;
  z-index: 30;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20%;
  margin-top: 12%;
  position: absolute;
  padding: 30px;
  overflow: scroll;
`;

const ProfileContainer = styled.div``;

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
  width: 30%;
`;

const ProfileButton = styled.button`
  padding: 20px;
  background-color: #00b3b3;
  border-style: solid;
  border-color: #00b3b3;
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
  background: rgba(0, 0, 0, 0);
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

const SkillCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8);
  background-color: coral;
  font-weight: bolder;
  transition: 0.3s;
  text-align: center;
  padding: 10px;
  margin: 5px;
  font-size: 15px;
  display: inline;
`;

const AvailButton = styled(ProfileButton)`
border-radius: 8px;
margin-left: 12vw;
`;

const ProfileModal = ({...other}) => {
  const [isOpen, setIsOpen] = useState(false);
  if (!isOpen) {
    document.getElementById('root').style.filter = 'blur(0px)';
    return <ProfileButton onClick={() => setIsOpen(true)} {...other}>View Profile</ProfileButton>;
  }

  document.getElementById('root').style.filter = 'blur(3px)';

  return ReactDOM.createPortal(
    <ProfileModalWrapper>
      <ProfileModalDiv>
        <CloseButton onClick={() => setIsOpen(false)}>
          {' '}
          <Icon color="white" size="large" name="window close" />
        </CloseButton>
        <ProfileContainer>
          <Image src={Sloth} />
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
          <Header> Skills </Header>
          <SkillCard>Skill 1</SkillCard>
          <SkillCard>Skill 2</SkillCard>
          <SkillCard>Skill 3</SkillCard>
          <AvailButton>
            {' '}
            <Link to="/availability" style={{color: 'white'}}>Add Availability</Link>{' '}
          </AvailButton>
        </ProfileContainer>
      </ProfileModalDiv>
    </ProfileModalWrapper>,
    document.getElementById('modal-root')
  );
};

export default ProfileModal;












