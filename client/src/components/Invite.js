import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios'

const InviteDiv = styled.div`
  background: rgba(0, 0, 0, 0.6);
  height: 80vh;
  width: 60vw;
  margin-left: 20%;
  margin-top: 12%;
  color: white;
  z-index: 30;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

const InviteContent = styled.div`
  height: 60vh;
  width: 50vw;
`;

const InviteHeader = styled.h1`
  text-align: center;
  top: 1%;
  color: white;
  font-family: 'Cabin', sans-serif;
`;

const LunchForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const RestaurantLabel = styled.label`
  color: white;
  font-size: 15px;
  padding: 5px;
`;

const AcceptButton = styled.button`
  background-color: #00b3b3;
  color: white;
  border-radius: 4px;
  padding: 10px;
  border: #00b3b3;
  font-weight: bold;
  font-family: 'Cabin', sans-serif;
  font-size: 18px;
	margin-top: 10px;
	width: 15vw;
	margin: auto;
	margin-top: 15px;
`;

const DeclineButton = styled(AcceptButton)`
	background-color: red;
`;


function handleDecline(event) {
	event.preventDefault();
	console.log("decline");
};

function handleSubmit(event) {
	event.preventDefault();
	console.log("Take to mentor confirm screen. Add lunch to DB")
	addLunch();
};

const addLunch = async () => {
	try {
		return await axios.post('http://localhost:5000/api/v1/lunches/', { lunch: {
			userId: 'userId',
			date: 'date',
			time: 'time',
			restaurant: 'restaurants[i]'
			}
		});
	} catch (error) {
		console.error(error)
	}
}


const Invite = () => {
	// const [isOpen, setIsOpen] = useState(false);
	// if (!isOpen) {
  //   return (
  //     <Invite  />
  //   );
  // }
	return (
    <InviteDiv>
      <InviteContent>
        <InviteHeader>
          {' '}
          USER has requested lunch with you on DATE at TIME
        </InviteHeader>
        <LunchForm onSubmit={handleSubmit}>
          <h3>Please select 1 restaurant from the following options:</h3>
          <RestaurantLabel for="restaurant1">Restaurant 1</RestaurantLabel>
          <input type="radio" name="restaurant1"></input>

          <RestaurantLabel for="restaurant2">Restaurant 2</RestaurantLabel>
          <input type="radio" name="restaurant2"></input>

          <RestaurantLabel for="restaurant3">Restaurant 3</RestaurantLabel>
          <input type="radio" name="restaurant3"></input>
          <AcceptButton type="submit">
            {' '}
            <Link to="/confirmlunch">Accept</Link>
          </AcceptButton>
          <DeclineButton onClick={handleDecline}>Decline</DeclineButton>
        </LunchForm>
      </InviteContent>
    </InviteDiv>
  );
};

export default Invite;