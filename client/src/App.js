import React from 'react';
import GoogleMap from './components/GoogleMap';
import Header from './components/Header';
import data from './data/UserData.json';
import restaurant from './data/RestaurantData.json';



function App() {
  return (
    <div>
      <GoogleMap />
      <Header />
      <p>{data.map(user => user.firstName)}</p>
    </div>
  );
}

export default App;
