import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ConfirmLunchDiv = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: green;
	position: relative;
	z-index: 50;
`;

const ConfirmLunch = () => {
	return(
			<ConfirmLunchDiv>
					<h1>HI</h1>	
			</ConfirmLunchDiv>
	)
};

export default ConfirmLunch;