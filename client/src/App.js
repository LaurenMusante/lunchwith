import React from 'react';
import GoogleMap from './components/GoogleMap';
import Header from './components/Header';
import styled from 'styled-components';
import Invite from './components/Invite';
import ConfirmLunch from './components/ConfirmLunch';
import Calendar from './components/Calendar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
require('dotenv').config();

console.log(process.env.REACT_APP_GOOGLE_API_KEY);

const App = () => {
  return (
    <Router>
      <AppWrapper>
        <Header />
        <GoogleMap />
        <Calendar />
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
