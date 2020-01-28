import React from 'react';
import GoogleMap from './components/GoogleMap';
import data from './data/UserData.json';
import restaurant from './data/RestaurantData.json';

function App() {
  return (
    <div>
      <GoogleMap />
      <p>{data.map(user => user.firstName)}</p>
      <p>{restaurant.map(restaurant => restaurant.location)}</p>
    </div>
  );
}

export default App;
