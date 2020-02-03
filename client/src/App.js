import React from 'react';
import GoogleMap from './components/GoogleMap';
import data from './data/UserData.json';
import Header from './components/Header'
import restaurant from './data/RestaurantData.json';
import HamburgerDrawer from './components/HamburgerDrawer';

function App() {
  return (
    <div>
      <GoogleMap />
      <Header />
      <HamburgerDrawer />
      <p>{data.map(user => user.firstName)}</p>
    </div>
  );
}

export default App;
