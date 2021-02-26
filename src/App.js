import React, { useState } from 'react';
import MyInfo from './components/MyInfo';

function App() {
  const[profileStatus, setProfileStatus] = useState(false);

  return (
    <div className="App">
      <MyInfo profileStatus={profileStatus}/>
    </div>
  );
}

export default App;
