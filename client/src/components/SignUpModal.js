import React, { useState} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

const Modal = styled.div`
	background-color: white;
	width: 60%;
	height: 60%;
	z-index: 20;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Header = styled.h1`
	text-align: center;
`;

const SignUpForm = styled.form`

`;

const Label = styled.label`

`;

const Input = styled.input`

`;

const SignUpButton = styled.button`
	background-color: gray;
	font-weight: bold;
	border-radius: 4px;
	padding: 10px;
`;

const CloseButton = styled(SignUpButton)`
	background-color: red;
	`;

const SignUpModal = () => {
	const [isOpen, setIsOpen] = useState(false);
	if (!isOpen) {
		document.getElementById('root').style.filter = 'blur(0px)';
		return  <SignUpButton onClick={() => setIsOpen(true)}>Sign Up</SignUpButton>
	}

		document.getElementById('root').style.filter = 'blur(5px)';

	return ReactDOM.createPortal(
			<Modal>
				<CloseButton onClick={() => setIsOpen(false)}>Close</CloseButton>
				<Header>Title of Form</Header>
					<SignUpForm>
						<Label for="name">Name:</Label>
						<Input type="text" name="name"/>
					</SignUpForm>
			</Modal>, document.getElementById('modal-root') 
	)
}

export default SignUpModal;