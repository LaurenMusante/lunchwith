import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Availability from './components/Availability';
import Calendar from './components/Calendar';
import ConfirmLunch from './components/ConfirmLunch';
import CreateProfile from './components/CreateProfile';
import GoogleMap from './components/GoogleMap';
import Header from './components/Header';
import Invite from './components/Invite';
require('dotenv').config();

console.log(process.env.REACT_APP_GOOGLE_API_KEY);

const App = () => {
  return (
    <Router>
      <AppWrapper>
        <Header />
        <GoogleMap />
        <CreateProfile />
        {/* <Calendar /> */}
      </AppWrapper>

      <Switch>
        <Route path="/invite">
          <Invite />
        </Route>
        <Route path="/confirmlunch">
          <ConfirmLunch />
        </Route>
        <Route path="/calendar">
          <Calendar />
        </Route>
        <Route path="/availability">
          <Availability />
        </Route>
      </Switch>
    </Router>
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
