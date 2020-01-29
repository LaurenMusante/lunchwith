import React from 'react';
import data from './data/UserData.json';
import restaurant from './data/RestaurantData.json';

function App() {
  return (
    <div>
      <p>{data.map(user => user.firstName)}</p>
    </div>
  );
}

export default App;
