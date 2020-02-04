import React from 'react';
import GoogleMap from './components/GoogleMap';
import data from './data/UserData.json';
import Header from './components/Header';
import styled from 'styled-components'
require('dotenv').config();

console.log(process.env.REACT_APP_GOOGLE_API_KEY);
function App() {
  return (
    <AppWrapper>
      <Header />
      <GoogleMap />
      <p>{data.map(user => user.firstName)}</p>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
position: absolute;
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
`
