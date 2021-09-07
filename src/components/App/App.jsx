import React, { useEffect } from 'react';
import GoogleMap from '../GoogleMap/GoogleMap';
import AddJobLocation from '../AddJobLocation/AddJobLocation'

import './App.css';

function App() {
  return (
      <div>
        <AddJobLocation />
        <GoogleMap />
      </div>
  );
}

export default App;
