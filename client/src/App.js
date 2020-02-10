import React from 'react';
import GoogleMap from './components/GoogleMap';
import data from './data/UserData.json';
import Header from './components/Header';
import styled from 'styled-components';
import Invite from './components/Invite';
import ConfirmLunch from './components/ConfirmLunch'
import { HashRouter, Switch, Route } from 'react-router-dom';
require('dotenv').config();

// console.log(process.env.REACT_APP_GOOGLE_API_KEY);
function App() {
  return (
    <HashRouter>
      <Switch>
        <AppWrapper>
          <Header />
          <GoogleMap />
          <Route path="/confirmlunch" component={ConfirmLunch} />
          {/* <Invite /> */}
        </AppWrapper>
      </Switch>
    </HashRouter>
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
