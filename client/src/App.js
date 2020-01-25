import React from 'react';
import data from './data/SeedData.json';

function App() {
  return <div>{data.map(user => user.name)}</div>;
}

export default App;
