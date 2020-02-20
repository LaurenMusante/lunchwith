import React, { useState } from 'react';
import styled from 'styled-components'
import { Form, Icon } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { sendUserToRedux } from '../actions';
import axios from 'axios';

const mentorOptions = [
  { key: 'mr', text: 'Mentor', value: true },
  { key: 'me', text: 'Mentee', value: false }
];

const skillOptions = [
  { key: 'angular', text: 'Angular', value: 'angular' },
  { key: 'css', text: 'CSS', value: 'css' },
  { key: 'c#', text: 'C#/.NET', value: 'c#' },
  { key: 'design', text: 'Graphic Design', value: 'design' },
  { key: 'ember', text: 'Ember', value: 'ember' },
  { key: 'html', text: 'HTML', value: 'html' },
  { key: 'ia', text: 'Information Architecture', value: 'ia' },
  { key: 'javascript', text: 'Javascript', value: 'javascript' },
  { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
  { key: 'meteor', text: 'Meteor', value: 'meteor' },
  { key: 'node', text: 'NodeJS', value: 'node' },
  { key: 'python', text: 'Python', value: 'python' },
  { key: 'rails', text: 'Rails', value: 'rails' },
  { key: 'react', text: 'React', value: 'react' },
  { key: 'ruby', text: 'Ruby', value: 'ruby' },
  { key: 'SQL', text: 'SQL', value: 'SQL' },
  { key: 'ui', text: 'UI Design', value: 'ui' },
  { key: 'ux', text: 'User Experience', value: 'ux' }
];

const CreateProfileWrapper = styled.div`
  background: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  color: white;
  width: 60vw;
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

const ProfileForm = styled.form`
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

const SubmitButton = styled.button`
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

const CreateProfile = () => {
  const [bio, setBio] = useState('');
  const [mentor, setMentor] = useState('');
  const [skills, setSkills] = useState('');
  const userID = useSelector(state => state.user.id);
  const dispatch = useDispatch();
  
  
  const [isOpen, setIsOpen] = useState(true);
  if (!isOpen) {
    document.getElementById('root').style.filter = 'blur(0px)';
    return <SignUpButton onClick={() => setIsOpen(true)}>Sign Up</SignUpButton>
  }
  
  const handleSubmit = async event => {
    event.preventDefault();
    console.log('form: ', bio, mentor, skills);
    console.log('user ID is: ', userID);
    
    setIsOpen(false);
    try {
      const response = await axios.put(`http://localhost:5000/api/v1/users/${userID}`, {
        bio,
        mentor,
        skills
      });
      // dispatch(sendUserToRedux(response.data.rows[0]));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CreateProfileWrapper>
      <CloseButton onClick={() => setIsOpen(false)}>
        {' '}
        <Icon color="white" size="large" name="window close" />
      </CloseButton>
      <ProfileForm onSubmit={handleSubmit}>
        <Label for="bio">Tell us a bit about yourself:</Label>
        <Input
          type="textbox"
          name="bio"
          value={bio}
          onChange={e => setBio(e.target.value)}
        />
        <Form.Select
          fluid
          label="I'd like to be a..."
          options={mentorOptions}
          placeholder="Mentor"
          onChange={(e, { value }) => setMentor(value)}
        />
        <Form.Select
          fluid
          label="Select your top 3 technical skills"
          options={skillOptions}
          multiple
          select
          placeholder="Skills"
          onChange={(e, { value }) => setSkills(value)}
        />
        <br></br>
        <SubmitButton type="submit">Submit</SubmitButton>
      </ProfileForm>
    </CreateProfileWrapper>
  );
}

export default CreateProfile;