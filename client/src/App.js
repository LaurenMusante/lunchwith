import React from 'react';
import GoogleMap from './components/GoogleMap';
import data from './data/UserData.json';
import Header from './components/Header'

function App() {
  return (
    <div>
      <Header />
      <GoogleMap />
      <p>{data.map(user => user.firstName)}</p>
    </div>
  );
}

export default App;
